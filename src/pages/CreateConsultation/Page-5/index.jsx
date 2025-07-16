import styles from "./style.module.css";
import trashImg from '../../../assets/icons/trash.svg';

export default function CreateConsultationPageFive({ setPage, consultation }) {
    return (
        <div className={styles.createConsultationWrapper}>
            <div className={styles.createConsultation}>
                <div className={styles.consultationTitleBlock}>
                    <h1>Превью вашей консультации</h1>
                    <div>
                        <button>В черновики</button>
                        <button><img src={trashImg} width={20} height={20} alt="trash" /></button>
                    </div>
                </div>
                <div className={styles.consultationContent}>
                    <div className={styles.consultationTitle}>
                        <h2>Название</h2>
                        <p>{consultation.title}</p>
                    </div>
                    <div className={styles.consultationDesc}>
                        <h2>Описание консультации</h2>
                        <p>{consultation.desc}</p>
                    </div>
                    <div className={styles.consultationThemes}>
                        <h2>Темы обсуждения</h2>
                        <ul>
                            {consultation.themes && consultation.themes.split(";").map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.consultationCover}>
                        <h2>Обложка консультации</h2>
                        {consultation.cover && <div>{consultation.cover.name}</div>}
                    </div>
                </div>
            </div>
            <div className={styles.buttonsContainer}>
                <button onClick={() => setPage(3)}>Вернуться</button>
                <h2>4 из 4</h2>
                <button onClick={() => setPage(5)}>Опубликовать</button>
            </div>
        </div>
    );
}
