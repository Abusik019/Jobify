import styles from "./style.module.css";
import jobifyLogo from "../../../assets/icons/logoJobify.svg";
import image from '../../../assets/images/Rectangle 55.png';
import { Link } from 'react-router-dom';

export default function NumberConfirmThree() {
    return (
        <div className={styles.numberConfirm}>
            <img src={jobifyLogo} width={119} height={38} alt="logo Jobify" />
            <div className={styles.numberConfirmContent}>
                <img 
                    src={image}
                    width={242}
                    height={123}
                    alt="number confirm"
                />
                <h2>Номер телефона подтвержден!</h2>
                <p>Вы успешно подтвердили свой номер телефона</p>
            </div>
            <Link to='#'>Продолжить</Link>
        </div>
    );
}
