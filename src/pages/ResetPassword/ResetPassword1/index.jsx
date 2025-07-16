import styles from "./style.module.css";
import { useState } from "react";
import handleValidateEmail from '../../../utils/emailValidate';

import jobifyLogo from '../../../assets/icons/logoJobify.svg';

export default function ResetPasswordOne({ setPage }) {
    const [isValid, setIsValid] = useState(false);
    const [email, setEmail] = useState("");
    const [isTouched, setIsTouched] = useState(false);
    const disabledBtn = !email || !isValid; 
    
    return (
        <div className={styles.resetPassword}>
            <img src={jobifyLogo} width={119} height={38} alt="logo Jobify" />
            <div className={styles.resetPasswordContent}>
                <h1>Восстановление пароля</h1>
                <p>Пожалуйста, укажите адрес электронной почты, связанный с вашей учетной записью</p>
                <div className={styles.inputWrapper}>
                    {isTouched && email && !isValid && <h2>Убедитесь в корректности почты</h2>}
                    <input 
                        type="text"
                        placeholder="Ваша почта"
                        onChange={(e) => {
                            handleValidateEmail(e, setIsValid, setEmail);
                        }}
                        onBlur={() => setIsTouched(true)}
                        onFocus={() => setIsTouched(true)}
                        style={{
                            borderColor: isTouched && !isValid && email ? "#F63939" : "#808080",
                            color: isTouched && !isValid && email ? "#F63939" : "#000",
                        }}
                    />
                </div>
                <button 
                    className={styles.nextBtn} 
                    disabled={disabledBtn} 
                    style={{
                        opacity: disabledBtn ? '0.2' : '1',
                        cursor: disabledBtn ? 'not-allowed' : 'pointer'
                    }} 
                    onClick={() => setPage(2)}
                >Продолжить</button>
            </div>
        </div>
    );
}