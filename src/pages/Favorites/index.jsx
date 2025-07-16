import styles from "./style.module.css";
import toFavoriteImg from "../../assets/icons/gradientToFavorite.svg";
import energyImg from "../../assets/icons/energy.svg";
import avatarImg from "../../assets/images/freelancer.png";
import { useState } from "react";

export default function Favorites() {
    const [menuItem, setMenuItem] = useState("all");

    console.log(menuItem);
    return (
        <div className={styles.favorites}>
            <div className={styles.favoritesContainer}>
                <input type="text" placeholder="Поиск" />
                {(menuItem === 'task' || menuItem === 'all') && (
                    <div className={styles.saveTask}>
                        <h2 className={styles.blockTitle}>Сохраненные задания</h2>
                        <ul className={styles.saveTaskList}>
                            <li>
                                <div className={styles.taskContent}>
                                    <div>
                                        <h3>Жанна Кондратьева</h3>
                                        <span>5.0</span>
                                    </div>
                                    <h4>
                                        Создать сайт для стоматологический клиники
                                    </h4>
                                </div>
                                <button>
                                    <img
                                        src={toFavoriteImg}
                                        width={30}
                                        height={24}
                                        alt="add to favorite"
                                    />
                                </button>
                            </li>
                            <li>
                                <div className={styles.taskContent}>
                                    <div>
                                        <h3>Жанна Кондратьева</h3>
                                        <span>5.0</span>
                                    </div>
                                    <h4>
                                        Создать сайт для стоматологический клиники
                                    </h4>
                                </div>
                                <button>
                                    <img
                                        src={toFavoriteImg}
                                        width={30}
                                        height={24}
                                        alt="add to favorite"
                                    />
                                </button>
                            </li>
                            <li>
                                <div className={styles.taskContent}>
                                    <div>
                                        <h3>Жанна Кондратьева</h3>
                                        <span>5.0</span>
                                    </div>
                                    <h4>
                                        Создать сайт для стоматологический клиники
                                    </h4>
                                </div>
                                <button>
                                    <img
                                        src={toFavoriteImg}
                                        width={30}
                                        height={24}
                                        alt="add to favorite"
                                    />
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
                {(menuItem === 'freelancer' || menuItem === 'all') && (
                    <div className={styles.saveFreelancers}>
                        <h2 className={styles.blockTitle}>
                            Сохраненные фрилансеры
                        </h2>
                        <ul className={styles.saveFreelancersList}>
                            <li>
                                <div className={styles.freelancerContent}>
                                    <div className={styles.freelancerInfo}>
                                        <img
                                            src={avatarImg}
                                            width={58}
                                            height={58}
                                            alt="avatar"
                                        />
                                        <div className={styles.freelancerName}>
                                            <div>
                                                <h3>Жанна Кондратьева</h3>
                                                <span>5.0</span>
                                                <img
                                                    src={energyImg}
                                                    width={16}
                                                    height={16}
                                                    alt="energy"
                                                />
                                            </div>
                                            <h4>
                                                Маркетолог-эксперт со стажем 14 лет
                                                практических работ
                                            </h4>
                                            <h5>Регион</h5>
                                        </div>
                                    </div>
                                    <div className={styles.freelancerStats}>
                                        <span>~1200₽ за заказ</span>
                                        <span>10 заказов в вашей сфере</span>
                                        <span>97% успешных заказов</span>
                                    </div>
                                </div>
                                <button>
                                    <img
                                        src={toFavoriteImg}
                                        width={30}
                                        height={24}
                                        alt="add to favorite"
                                    />
                                </button>
                            </li>
                            <li>
                                <div className={styles.freelancerContent}>
                                    <div className={styles.freelancerInfo}>
                                        <img
                                            src={avatarImg}
                                            width={58}
                                            height={58}
                                            alt="avatar"
                                        />
                                        <div className={styles.freelancerName}>
                                            <div>
                                                <h3>Жанна Кондратьева</h3>
                                                <span>5.0</span>
                                                <img
                                                    src={energyImg}
                                                    width={16}
                                                    height={16}
                                                    alt="energy"
                                                />
                                            </div>
                                            <h4>
                                                Маркетолог-эксперт со стажем 14 лет
                                                практических работ
                                            </h4>
                                            <h5>Регион</h5>
                                        </div>
                                    </div>
                                    <div className={styles.freelancerStats}>
                                        <span>~1200₽ за заказ</span>
                                        <span>10 заказов в вашей сфере</span>
                                        <span>97% успешных заказов</span>
                                    </div>
                                </div>
                                <button>
                                    <img
                                        src={toFavoriteImg}
                                        width={30}
                                        height={24}
                                        alt="add to favorite"
                                    />
                                </button>
                            </li>
                            <li>
                                <div className={styles.freelancerContent}>
                                    <div className={styles.freelancerInfo}>
                                        <img
                                            src={avatarImg}
                                            width={58}
                                            height={58}
                                            alt="avatar"
                                        />
                                        <div className={styles.freelancerName}>
                                            <div>
                                                <h3>Жанна Кондратьева</h3>
                                                <span>5.0</span>
                                                <img
                                                    src={energyImg}
                                                    width={16}
                                                    height={16}
                                                    alt="energy"
                                                />
                                            </div>
                                            <h4>
                                                Маркетолог-эксперт со стажем 14 лет
                                                практических работ
                                            </h4>
                                            <h5>Регион</h5>
                                        </div>
                                    </div>
                                    <div className={styles.freelancerStats}>
                                        <span>~1200₽ за заказ</span>
                                        <span>10 заказов в вашей сфере</span>
                                        <span>97% успешных заказов</span>
                                    </div>
                                </div>
                                <button>
                                    <img
                                        src={toFavoriteImg}
                                        width={30}
                                        height={24}
                                        alt="add to favorite"
                                    />
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
                {(menuItem === 'announcement' || menuItem === 'all') && (
                    <div className={styles.saveAnnouncements}>
                        <h2 className={styles.blockTitle}>
                            Сохраненные коммерческие объявления
                        </h2>
                        <ul className={styles.saveAnnouncementsList}>
                            <li>
                                <div className={styles.announcementContent}>
                                    <img
                                        src={avatarImg}
                                        width={80}
                                        height={80}
                                        alt="avatar"
                                    />
                                    <div>
                                        <h3>
                                            Контекстная реклама любых видов под ключ
                                        </h3>
                                        <h4>от 1000₽</h4>
                                        <h5>Срок выполнения: от 48 часов</h5>
                                    </div>
                                </div>
                                <button>
                                    <img
                                        src={toFavoriteImg}
                                        width={30}
                                        height={24}
                                        alt="add to favorite"
                                    />
                                </button>
                            </li>
                            <li>
                                <div className={styles.announcementContent}>
                                    <img
                                        src={avatarImg}
                                        width={80}
                                        height={80}
                                        alt="avatar"
                                    />
                                    <div>
                                        <h3>
                                            Контекстная реклама любых видов под ключ
                                        </h3>
                                        <h4>от 1000₽</h4>
                                        <h5>Срок выполнения: от 48 часов</h5>
                                    </div>
                                </div>
                                <button>
                                    <img
                                        src={toFavoriteImg}
                                        width={30}
                                        height={24}
                                        alt="add to favorite"
                                    />
                                </button>
                            </li>
                            <li>
                                <div className={styles.announcementContent}>
                                    <img
                                        src={avatarImg}
                                        width={80}
                                        height={80}
                                        alt="avatar"
                                    />
                                    <div>
                                        <h3>
                                            Контекстная реклама любых видов под ключ
                                        </h3>
                                        <h4>от 1000₽</h4>
                                        <h5>Срок выполнения: от 48 часов</h5>
                                    </div>
                                </div>
                                <button>
                                    <img
                                        src={toFavoriteImg}
                                        width={30}
                                        height={24}
                                        alt="add to favorite"
                                    />
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <div className={styles.asideContent}>
                <h2>Избранное</h2>
                <ul>
                    <li
                        onClick={() => setMenuItem("all")}
                        style={{
                            backgroundColor:
                                menuItem === "all"
                                    ? "#EAEAEA80"
                                    : "transparent",
                            opacity: menuItem === "all" ? "1" : "0.6",
                        }}
                    >
                        Все категории
                    </li>
                    <li
                        onClick={() => setMenuItem("task")}
                        style={{
                            backgroundColor:
                                menuItem === "task"
                                    ? "#EAEAEA80"
                                    : "transparent",
                            opacity: menuItem === "task" ? "1" : "0.6",
                        }}
                    >
                        Задания
                    </li>
                    <li
                        onClick={() => setMenuItem("freelancer")}
                        style={{
                            backgroundColor:
                                menuItem === "freelancer"
                                    ? "#EAEAEA80"
                                    : "transparent",
                            opacity: menuItem === "freelancer" ? "1" : "0.6",
                        }}
                    >
                        Фрилансеры
                    </li>
                    <li
                        onClick={() => setMenuItem("announcement")}
                        style={{
                            backgroundColor:
                                menuItem === "announcement"
                                    ? "#EAEAEA80"
                                    : "transparent",
                            opacity: menuItem === "announcement" ? "1" : "0.6",
                        }}
                    >
                        Коммерческие объявления
                    </li>
                </ul>
            </div>
        </div>
    );
}
