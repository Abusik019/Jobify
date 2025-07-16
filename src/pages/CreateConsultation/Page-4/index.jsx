import styles from "./style.module.css";
import CreateTaskLoad from "../../../components/CreateTaskLoad";
import { GradientText } from "../../../components/GradientText";

export default function CreateConsultationPageFour({ setPage, setConsultation, consultation }) {
    return (
        <div className={styles.createConsultationWrapper}>
            <div className={styles.createConsultation}>
                <h2>Какие <GradientText text="темы"/> будут затрагиваться?<span style={{color: '#F63939'}}>*</span></h2>
                <p>Начните вводить темы через точку с запятой, и они будут отображаться ниже</p>
                <input type="text" placeholder="Например: сайты; дизайн; аналитика;" onInput={(e) => setConsultation((prev) => ({
                    ...prev,
                    themes: e.target.value
                }))}/>
                <ul>
                    {consultation.themes && consultation.themes.split(";").map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <CreateTaskLoad prev={2} next={4} setPage={setPage} maxPage={4} disabled={!consultation.themes}/>
        </div>
    );
}
