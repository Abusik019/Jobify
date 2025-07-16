import styles from "./style.module.css";

export const Textarea = ({ value = "", maxLength = 1000, onInput }) => {    
    return (
        <>
            <textarea
                maxLength={maxLength}
                value={value}
                onInput={onInput}
                className={styles.textarea}
            />
            <span className={styles.description}>{value.length}/{maxLength}</span>
        </>
    );
};
