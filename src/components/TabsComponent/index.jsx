import { useState } from "react";
import styles from "./style.module.css";
import avatarImg from "../../assets/images/freelancer.png";
import redCircleImg from "../../assets/icons/redCircle.svg";

export const TabsComponent = () => {
    const [isActiveTab, setIsActiveTab] = useState("all");

    return (
        <div className={styles.tabs}>
            <ul className={styles.tabsList}>
                <li
                    className={isActiveTab === "all" ? styles.visible : ""}
                    onClick={() => setIsActiveTab("all")}
                >
                    <h2>Все</h2>
                    <h3>3</h3>
                </li>
                <li
                    className={isActiveTab === "offers" ? styles.visible : ""}
                    onClick={() => setIsActiveTab("offers")}
                >
                    <h2>Оферы</h2>
                    <h3>22</h3>
                </li>
                <li
                    className={
                        isActiveTab === "something" ? styles.visible : ""
                    }
                    onClick={() => setIsActiveTab("something")}
                >
                    <h2>Something</h2>
                    <h3>2</h3>
                </li>
            </ul>
            <ul className={styles.notificationsList}>
                <li>
                    <img
                        src={avatarImg}
                        width={48}
                        height={48}
                        alt="avatar img"
                    />
                    <div className={styles.notificationInfo}>
                        <p><span>Пользователь</span> отправил Вам предложение о работе</p>
                        <h2>40 минут назад</h2>
                    </div>
                    <img
                        src={redCircleImg}
                        width={8}
                        height={8}
                        alt="circle"
                        className={styles.redCircle}
                    />
                </li>
                <li>
                    <img
                        src={avatarImg}
                        width={48}
                        height={48}
                        alt="avatar img"
                    />
                    <div className={styles.notificationInfo}>
                        <p><span>Пользователь</span> отправил Вам предложение о работе</p>
                        <h2>40 минут назад</h2>
                    </div>
                    <img
                        src={redCircleImg}
                        width={8}
                        height={8}
                        alt="circle"
                        className={styles.redCircle}
                    />
                </li>
                <li>
                    <img
                        src={avatarImg}
                        width={48}
                        height={48}
                        alt="avatar img"
                    />
                    <div className={styles.notificationInfo}>
                        <p><span>Пользователь</span> отправил Вам предложение о работе</p>
                        <h2>40 минут назад</h2>
                    </div>
                    <img
                        src={redCircleImg}
                        width={8}
                        height={8}
                        alt="circle"
                        className={styles.redCircle}
                    />
                </li>
                <li>
                    <img
                        src={avatarImg}
                        width={48}
                        height={48}
                        alt="avatar img"
                    />
                    <div className={styles.notificationInfo}>
                        <p><span>Пользователь</span> отправил Вам предложение о работе</p>
                        <h2>40 минут назад</h2>
                    </div>
                    <img
                        src={redCircleImg}
                        width={8}
                        height={8}
                        alt="circle"
                        className={styles.redCircle}
                    />
                </li>
            </ul>
        </div>
    );
};
