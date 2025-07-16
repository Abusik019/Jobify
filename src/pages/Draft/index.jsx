import React from "react";
import styles from "./style.module.css";
import edit2 from "../../assets/icons/edit2.svg";
import tablerRed from "../../assets/icons/tablerRed.svg";

import { useState } from "react";

function Draft() {
  const [menuItem, setMenuItem] = useState("category");

  return (
    <div className={styles.favorites}>
      <div className={styles.favoritesContainer}>
        <input type="text" placeholder="Поиск" />
        {(menuItem ===  "task" || menuItem === "category") && (
          <div className={styles.saveTask}>
          <h2 className={styles.blockTitle}>Мои объявления</h2>
          <p style={{color: "gray"}}>
            Lorem ipsum dolor sit amet consectetur. Nascetur suspendisse eu
            viverra morbi platea.
          </p>
          <ul className={styles.saveTaskList}>
            <li>
              <div className={styles.taskContent}>
                <h4>Контекстная реклама любых видов под ключ</h4>
                <div>
                  <h3>от 1000₽</h3>
                </div>
              </div>
              <button>
                <img src={edit2} alt="" />
                <img src={tablerRed} alt="" />
              </button>
            </li>
            <li>
              <div className={styles.taskContent}>
                <h4>Контекстная реклама любых видов под ключ</h4>
                <div>
                  <h3>от 1000₽</h3>
                </div>
              </div>
              <button>
                <img src={edit2} alt="" />
                <img src={tablerRed} alt="" />
              </button>
            </li>
          </ul>
        </div>
        )}
         {(menuItem === "consultation" || menuItem === "category")  && (
          <div className={styles.saveTask}>
          <h2 className={styles.blockTitle}>Консультации</h2>
          <p style={{color: "gray"}}>
            Lorem ipsum dolor sit amet consectetur. Nascetur suspendisse eu
            viverra morbi platea.
          </p>
          <ul className={styles.saveTaskList}>
            <li>
              <div className={styles.taskContent}>
                <h4>Название консультации</h4>
                <div>
                  <h3>Создано 21.02.2024</h3>
                </div>
              </div>
              <button>
                <img src={edit2} alt="" />
                <img src={tablerRed} alt="" />
              </button>
            </li>
            <li>
              <div className={styles.taskContent}>
              <h4>Название консультации</h4>
                <div>
                <h3>Создано 21.02.2024</h3>
                </div>
              </div>
              <button>
                <img src={edit2} alt="" />
                <img src={tablerRed} alt="" />
              </button>
            </li>
          </ul>
        </div>
        ) }
       {(menuItem === "portfolio" || menuItem === "category") && (
         <div className={styles.saveTask}>
         <h2 className={styles.blockTitle}>Портфолио</h2>
         <p style={{color: "gray"}}>
           Lorem ipsum dolor sit amet consectetur. Nascetur suspendisse eu
           viverra morbi platea.
         </p>
         <ul className={styles.saveTaskList}>
           <li>
             <div className={styles.taskContent}>
               <h4>Название проекта</h4>
               <div>
                 <h3>Создано 21.02.2024</h3>
               </div>
             </div>
             <button>
               <img src={edit2} alt="" />
               <img src={tablerRed} alt="" />
             </button>
           </li>
           <li>
             <div className={styles.taskContent}>
             <h4>Название проекта</h4>
               <div>
               <h3>Создано 21.02.2024</h3>
               </div>
             </div>
             <button>
               <img src={edit2} alt="" />
               <img src={tablerRed} alt="" />
             </button>
           </li>
         </ul>
       </div>
       )}
       
      </div>
      <div className={styles.asideContent}>
        <h2>Черновик</h2>
        <ul>
          <li
            onClick={() => setMenuItem("category")}
            style={{
              backgroundColor:
                menuItem === "category" ? "#EAEAEA80" : "transparent",
              opacity: menuItem === "category" ? "1" : "0.6",
            }}
          >
            Все категории
          </li>
          <li
            onClick={() => setMenuItem("task")}
            style={{
              backgroundColor:
                menuItem === "task" ? "#EAEAEA80" : "transparent",
              opacity: menuItem === "task" ? "1" : "0.6",
            }}
          >
            Мои объявления
          </li>
          <li
            onClick={() => setMenuItem("consultation")}
            style={{
              backgroundColor:
                menuItem === "consultation" ? "#EAEAEA80" : "transparent",
              opacity: menuItem === "consultation" ? "1" : "0.6",
            }}
          >
            Консультации
          </li>
          <li
            onClick={() => setMenuItem("portfolio")}
            style={{
              backgroundColor:
                menuItem === "portfolio" ? "#EAEAEA80" : "transparent",
              opacity: menuItem === "portfolio" ? "1" : "0.6",
            }}
          >
            Портфолио
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Draft;
