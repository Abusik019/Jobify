import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GradientText } from "../../components/GradientText";

import questionImg from "../../assets/icons/question.svg";
import whiteArrow from "../../assets/icons/w-longArrow.svg";
import blackArrow from "../../assets/icons/b-longArrow.svg";
import close from "../../assets/icons/close.svg";
import menu from '../../assets/icons/order-menu.svg';
import edit from '../../assets/icons/edit.svg';
import add from '../../assets/icons/add.svg';
import deleteImg from '../../assets/icons/redDelete.svg';
import mockImg from '../../assets/images/mockGuide.png';

export default function MyAnnouncements() {
    const [openDropdownId, setOpenDropdownId] = useState(null);
    const [modal, setModal] = useState(false);

    const toggleDropdown = (id) => {
        setOpenDropdownId((prevId) => (prevId === id ? null : id));
    };

    return (
        <div className={styles.myOrders}>
            <section className={styles.myOrdersContent}>
                <div className={styles.myOrdersHeadContent}>
                    <div className={styles.myOrdersTitle}>
                        <h2>Мои объявления</h2>
                        <img
                            src={questionImg}
                            width={24}
                            height={24}
                            alt="question"
                        />
                    </div>
                    <Link to="/create-task">
                        <span>+</span> Добавить объявление
                    </Link>
                </div>
                <ul className={styles.orders}>
                    {[1, 2, 3].map((id) => (
                        <li key={id}>
                            <div className={styles.topOrderBlock}>
                                <div>
                                    <span>Категория</span>
                                    <span>2 декабря, 00:11</span>
                                </div>
                                <button
                                    className={styles.orderMenu}
                                    onClick={() => toggleDropdown(id)}
                                >
                                    <img src={menu} width={18} height={4} alt="menu" />
                                </button>
                            </div>
                            <h2>Создаю сайты</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Dui tortor morbi facilisis phasellus lacus. Diam interdum egestas arcu iaculis amet aenean ut molestie. Lacus laoreet diam vel massa ut. Non gravida mauris tincidunt urna quis mi neque sapien a.</p>
                            <div className={styles.orderStats}>
                                <div>263</div>
                                <div>27 запросов</div>
                            </div>
                            <div
                                className={`${styles.orderDropdown} ${
                                    openDropdownId === id ? styles.visible : ""
                                }`}
                            >
                                <Link to="#">
                                    <img src={add} width={24} height={24} alt="add" />
                                    <h2>В архив</h2>
                                </Link>
                                <Link to="#">
                                    <img src={edit} width={24} height={24} alt="edit" />
                                    <h2>Редактировать</h2>
                                </Link>
                                <button onClick={() => setModal(true)}>
                                    <img src={deleteImg} width={24} height={24} alt="delete" />
                                    <h2>Удалить объявление</h2>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                <button className={styles.showAll}>Показать все</button>
            </section>
            <section className={styles.myConsultationContent}>
                <div className={styles.myConsultationHeadContent}>
                    <div className={styles.myConsultationTitle}>
                        <h2>Мои консультации</h2>
                        <img
                            src={questionImg}
                            width={24}
                            height={24}
                            alt="question"
                        />
                    </div>
                    <Link to="/create-consultation">
                        <span>+</span> Добавить консультацию
                    </Link>
                </div>
                <ul className={styles.consultations}>
                    {[1, 2, 3].map((id) => (
                        <li key={id}>
                            <div className={styles.consultationContent}>
                                <img src={mockImg} width={150} height={150} alt="image" />
                                <div>
                                    <h2>Название консультации</h2>
                                    <h3>Бесплатная 15-ти минутная консультация</h3>
                                    <ul>
                                        <li>Тема обсуждения</li>
                                        <li>Тема обсуждения</li>
                                    </ul>
                                </div>
                            </div>
                            <button
                                className={styles.orderMenu}
                                onClick={() => toggleDropdown(id)}
                            >
                                <img src={menu} width={18} height={4} alt="menu" />
                            </button>
                            <div
                                className={`${styles.orderDropdown} ${
                                    openDropdownId === id ? styles.visible : ""
                                }`}
                            >
                                <Link to="#">
                                    <img src={add} width={24} height={24} alt="add" />
                                    <h2>В архив</h2>
                                </Link>
                                <Link to="#">
                                    <img src={edit} width={24} height={24} alt="edit" />
                                    <h2>Редактировать</h2>
                                </Link>
                                <button onClick={() => setModal(true)}>
                                    <img src={deleteImg} width={24} height={24} alt="delete" />
                                    <h2>Удалить</h2>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                <button className={styles.showAll}>Показать все</button>
            </section>
            <section className={styles.guidesContainer}>
                <ul className={styles.guides}>
                    <li>
                        <div className={styles.guidePinnedTitle}>
                            <h2>Название Гайда</h2>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. At sodales
                            sed adipiscing tempus est ac. Tempor elit
                            blandittempus.
                        </p>
                        <button className={styles.guideArrow}>
                            <img
                                src={whiteArrow}
                                width={134}
                                height={15}
                                alt="arrow"
                            />
                        </button>
                    </li>
                    <li>
                        <div className={styles.guideTitle}>
                            <h2>Название Гайда</h2>
                            <button>
                                <img
                                    src={close}
                                    width={29}
                                    height={29}
                                    alt="close button"
                                />
                            </button>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. At
                            sodales sed adipiscing tempus est ac. Tempor
                            elit blandittempus.
                        </p>
                        <button className={styles.guideArrow}>
                            <img
                                src={blackArrow}
                                width={134}
                                height={15}
                                alt="arrow"
                            />
                        </button>
                    </li>
                    <li>
                        <div className={styles.guideTitle}>
                            <h2>Название Гайда</h2>
                            <button>
                                <img
                                    src={close}
                                    width={29}
                                    height={29}
                                    alt="close button"
                                />
                            </button>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                        <span>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur</span>
                        <button className={styles.guideGoOne}>
                            <GradientText text="Перейти" />
                        </button>
                    </li>
                    <li>
                        <div className={styles.guideTitle}>
                            <h2>Название Гайда</h2>
                            <button>
                                <img
                                    src={close}
                                    width={29}
                                    height={29}
                                    alt="close button"
                                />
                            </button>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                        <span>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur</span>
                        <button className={styles.guideGoTwo}>Перейти</button>
                    </li>
                </ul>
            </section>
            {modal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <h2>Удалить объявление?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Suspendisse purus id urna ut sit risus risus orci mauris.</p>
                        <div>
                            <button onClick={() => setModal(false)}>Отмена</button>
                            <button>Удалить</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
