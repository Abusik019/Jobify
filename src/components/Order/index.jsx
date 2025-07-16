import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import menu from "../../assets/icons/order-menu.svg";
import edit from "../../assets/icons/edit.svg";
import add from "../../assets/icons/add.svg";
import deleteImg from "../../assets/icons/redDelete.svg";

export const Order = ({
    title,
    desc,
    theme,
    date,
    status,
    views,
    response,
}) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible((prev) => !prev);
    };

    return (
        <li className={styles.orderItem}>
            <div className={styles.orderTheme}>
                <h2>{theme}</h2>
                <h3>{date}</h3>
            </div>
            <h2>{title}</h2>
            <p>{desc}</p>
            <div className={styles.orderInfo}>
                <div className={styles.orderInfoLeft}>
                    <div>{views}</div>
                    <div>{response} откликов</div>
                    <div>
                        <Link to="/responses">Перейти к откликам</Link>
                    </div>
                </div>
                <div className={styles.orderInfoRight}>
                    {status === 'pending' && <div className={styles.pendingOrder}>Заказ выполняется</div>}
                    {status === 'done' && <div className={styles.doneOrder}>Заказ выполнен</div>}
                </div>
            </div>

            <button className={styles.orderMenu} onClick={toggleDropdown}>
                <img src={menu} width={18} height={4} alt="menu" />
            </button>
            <div
                className={`${styles.orderDropdown} ${
                    isDropdownVisible ? styles.visible : ""
                }`}
            >
                <Link to="#">
                    <img src={add} width={24} height={24} alt="edit" />
                    <h2>В архив</h2>
                </Link>
                <Link to="#">
                    <img src={edit} width={24} height={24} alt="add" />
                    <h2>Редактировать заказ</h2>
                </Link>
                <Link to="#">
                    <img src={deleteImg} width={24} height={24} alt="delete" />
                    <h2>Удалить заказ</h2>
                </Link>
            </div>
        </li>
    );
};
