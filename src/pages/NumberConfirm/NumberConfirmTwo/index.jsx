import styles from "./style.module.css";
import jobifyLogo from "../../../assets/icons/logoJobify.svg";
import { useEffect, useState } from "react";

export default function NumberConfirmTwo({ setPage }) {
    const [code, setCode] = useState(["", "", "", ""]);
    const [timer, setTimer] = useState(60);
    const [isValidCode, setIsValidCode] = useState(true);

    function handleInputChange(value, index) {
        if (/^\d?$/.test(value)) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            if (value && index < 3) {
                document.getElementById(`code-input-${index + 1}`).focus();
            }
        }
    }

    const isValid = code.every((digit) => digit !== "");

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [timer]);

    function handleKeyDown(event) {
        if (event.key === "Enter" && isValid) {
            event.preventDefault(); 
            setPage(3);
        }
    }

    return (
        <div className={styles.numberConfirm}>
            <img src={jobifyLogo} width={119} height={38} alt="logo Jobify" />
            <div className={styles.numberConfirmContent}>
                <h2>SMS-код отправлен</h2>
                <p>Введите 4 цифры, которые были отправлены на указанный номер +7 (999) 999 99-99</p>
                <form className={styles.form} onKeyDown={handleKeyDown}>
                    {code.map((digit, index) => (
                        <input
                            style={{
                                borderColor: isValidCode ? "#000" : "#F63939",
                                color: isValidCode ? "#000" : "#F63939",
                            }}
                            key={index}
                            id={`code-input-${index}`}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleInputChange(e.target.value, index)}
                            onKeyDown={(e) => {
                                if (e.key === "Backspace" && !code[index] && index > 0) {
                                    document.getElementById(`code-input-${index - 1}`).focus();
                                }
                            }}
                        />
                    ))}
                </form>
                {!isValidCode && <h3>Убедитесь в правильности кода</h3>}
                <button className={styles.sendAgain} disabled={timer > 0}>
                    {timer > 0 ? `Отправить повторно (${timer})` : "Отправить повторно"}
                </button>
            </div>
            <div className={styles.numberConfirmBtns}>
                <button onClick={() => setPage("previous")}>Вернуться</button>
                <button
                    disabled={!isValid}
                    style={{
                        opacity: !isValid ? "0.2" : "1",
                        cursor: !isValid ? "default" : "pointer",
                    }}
                    onClick={() => setPage(3)}
                >
                    Подтвердить
                </button>
            </div>
        </div>
    );
}
