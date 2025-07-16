import styles from "./style.module.css";
import { useState } from "react";

import hidePasswordImg from "../../../assets/icons/hidePassword.svg";
import showPasswordImg from "../../../assets/icons/showPassword.svg";
import jobifyLogo from '../../../assets/icons/logoJobify.svg';

export default function ResetPasswordThree({ setPage }) {
    const [hidePassword, setHidePassword] = useState(true);
    const [hideResetPassword, setHideResetPassword] = useState(true);
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [isResetValid, setResetIsValid] = useState(false);
    
    const disabledBtn = !password || !isValid || !isResetValid; 

    function handleValidatePassword(e) {
        setPassword(e.target.value);

        if(e.target.value.length >= 8){
            setIsValid(true)
        } else{
            setIsValid(false)
        }
    }

    function handleValidateResetPassword(e) {
        setRepeatPassword(e.target.value);

        if(e.target.value.length >= 8 && e.target.value === password){
            setResetIsValid(true)
        } else{
            setResetIsValid(false)
        }
    }

    return (
        <div className={styles.resetPassword}>
            <img src={jobifyLogo} width={119} height={38} alt="logo Jobify" />
            <div className={styles.resetPasswordContent}>
                <h1>Сброс пароля</h1>
                <p>Вы перешли по ссылке для сброса пароля, введите новый пароль</p>
                <div className={styles.inputsContainer}>
                    <div className={styles.passwordWrapper}>
                        <label htmlFor="password">Новый пароль</label>
                        <input
                            value={password}
                            type={hidePassword ? "password" : "text"}
                            id="password"
                            onInput={handleValidatePassword}
                            placeholder="Ваш пароль"
                            required
                        />
                        <button
                            className={styles.passwordVisible}
                            onClick={(e) => {
                                e.preventDefault();
                                setHidePassword((prevState) => !prevState);
                            }}
                        >
                            <img
                                src={hidePassword ? showPasswordImg : hidePasswordImg}
                                width={24}
                                height={24}
                                alt="visibility"
                            />
                        </button>
                    </div>
                    <div className={styles.passwordWrapper}>
                        <label htmlFor="password">Повторите пароль</label>
                        <input
                            value={repeatPassword}
                            type={hideResetPassword ? "password" : "text"}
                            id="password"
                            onInput={handleValidateResetPassword}
                            placeholder="Ваш пароль"
                            required
                        />
                        <button
                            className={styles.passwordVisible}
                            onClick={(e) => {
                                e.preventDefault();
                                setHideResetPassword((prevState) => !prevState);
                            }}
                        >
                            <img
                                src={hideResetPassword ? showPasswordImg : hidePasswordImg}
                                width={24}
                                height={24}
                                alt="visibility"
                            />
                        </button>
                    </div>
                </div>
                <button 
                    className={styles.nextBtn} 
                    disabled={disabledBtn} 
                    style={{
                        opacity: disabledBtn ? '0.2' : '1',
                        cursor: disabledBtn ? 'not-allowed' : 'pointer'
                    }} 
                    onClick={() => setPage(4)}
                >Сохранить изменения</button>
            </div>
        </div>
    );
}
