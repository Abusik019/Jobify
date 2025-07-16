import React from "react";
import styles from "./style.module.css";
import avatarImg from "../../assets/images/freelancer.png";
import circleImg from "../../assets/icons/partOfCircle.svg";
import sandTimerImg from "../../assets/icons/sandTimer.svg";
import smallArrowImg from "../../assets/icons/smallArrow.svg";
import copyImg from "../../assets/icons/copy.svg";
import shareImg from "../../assets/icons/share.svg";
import pigImg from "../../assets/icons/pig.svg";
import { useState } from "react";
import close from "../../assets/icons/close.svg";
import stats from "../../assets/icons/Stats.svg";
import group from "../../assets/icons/Group.svg";
import Close1 from "../../assets/icons/Close1.svg"

function TaskSection() {
  const [fixPayment, setFixPayment] = useState(false);
  const [number, setNumber] = useState(1);

  return (
    <div className={styles.announcement}>
      <div className={styles.announcementContainer}>
        {number === 1 && (
          <div
            style={{
              border: "1px solid #EAEAEA",
              padding: "30px 25px 30px 25px",
              borderRadius: "12px",
              boxSizing: "border-box",
            }}
            className={styles.announcementContent}
          >
            <div className={styles.static}>
              <span
                onClick={() => setNumber(1)}
                style={{
                  color: number === 1 ? "#000000" : "gray",
                  cursor: "pointer",
                  borderBottom: number === 1 && "2px inset #000000",
                }}
              >
                Обзор
              </span>
              <span
                onClick={() => setNumber(2)}
                style={{
                  color: number === 2 ? "#000000" : "gray",
                  cursor: "pointer",
                  borderBottom: number === 2 && "2px inset #000000",
                }}
              >
                Статистика
              </span>
              <span
                onClick={() => setNumber(3)}
                style={{
                  color: number === 3 ? "#000000" : "gray",
                  cursor: "pointer",
                  borderBottom: number === 3 && "2px inset #000000",
                }}
              >
                Отклики(100+)
              </span>
            </div>
            <div className={styles.announcementTitleBlock}>
              <h1>Дизайн логотипа для кондитерской лавки</h1>
              <div className={styles.taskInfo}>
                <h2>Дата публикации: 21.12.2024</h2>
                <h3>203</h3>
              </div>
              <div className={styles.authorInfo}>
                <img
                  src={avatarImg}
                  width={58}
                  height={58}
                  alt="freelancer avatar"
                />
                <ul>
                  <li>Заказчик</li>
                  <li>
                    Жанна Кондратьева <span>5.0</span>
                  </li>
                  <li>Регион</li>
                </ul>
              </div>
            </div>
            <div className={styles.announcementDesc}>
              <h2>Описание задания</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Risus odio ac tellus id
                quis ante. Eget pharetra sed quam tortor leo blandit. Ac iaculis
                turpis porttitor lectus sed. Sapien sit elementum pulvinar est
                vitae diam condimentum.
                <br />
                Ipsum non volutpat urna augue amet placerat gravida scelerisque
                risus. Ut tempor maecenas vestibulum elit at amet amet eget.
                Neque lorem lorem diam enim vitae dolor magna non sit.
                Pellentesque eget aliquam suspendisse lacus vitae arcu sem
                lacus. Eu vitae condimentum quisque non vulputate pharetra. Mi
                diam eu semper tellus a enim pulvinar. Tincidunt pharetra vel
                leo enim dictum amet amet quis pellentesque. Arcu at blandit non
                quis ipsum ipsum iaculis. Aliquam tortor massa duis sit
                hendrerit viverra aliquam consequat. Massa diam in donec nec
                commodo quis.
                <br />
                Velit tincidunt sem sed vel potenti quisque fringilla. Rhoncus
                praesent sapien pulvinar ullamcorper sapien quam enim arcu
                habitasse. Feugiat vestibulum lacus sed donec suscipit vulputate
                non. Cursus urna nibh erat risus enim. Est ultricies scelerisque
                mauris euismod. Aliquet lorem tellus sollicitudin sit semper sit
                viverra eu magnis. Ridiculus odio tincidunt ac sit aliquam
                adipiscing eu malesuada est. Sit egestas arcu metus sit urna.
                Aenean cursus molestie posuere convallis scelerisque libero
                metus. Feugiat arcu molestie gravida nec sem magna odio a etiam.
                Aliquam nisl et quam pellentesque.
              </p>
            </div>
            <div className={styles.investments}>
              <h2>Вложения</h2>
              <p>Прикрепленные файлы:</p>
              <div  className={styles.buttons}>
                <button style={{color: "#000000"}}>
                  document.docx <img src={close} alt="" />{" "}
                </button>
                <button style={{color: "#000000"}}>
                  document.docx <img src={close} alt="" />
                </button>
                <button style={{color: "#000000"}}>
                  document.docx <img src={close} alt="" />
                </button>
                <button style={{color: "#000000"}} className={styles.clear}>+</button>
              </div>
            </div>
            <div className={styles.announcementCategories}>
              <h2>Категория заказа</h2>
              <ul>
                <li>Графический дизайн</li>
              </ul>
            </div>

            <div className={styles.announcementDetails}>
              <h2>Детали заказа</h2>
              <ul>
                <li style={{cursor: "pointer"}} onClick={() => setFixPayment(!fixPayment)}>
                  <div >
                    <h2 style={{color: "#000000"}}>Оплата по этапам</h2>
                    <h3>Заказчик платит за отдельные этапы</h3>
                  </div>
                  <img
                    src={fixPayment ? circleImg : pigImg}
                    width={20}
                    height={20}
                    alt="circle"
                  />
                </li>
                <li>
                  <div>
                    <h2 style={{color: "#000000"}}>Сроки</h2>
                    <h3>1-2 недели на каждый из этапов</h3>
                  </div>
                  <img
                    src={sandTimerImg}
                    width={20}
                    height={20}
                    alt="sand timer"
                  />
                </li>
                <li>
                  <div>
                    <h2 style={{color: "#000000"}}>Lorem ipsum</h2>
                    <h3>Lorem ipsum dolor sit amet</h3>
                  </div>
                  <img
                    src={sandTimerImg}
                    width={20}
                    height={20}
                    alt="sand timer"
                  />
                </li>
                <li>
                  <div>
                    <h2>Lorem ipsum</h2>
                    <h3>Lorem ipsum dolor sit amet</h3>
                  </div>
                  <img
                    src={sandTimerImg}
                    width={20}
                    height={20}
                    alt="sand timer"
                  />
                </li>
              </ul>
            </div>

            {fixPayment && (
              <div className={styles.announcementStages}>
                <h2>Этапы задания</h2>
                <ul>
                  <li>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <h3>1200₽</h3>
                  </li>
                  <li>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <h3>1200₽</h3>
                  </li>
                  <li>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <h3>1200₽</h3>
                  </li>
                </ul>
                <button>
                  <span>Показать все этапы</span>
                  <img src={smallArrowImg} width={16} height={16} alt="arrow" />
                </button>
              </div>
            )}

            <div className={styles.linkToTask}>
              <h2>Ссылка на задание</h2>
              <div className={styles.linkToTaskActions}>
                <button>https://music.yandex.ru/artist/54254</button>
                <button>
                  <img src={copyImg} width={24} height={24} alt="copy" />
                </button>
                <button>
                  <img src={shareImg} width={24} height={24} alt="share" />
                </button>
              </div>
            </div>
          </div>
        )}
        {number === 2 && (
          <div
            style={{
              border: "1px solid #EAEAEA",
              padding: "30px 25px 30px 25px",
              borderRadius: "12px",
              boxSizing: "border-box",
            }}
            className={styles.statics}
          >
            <div className={styles.static}>
              <span
                onClick={() => setNumber(1)}
                style={{
                  color: number === 1 ? "#000000" : "gray",
                  cursor: "pointer",
                  borderBottom: number === 1 && "2px inset #000000",
                }}
              >
                Обзор
              </span>
              <span
                onClick={() => setNumber(2)}
                style={{
                  color: number === 2 ? "#000000" : "gray",
                  cursor: "pointer",
                  borderBottom: number === 2 && "2px inset #000000",
                }}
              >
                Статистика
              </span>
              <span
                onClick={() => setNumber(2)}
                style={{
                  color: number === 3 ? "#000000" : "gray",
                  cursor: "pointer",
                  borderBottom: number === 3 && "2px inset #000000",
                }}
              >
                Отклики(100+)
              </span>
            </div>

            <h1>Дизайн логотипа для кондитерской лавки</h1>
            <div className={styles.taskInfo}>
              <h2>Дата публикации: 21.12.2024</h2>
              <h3>203</h3>
            </div>
            <div className={styles.responses}>
              <div>
                <p>Всего откликов</p>
                <div className={styles.stats}>
                  <h4>85</h4>
                  <img src={stats} alt="" />
                </div>
              </div>
              <div className={styles.line1}></div>
              <div>
                <p>Просмотры</p>
                <div className={styles.stats}>
                  <h4>2,345</h4>
                  <img src={stats} alt="" />
                </div>
              </div>
              <div className={styles.line1}></div>
              <div>
                <p>Отклонено заявок</p>
                <div className={styles.stats}>
                  <h4>35</h4>
                  <img src={stats} alt="" />
                </div>
              </div>
            </div>
            <img src={group} alt="" />
          </div>
        )}
        <div className={styles.announcementAside}>
          <button className={styles.responseBtn}>Редактировать заказ</button>
          <div style={{display: "flex", alignItems: "center"}}>
          <button className={styles.saveBtn}>В черновики </button>
          <img style={{marginTop: "10px", marginLeft: "10px", cursor: "pointer"}} src={Close1} alt="" />
          </div>

          <div className={styles.aboutClient}>
            <h2>О заказчике</h2>
            <h3>
              Россия, г. Казань
              <br />
              21:00
            </h3>
            <ul className={styles.clientInfo}>
              {/* <li>Аккаунт верифицирован</li> */}
              {/* <li>Телефон подтвержден</li> */}
              <li>Почта подтверждена</li>
              <li>Способ оплаты добавлен</li>
            </ul>

            <h5>Ожидаемые навыки</h5>
            <ul className={styles.expectedSkills}>
              <li>PowerPoint</li>
              <li>Figma</li>
              <li>PowerPoint</li>
              <li>Figma</li>
              <li>Figma</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskSection;
