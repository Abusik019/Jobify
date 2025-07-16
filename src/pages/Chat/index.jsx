import { useEffect, useState, useRef } from "react";
import { create } from "zustand";
import styles from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, getUser } from "../../redux/slices/userSlice";
import axios from "axios";
import Frame from "../../assets/icons/Frame.svg";
import Vector from "../../assets/icons/Vector.svg";
import { Centrifuge } from "centrifuge";
import edit from "../../assets/icons/edit1.svg";
import close from "../../assets/icons/closeRed.svg";
import copy from "../../assets/icons/copy.svg";
import freelancer from "../../assets/images/freelancer.png";

const useChatStore = create((set) => ({
  messages: {},
  setMessages: (receiverId, msgs) =>
    set((state) => ({ messages: { ...state.messages, [receiverId]: msgs } })),
  addMessage: (receiverId, msg) =>
    set((state) => ({
      messages: {
        ...state.messages,
        [receiverId]: [...(state.messages[receiverId] || []), msg],
      },
    })),
  systemMessage: null,
  setSystemMessage: (msg) => set(() => ({ systemMessage: msg })),
  error: null,
  setError: (msg) => set(() => ({ error: msg })),
}));

export default function Chat() {
  const {
    messages,
    setMessages,
    addMessage,
    systemMessage,
    setSystemMessage,
    error,
    setError,
  } = useChatStore();

  const [text, setText] = useState("");
  const [receiverId, setReceiverId] = useState(null);
  const [editingMessage, setEditingMessage] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [menuPosition, setMenuPosition] = useState(null);

  const centrifugoRef = useRef(null);
  const channelRef = useRef(null);
  const fileInputRef = useRef(null);

  const dispatch = useDispatch();
  const senderId = useSelector((state) => state.user.user?.id);
  const users = useSelector((state) => state.user.users?.users || []);
  const token = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    dispatch(getUser());
    dispatch(fetchUsers());
  }, [dispatch]);

  const deleteMessage = async (createdAt) => {
    try {
      await axios.delete("https://jobify.api-coreinno.ru/api/chat/delete", {
        headers: { Authorization: `Bearer ${token}` },
        data: { receiverId, createdAt },
      });
      // Удаляем сообщение локально
      setMessages(
        receiverId,
        (messages[receiverId] || []).filter(
          (msg) => new Date(msg.time).toISOString() !== createdAt
        )
      );
    } catch (err) {
      console.error("Ошибка при удалении сообщения:", err);
      setError("Ошибка при удалении сообщения");
    }
  };

  const editMessage = async () => {
    if (!editingMessage || !text.trim()) return;

    try {
      await axios.put(
        "https://jobify.api-coreinno.ru/api/chat/edit",
        {
          receiverId,
          createdAt: new Date(editingMessage.time).toISOString(),
          newText: text,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // Очистим режим редактирования
      setEditingMessage(null);
      setText("");
    } catch (err) {
      console.error("Ошибка при редактировании сообщения:", err);
      setError("Ошибка при редактировании сообщения");
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file || !receiverId) return;

    const formData = new FormData();
    formData.append("receiverId", receiverId);
    formData.append("file", file);
    formData.append("text", ""); // текст по желанию, сейчас пустой

    try {
      const response = await axios.post(
        "https://jobify.api-coreinno.ru/api/chat/upload",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            // "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("✅ Файл загружен:", response.data);
      // Файл придёт сам через Centrifugo, как и обычное сообщение
    } catch (err) {
      console.error("Ошибка при загрузке файла:", err);
      setError("Не удалось загрузить файл");
    }
  };

  const connectToCentrifugo = async (receiverId) => {
    try {
      const response = await axios.get(
        `https://jobify.api-coreinno.ru/api/chat/connect?receiverId=${receiverId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
          "Cache-Control": "no-cache",
        }
      );

      const { token: centrifugoToken, channel } = response.data;

      // 👉 Если уже подключены к нужному каналу — выходим
      if (centrifugoRef.current && channelRef.current === channel) {
        console.log("🔁 Уже подписаны на канал:", channel);
        return;
      }

      channelRef.current = channel;

      // 🔌 Отключаем старый экземпляр, если он есть
      if (centrifugoRef.current) {
        centrifugoRef.current.disconnect();
      }

      const centrifuge = new Centrifuge(
        "wss://centrifugo.api-coreinno.ru/connection/websocket",
        { token: centrifugoToken }
      );

      centrifuge.on("connect", () => {
        console.log("✅ Подключен к Centrifugo");
      });

      centrifuge.on("disconnect", (ctx) => {
        console.warn("🔌 Отключен от Centrifugo", ctx);
      });

      const sub = centrifuge.newSubscription(channel);

      sub.on("publication", (ctx) => {
        console.log("📩 Centrifugo событие:", ctx.data);
        const data = ctx.data;

        if (data.type === "delete") {
          const targetId =
            data.senderId === senderId ? data.receiverId : data.senderId;

          setMessages((prev) => {
            const msgs = prev[targetId] || [];
            return {
              ...prev,
              [targetId]: msgs.filter(
                (msg) => new Date(msg.time).toISOString() !== data.createdAt
              ),
            };
          });

          return;
        }

        if (data.type === "edit") {
          const targetId =
            data.senderId === senderId ? data.receiverId : data.senderId;

          setMessages((prev) => {
            const msgs = prev[targetId] || [];
            return {
              ...prev,
              [targetId]: msgs.map((msg) =>
                new Date(msg.time).toISOString() === data.createdAt
                  ? { ...msg, text: data.newText }
                  : msg
              ),
            };
          });

          return;
        }

        if (data.system) {
          setSystemMessage(data.system);
          if (data.messages) {
            setMessages(receiverId, data.messages);
          }
        } else if (data.time) {
          addMessage(receiverId, data);
        }
      });

      sub.subscribe();
      centrifuge.connect();

      centrifugoRef.current = centrifuge;
    } catch (err) {
      setError("Ошибка подключения к чату");
      console.error(err);
    }
  };

  const loadChatHistory = async (receiverId) => {
    try {
      const response = await axios.get(
        `https://jobify.api-coreinno.ru/api/chat/messages?receiverId=${receiverId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessages(receiverId,  response.data.messages.sort((a, b) => new Date(a.time) - new Date(b.time)));
    } catch (error) {
      console.error("Ошибка загрузки чата:", error);
    }
  };

  const sendMessage = async (e) => {
    if (editingMessage) {
      e.preventDefault();
      await editMessage();
      return;
    }
    if (text.length > 0) {
      e.preventDefault();
      if (!receiverId) {
        setError("Выберите пользователя для чата!");
        return;
      }

      try {
        const response = await axios.post(
          "https://jobify.api-coreinno.ru/api/chat/send",
          { receiverId, text },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        console.log("📤 Сообщение отправлено:", response.data);
        // Оно придёт само через Centrifugo, можно не дублировать вручную
        setText("");
      } catch (err) {
        console.error("Ошибка отправки сообщения:", err);
      }
    } else {
      e.preventDefault();
    }
  };

  const getReceiverName = (receiverId) => {
    const receiver = users.find((user) => user.id === receiverId);
    return receiver ? receiver.firstName : "Собеседник";
  };

  const clickRight = (index, e) => {
    e.preventDefault();
    setOpenMenu(index);
    setMenuPosition({
      x: e.pageX,
      y: e.pageY,
    });
  };

  return (
    <div onClick={() => setOpenMenu(null)} className={styles.rod}>
      <div className={styles.users}>
        <h2>Пользователи:</h2>
        <ul className={styles.userList}>
          {users.map((user) => (
            <li
              key={user.id}
              className={receiverId === user.id ? styles.activeUser : ""}
              onClick={() => {
                setReceiverId(user.id);
                connectToCentrifugo(user.id);
                loadChatHistory(user.id);
              }}
            >
              <img width={48} height={48} src={freelancer} alt="" />

              <div>
                {user.firstName} {user.lastName}
                <p>тема задания</p>
                <p>
                  {messages[user.id]?.slice(-1)[0]?.text || "Нет сообщений"}
                  <span style={{ marginLeft: "15px" }}>
                    {messages[user.id]?.slice(-1)[0]?.time &&
                      new Date(
                        messages[user.id].slice(-1)[0].time
                      ).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })}
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.chatContainer}>
        <h1 className={styles.chatTitle}>Чат</h1>

        {systemMessage && (
          <div className={styles.systemMessage}>{systemMessage}</div>
        )}
        {error && <div className={styles.errorMessage}>{error}</div>}

        <div className={styles.chatBox}>
          {(messages[receiverId] || []).map((msg, index) => (
            <div
              onContextMenu={(e) => clickRight(index, e)}
              key={index}
              className={
                msg.senderId === senderId
                  ? styles.myMessage
                  : styles.otherMessage
              }
            >
              <strong>
                {msg.senderId === senderId ? "Вы" : getReceiverName(receiverId)}
                :
              </strong>{" "}
              {msg.text}
              {msg.fileUrl && (
                <div>
                  <a
                    href={msg.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📎 Прикрепленный файл
                  </a>
                </div>
              )}
              <div className={styles.timestamp}>
                {msg.time ? new Date(msg.time).toLocaleTimeString() : ""}
              </div>
              {openMenu === index && (
                <div
                  style={{
                    position: "absolute",
                    top: menuPosition.y,
                    left: menuPosition.x,
                    // display: msg.senderId !== senderId && "none",
                  }}
                  className={styles.modalMenu}
                >
                  {msg.senderId === senderId && (
                    <button
                      className={styles.editButton}
                      onClick={() => {
                        setEditingMessage(msg);
                        setText(msg.text);
                      }}
                    >
                      <img width={24} height={24} src={edit} alt="" />{" "}
                      Редактировать
                    </button>
                  )}
                  <button
                    className={styles.copyButton}
                    onClick={() => {
                      navigator.clipboard
                        .writeText(msg.text)
                        .then(() => {
                          alert("Сообщение скопировано!");
                        })
                        .catch((err) => {
                          console.error("Ошибка копирования:", err);
                        });
                    }}
                  >
                    <img width={24} height={24} src={copy} alt="" /> Копировать
                  </button>
                  {msg.senderId === senderId && (
                    <button
                      className={styles.deleteButton}
                      onClick={() =>
                        deleteMessage(new Date(msg.time).toISOString())
                      }
                    >
                      <img width={24} height={24} src={close} alt="" /> Удалить
                      у всех
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <form
          onSubmit={sendMessage}
          style={{ position: "relative", width: "720px" }}
        >
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          <img
            className={styles.vector}
            width={20}
            height={20}
            src={Vector}
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
            alt=""
          />
          <img
            className={styles.send}
            width={40}
            height={40}
            onClick={sendMessage}
            src={Frame}
            alt=""
          />
          <input
            style={{ backgroundColor: "white" }}
            className={styles.inputField}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Введите сообщение..."
            disabled={!receiverId}
          />
        </form>
      </div>
    </div>
  );
}
