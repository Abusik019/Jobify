import styles from './style.module.css';
import { useEffect, useRef, useState } from 'react';

import supportImg from '../../assets/images/supportAvatar.svg';
import chatImg from '../../assets/images/chat.png';
import chatTestImg from '../../assets/images/chatTest.png';
import addImageImg from '../../assets/icons/addImage.svg';
import sendMsgImg from '../../assets/icons/sendMessage.svg';

const messages = [
    {
        id: 1,
        isMe: false,
        type: 'text',
        text: 'Lorem ipsum dolor sit amet consectetur. Habitasse fringilla arcu sit fermentum et aliquet :D',
        image: null,
        time: '11:36',
    },
    {
        id: 2,
        isMe: true,
        type: 'textPlusImage',
        text: 'Lorem ipsum dolor sit amet consectetur. Habitasse fringilla arcu tincidunt quis sit fermentum et aliquet. ✌️ Sit curabitur est tempus iaculis donec fermentum.',
        image: chatTestImg,
        time: '11:45',
    },
    {
        id: 3,
        isMe: false,
        type: 'image',
        text: '',
        image: chatTestImg,
        time: '12:01',
    },
];

export default function SupportChat() {
    const [isShowSearch, setIsShowSearch] = useState(false);
    const searchRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsShowSearch(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    function typeOfMessage(message){
        switch(message.type){
            case 'text': 
                return (
                    <p>{message.text}</p>
                );
            case 'textPlusImage':
                return (
                    <>
                        <p>{message.text}</p>
                        <img src={message.image} alt="image" />
                    </>
                );
            case 'image':
                return (
                    <img src={message.image} alt="image" />
                );
            default: 
                return <div></div>
        }
    }

    return (
        <div className={styles.supportWrapper}>
            <div className={styles.support}>
                <div className={styles.supportTopBlock}>
                    <div>
                        <div className={styles.imageContainer}> 
                            <img src={supportImg} width={48} height={48} alt="support" />
                        </div>
                        <h2>
                            Поддержка Jobify
                            <br />
                            <span>Круглосуточно 24/7</span>
                        </h2>
                    </div>
                    <div className={styles.inputWrapper} ref={searchRef}>
                        <input 
                            type="search" 
                            className={`${styles.searchInput} ${isShowSearch ? styles.visible : ''}`}
                            onClick={() => setIsShowSearch(true)}
                        />
                    </div>
                </div>
                <div className={styles.supportBottomBlock}>
                    <div className={styles.chat}>
                        {messages.length === 0 ? (
                            <div className={styles.emptyChat}>
                                <img src={chatImg} width={68} height={68} alt="chat" />
                                <p>Напиши нам, если у тебя<br /> возникли вопросы</p>
                            </div>
                        ) : (
                            <ul className={styles.chatContent}>
                                {messages.length !== 0 && messages.map((item) => (
                                    <li className={`${styles.message} ${item.isMe ? styles.me : styles.notMe}`} key={item.id}>
                                        {typeOfMessage(item)}
                                        <div className={styles.time}>{item.time}</div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className={styles.sendMessage}>
                        <label>
                            <img src={addImageImg} width={28} height={28} alt="add image" />
                            <input
                                type="file"
                                style={{ display: "none" }}
                            />
                        </label>
                        <input type="text" placeholder='Введите сообщение'/>
                        <button><img src={sendMsgImg} width={16} height={16} alt="send message" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
