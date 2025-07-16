import styles from "./style.module.css";
import { Link } from "react-router-dom";

import jobifyImg from "../../../assets/icons/logoJobify.svg";
import doneImg from '../../../assets/images/bigDone.png';
import { GradientText } from "../../../components/GradientText";

export default function SuccesRegistration() {
    return (
        <div className={styles.successRegWrapper}>
            <Link to="/"><img src={jobifyImg} width={127} height={42} alt="Jobify logo"/></Link>
            <div className={styles.successReg}>
                <img 
                    src={doneImg}
                    width={99}
                    height={99}
                    alt="done" 
                />
                <h2>Отлично, ваш аккаунт был успешно создан!</h2>
                <Link className={styles.numberConfirm} to="#"><GradientText text="Подтвердить номер"/></Link>
                <Link className={styles.nextBtn} to="#">Продолжить</Link>
            </div>
        </div>
    );
}
