import styles from "./style.module.css";
import { useState } from "react";

import avatarImg from '../../../assets/images/freelancer.png';
import sandTimerImg from "../../../assets/icons/sandTimer.svg";
import pigImg from '../../../assets/icons/pig.svg';
import fileImg from '../../../assets/icons/file2.svg';
import arrowImg from '../../../assets/icons/smallArrow.svg';
import Modal from '../../../components/Modal/index';

export default function CreateTaskPageSeven({ setPage, task }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isHideDesc, setIsHideDesc] = useState(false);

    return (
        <div className={styles.createTaskWrapper}>
            <div className={styles.createTask}>
                <div className={styles.createTaskContent}>
                    <div className={styles.titleContainer}>
                        <h1>{task.title}</h1>
                        <h2>Дата публикации: {task.details.deadlines.date.replaceAll('-', '.')}</h2>
                        <div>
                            <img src={avatarImg} width={58} height={58} alt="avatar" />
                            <div className={styles.userInfo}>
                                <h3>Заказчик</h3>
                                <h4>Жанна Кондратьева <span>5.0</span></h4>
                                <h5>Регион</h5>
                            </div>
                        </div>
                    </div>
                    <div className={styles.descContainer}>
                        <div>
                            <h2>Описание заказа</h2>
                            <button 
                                onClick={() => setIsHideDesc((prev) => !prev)}
                                style={{transform: isHideDesc ? 'rotate(0deg)' : 'rotate(180deg)'}}
                            >
                                <img src={arrowImg} width={20} height={20} alt="arrrow" />
                            </button>
                        </div>
                        {!isHideDesc &&
                        <p>
                            {task.desc}
                        </p>
                        }
                    </div>
                    {task.notes && 
                        <div className={styles.notesContainer}>
                            <h2>Примечания</h2>
                            <p>{task.notes}</p>
                        </div>
                    }
                    <div className={styles.filesContainer}>
                        <h2>Вложения</h2>
                        <ul>
                            {task.files.map((file, index) => (
                                <li key={index}>{file.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.categoryContainer}>
                        <h2>Категория заказа</h2>
                        {task.details.mainCategory.rusName && <div>{task.details.mainCategory.rusName}</div>}
                    </div>
                    <div className={styles.detailsContainer}>
                        <h2>Детали заказа</h2>
                        <ul>
                            <li>
                                <div>
                                    <h2>Фиксированная оплата</h2>
                                    <h3>Заказчик платит фиксированную сумму</h3>
                                </div>
                                <img
                                    src={pigImg}
                                    width={20}
                                    height={20}
                                    alt="circle"
                                />
                            </li>
                            <li>
                                <div>
                                    <h2>Сроки</h2>
                                    <h3>Не более 2-х месяцев</h3>
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
                                    <h2>Цена в качестве</h2>
                                    <h3>Согласен на большую плату опытному специалисту</h3>
                                </div>
                                <img
                                    src={fileImg}
                                    width={20}
                                    height={20}
                                    alt="file"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.createTaskAside}>
                    <div className={styles.asideActions}>
                        <button>В черновики</button>
                        <button></button>
                    </div>
                    <div className={styles.aboutClient}>
                        <h2>О заказчике</h2>
                        <h3>
                            Россия, г. Казань
                            <br />
                            21:00
                        </h3>
                        <ul className={styles.clientInfo}>
                            <li>Почта подтверждена</li>
                            <li>Способ оплаты добавлен</li>
                        </ul>
                        <h5>Ожидаемые навыки</h5>
                        <ul className={styles.expectedSkills}>
                            {task.details.subcategories.map(item => (
                                <li key={item.id}>{item.rusName}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.buttonsContainer}>
                <button onClick={() => setPage(5)}>Вернуться</button>
                <h2>6 из 6</h2>
                <button onClick={() => setIsModalOpen(true)}>Продолжить</button>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className={styles.modalContent}>
                    <h2>Что произойдет после публикации заказа?</h2>
                    <p>Вы начнёте получать отклики от фрилансеров с предложением исполнить ваш заказ</p>
                    <div>
                        <button onClick={() => setIsModalOpen(false)}>Отмена</button>
                        <button onClick={() => setPage(7)}>Опубликовать</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
