import styles from "./style.module.css";
import jobifyLogo from "../../../assets/icons/logoJobify.svg";
import { useState } from "react";

export default function NumberConfirmOne({ setPage }) {
    const [isValid, setIsValid] = useState(false);
    const [hasStartedTyping, setHasStartedTyping] = useState(false);

    function validatePhoneNumber(input) {
        setHasStartedTyping(true);
        const regex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        setIsValid(regex.test(input));
    }

    function handleKeyDown(event) {
        if (event.key === "Enter" && isValid) {
            setPage(2);
        }
    }

    return (
        <div className={styles.numberConfirm}>
            <img src={jobifyLogo} width={119} height={38} alt="logo Jobify" />
            <div className={styles.numberConfirmContent}>
                <h2>Подтвердите номер телефона</h2>
                <p>
                    Пожалуйста, укажите Ваш номер телефона, после чего
                    подтвердите его через SMS-код:
                </p>
                <input
                    style={{
                        borderColor: !isValid && hasStartedTyping ? "#F63939" : "#808080",
                        color: !isValid && hasStartedTyping ? "#F63939" : "#000",
                    }}
                    type="text"
                    onChange={(e) => validatePhoneNumber(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="+7 (999) 999 99-99"
                />
                <div style={{ display: !isValid && hasStartedTyping ? "block" : "none" }}>
                    Убедитесь в правильности введенного номера
                </div>
            </div>
            <div className={styles.numberConfirmBtns}>
                <button>Вернуться</button>
                <button
                    disabled={!isValid}
                    onClick={() => setPage(2)}
                    style={{ opacity: !isValid ? "0.2" : "1", cursor: !isValid ? "default" : "pointer" }}
                >
                    Подтвердить
                </button>
            </div>
        </div>
    );
}
