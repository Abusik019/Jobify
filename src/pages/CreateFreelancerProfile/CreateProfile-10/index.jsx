import styles from "./style.module.css";
import { Link } from 'react-router-dom';

import jobifyImg from "../../../assets/icons/logoJobify.svg";
import doneImg from '../../../assets/images/bigDone.png';

export default function CreateProfilePageTen() {
    return (
        <div className={styles.createProfile}>
            <img src={jobifyImg} width={102} height={42} alt="Jobify logo" />
            <div className={styles.createProfileContainer}>
                <img 
                    src={doneImg}
                    width={99}
                    height={99}
                    alt="done" 
                />
                <h2>Отлично, профиль был успешно заполнен</h2>
                <h3>Изменить данные можно в настройках аккаунта</h3>
                <Link to="#">Продолжить</Link>
            </div>
        </div>
    );
}
