import styles from "./style.module.css";

export default function CreateTaskLoad({ prev, next, setPage, maxPage, disabled = false, nextText = "Продолжить", onNext = () => {} }) {
    const progress = (prev + 1) * (100 / maxPage);

    return (
        <div className={styles.createTaskFooter}>
            <div className={styles.progressLine}>
                <div style={{width: `${progress}%`}}></div>
            </div>
            <div className={styles.buttonsContainer}>
                <button onClick={() => setPage(prev === 0 ? 1 : prev)}>Вернуться</button>
                <h2>{prev + 1} из {maxPage}</h2>
                <button style={{opacity: disabled ? "0.2" : "1"}} onClick={() => {
                    onNext();
                    setPage(next);
                }} disabled={disabled}>{nextText}</button>
            </div>
        </div>
    );
}
