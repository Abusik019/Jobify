import React from "react";
import styles from "./style.module.css";
import edit2 from "../../assets/icons/edit2.svg";
import tablerRed from "../../assets/icons/tablerRed.svg";
import freelancer from "../../assets/images/freelancer.png";
import chat from "../../assets/icons/chat.svg";
import closeRed from "../../assets/icons/closeRed.svg";
import right from "../../assets/icons/right.svg";

import { useState } from "react";

function CommercialAdvertisement() {
  const [menuItem, setMenuItem] = useState("task");

  return (
    <div className={styles.favorites}>
      {menuItem === "task" && (
        <div>
          <div className={styles.favoritesContainer}>
            <h1 style={{ fontSize: "42px", fontWeight: "400" }}>
              Архив проектов
            </h1>

            <div className={styles.saveTask}>
              <h2 className={styles.blockTitle}>
                Активные заказы <span style={{ color: "gray" }}>(2)</span>
              </h2>
              <p style={{ color: "gray" }}>
                Здесь вы можете видеть все ваши активные задания, полученные от
                заказчиков
              </p>
              <ul className={styles.saveTaskList}>
                <li>
                  <div className={styles.taskContent}>
                    <h4>Нарисовать сайт для интернет-магазина</h4>
                    <div>
                      <h3 style={{ marginTop: "5px" }}>
                        Дата начала: 21.02.2024
                      </h3>
                    </div>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.user}>
                      <img width={36} height={36} src={freelancer} alt="" />
                      <div>
                        <p>Светлана Бурова </p>
                        <p style={{ color: "gray" }}>Россия, Казань</p>
                      </div>
                    </div>
                    <div className={styles.buttons}>
                      <button>
                        {" "}
                        <img width={18} height={18} src={chat} alt="" />
                        Перейти в чат
                      </button>
                      <button>
                        {" "}
                        <img width={18} height={18} src={closeRed} alt="" />
                        Отменить
                      </button>
                      <button>Выполнить</button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles.taskContent}>
                    <h4>Нарисовать сайт для интернет-магазина</h4>
                    <div>
                      <h3 style={{ marginTop: "5px" }}>
                        Дата начала: 21.02.2024
                      </h3>
                    </div>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.user}>
                      <img width={36} height={36} src={freelancer} alt="" />
                      <div>
                        <p>Светлана Бурова </p>
                        <p style={{ color: "gray" }}>Россия, Казань</p>
                      </div>
                    </div>
                    <div className={styles.buttons}>
                      <button>
                        {" "}
                        <img width={18} height={18} src={chat} alt="" />
                        Перейти в чат
                      </button>
                      <button>
                        {" "}
                        <img width={18} height={18} src={closeRed} alt="" />
                        Отменить
                      </button>
                      <button>Выполнить</button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div
            style={{ marginTop: "15px" }}
            className={styles.favoritesContainer}
          >
            <div style={{ marginTop: "0" }} className={styles.saveTask}>
              <h2 className={styles.blockTitle}>
                История заказов <span style={{ color: "gray" }}>(2)</span>
              </h2>
              <p style={{ color: "gray" }}>
                Здесь вы можете видеть все ваши выполненные задания
              </p>
              <ul className={styles.saveTaskList}>
                <li>
                  <div className={styles.taskContent}>
                    <h4>Нарисовать сайт для интернет-магазина</h4>
                    <div>
                      <h3 style={{ marginTop: "5px" }}>
                        Дата начала: 21.02.2024
                      </h3>
                    </div>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.user}>
                      <img width={36} height={36} src={freelancer} alt="" />
                      <div>
                        <p>Светлана Бурова </p>
                        <p style={{ color: "gray" }}>Россия, Казань</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles.taskContent}>
                    <h4>Нарисовать сайт для интернет-магазина</h4>
                    <div>
                      <h3 style={{ marginTop: "5px" }}>
                        Дата начала: 21.02.2024
                      </h3>
                    </div>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.user}>
                      <img width={36} height={36} src={freelancer} alt="" />
                      <div>
                        <p>Светлана Бурова </p>
                        <p style={{ color: "gray" }}>Россия, Казань</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {menuItem === "consultation" && (
        <div>
          <div className={styles.favoritesContainer}>
            <h1 style={{ fontSize: "42px", fontWeight: "400" }}>Мои отклики</h1>

            <div className={styles.saveTask}>
              <h2 className={styles.blockTitle}>
                Активные отклики <span style={{ color: "gray" }}>(3)</span>
              </h2>
              <p style={{ color: "gray" }}>
                Здесь видны все отлики, еще не получившие ответа
              </p>
              <ul className={styles.saveTaskList}>
                <li style={{ display: "flex" }}>
                  <div className={styles.taskContent}>
                    <h4>Название задания</h4>
                    <div>
                      <h3 style={{ marginTop: "5px" }}>
                        Дата отклика: 21.02.2024
                      </h3>
                    </div>
                  </div>
                  <img src={right} alt="" />
                </li>
                <li style={{ display: "flex" }}>
                  <div className={styles.taskContent}>
                    <h4>Название задания</h4>
                    <div>
                      <h3 style={{ marginTop: "5px" }}>
                        Дата отклика: 21.02.2024
                      </h3>
                    </div>
                  </div>
                  <img src={right} alt="" />
                </li>
                <li style={{ display: "flex" }}>
                  <div className={styles.taskContent}>
                    <h4>Название задания</h4>
                    <div>
                      <h3 style={{ marginTop: "5px" }}>
                        Дата отклика: 21.02.2024
                      </h3>
                    </div>
                  </div>
                  <img src={right} alt="" />
                </li>
              </ul>
            </div>
          </div>
          <div
            className={styles.favoritesContainer}
            style={{ marginTop: "15px" }}
          >
            <div style={{ marginTop: "0" }} className={styles.saveTask}>
              <h2 className={styles.blockTitle}>
                История откликов <span style={{ color: "gray" }}>(3)</span>
              </h2>
              <p style={{ color: "gray" }}>
                Здесь вы можете видеть все ваши отклики
              </p>
              <ul className={styles.saveTaskList}>
                <li style={{ display: "flex" }}>
                  <div className={styles.taskContent}>
                    <h4>Название задания</h4>
                    <div>
                      <h3 style={{ marginTop: "5px" }}>
                        Дата отклика: 21.02.2024
                      </h3>
                    </div>
                    <p
                      style={{
                        color: "#F63939",
                        fontSize: "16px",
                        marginTop: "10px",
                        fontWeight: "400",
                      }}
                    >
                      Отклик отклонен
                    </p>
                  </div>
                  <img src={right} alt="" />
                </li>
                <li style={{ display: "flex" }}>
                  <div className={styles.taskContent}>
                    <h4>Название задания</h4>
                    <div>
                      <h3 style={{ marginTop: "5px" }}>
                        Дата отклика: 21.02.2024
                      </h3>
                    </div>
                    <p
                      style={{
                        color: "#F63939",
                        fontSize: "16px",
                        marginTop: "10px",
                        fontWeight: "400",
                      }}
                    >
                      Отклик отклонен
                    </p>
                  </div>
                  <img src={right} alt="" />
                </li>
                <li style={{ display: "flex" }}>
                  <div className={styles.taskContent}>
                    <h4>Название задания</h4>
                    <div>
                      <h3 style={{ marginTop: "5px" }}>
                        Дата отклика: 21.02.2024
                      </h3>
                    </div>
                    <p
                      style={{
                        color: "#4A7358",
                        fontSize: "16px",
                        marginTop: "10px",
                        fontWeight: "400",
                      }}
                    >
                      Отклик принят
                    </p>
                  </div>
                  <img src={right} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {menuItem === "portfolio" && (
        <div>
          <div className={styles.favoritesContainer}>
            <h1 style={{ fontSize: "42px", fontWeight: "400" }}>
              Предложения о работе <span style={{ color: "gray" }}>(3)</span>
            </h1>

            <div className={styles.saveTask}>
              <ul className={styles.saveTaskList}>
                <li>
                  <div className={styles.taskContent}>
                    <h4>Название объявления</h4>
                    <div>
                      <h3 style={{ marginTop: "5px" }}>
                        Дата начала: 21.02.2024
                      </h3>
                    </div>
                    <p
                      style={{
                        color: "gray",
                        fontSize: "16px",
                        marginTop: "10px",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur. Non urna
                      pellentesque libero lobortis turpis gravida. Posuere purus
                      convallis quam convallis duis montes est ornare lorem...{" "}
                      <button style={{ backgroundColor: "transparent" }}>
                        Показать все
                      </button>{" "}
                    </p>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.user}>
                      <img width={36} height={36} src={freelancer} alt="" />
                      <div>
                        <p>Светлана Бурова </p>
                        <p style={{ color: "gray" }}>Россия, Казань</p>
                      </div>
                    </div>
                    <div className={styles.buttons}>
                      <button>
                        {" "}
                        <img width={18} height={18} src={chat} alt="" />
                        Перейти в чат
                      </button>
                      <button>
                        {" "}
                        <img width={18} height={18} src={closeRed} alt="" />
                        Отменить
                      </button>
                      <button>Выполнить</button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles.taskContent}>
                    <h4>Название объявления</h4>
                    <div>
                      <h3 style={{ marginTop: "5px" }}>
                        Дата начала: 21.02.2024
                      </h3>
                    </div>
                    <p
                      style={{
                        color: "gray",
                        fontSize: "16px",
                        marginTop: "10px",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur. Non urna
                      pellentesque libero lobortis turpis gravida. Posuere purus
                      convallis quam convallis duis montes est ornare lorem...{" "}
                      <button style={{ backgroundColor: "transparent" }}>
                        Показать все
                      </button>{" "}
                    </p>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.user}>
                      <img width={36} height={36} src={freelancer} alt="" />
                      <div>
                        <p>Светлана Бурова </p>
                        <p style={{ color: "gray" }}>Россия, Казань</p>
                      </div>
                    </div>
                    <div className={styles.buttons}>
                      <button>
                        {" "}
                        <img width={18} height={18} src={chat} alt="" />
                        Перейти в чат
                      </button>
                      <button>
                        {" "}
                        <img width={18} height={18} src={closeRed} alt="" />
                        Отменить
                      </button>
                      <button>Выполнить</button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles.taskContent}>
                    <h4>Название объявления</h4>
                    <div>
                      <h3 style={{ marginTop: "5px" }}>
                        Дата начала: 21.02.2024
                      </h3>
                    </div>
                    <p
                      style={{
                        color: "gray",
                        fontSize: "16px",
                        marginTop: "10px",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur. Non urna
                      pellentesque libero lobortis turpis gravida. Posuere purus
                      convallis quam convallis duis montes est ornare lorem...{" "}
                      <button style={{ backgroundColor: "transparent" }}>
                        Показать все
                      </button>{" "}
                    </p>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.user}>
                      <img width={36} height={36} src={freelancer} alt="" />
                      <div>
                        <p>Светлана Бурова </p>
                        <p style={{ color: "gray" }}>Россия, Казань</p>
                      </div>
                    </div>
                    <div className={styles.buttons}>
                      <button>
                        {" "}
                        <img width={18} height={18} src={chat} alt="" />
                        Перейти в чат
                      </button>
                      <button>
                        {" "}
                        <img width={18} height={18} src={closeRed} alt="" />
                        Отменить
                      </button>
                      <button>Выполнить</button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
         
        </div>
      )}

      <div className={styles.asideContent}>
        <ul>
          <li
            onClick={() => setMenuItem("task")}
            style={{
              backgroundColor:
                menuItem === "task" ? "#EAEAEA80" : "transparent",
              opacity: menuItem === "task" ? "1" : "0.6",
            }}
          >
            История работы
          </li>
          <li
            onClick={() => setMenuItem("consultation")}
            style={{
              backgroundColor:
                menuItem === "consultation" ? "#EAEAEA80" : "transparent",
              opacity: menuItem === "consultation" ? "1" : "0.6",
            }}
          >
            Мои отклики
          </li>
          <li
            onClick={() => setMenuItem("portfolio")}
            style={{
              backgroundColor:
                menuItem === "portfolio" ? "#EAEAEA80" : "transparent",
              opacity: menuItem === "portfolio" ? "1" : "0.6",
            }}
          >
            Предложения о работе
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CommercialAdvertisement;
