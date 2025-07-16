import styles from "./style.module.css";
import CreateTaskLoad from "../../../components/CreateTaskLoad";
import { GradientText } from "../../../components/GradientText";

export default function CreateConsultationPageThree({ setPage, setConsultation, consultation }) {
    return (
        <div className={styles.createConsultationWrapper}>
            <div className={styles.createConsultation}>
                <h2>Укажите <GradientText text="описание"/> консультации<span style={{color: '#F63939'}}>*</span></h2>
                <p>
                    Опишите суть вопроса подробно, указав контекст, ключевые проблемы и ожидаемый результат. Чем точнее описание, тем более полезной и продуктивной будет консультация.
                    <br />
                    <br />
                    Например: "Нужна помощь в настройке таргетированной рекламы: какие стратегии использовать для повышения конверсии?"
                </p>
                <textarea onInput={(e) => setConsultation((prev) => ({
                    ...prev,
                    desc: e.target.value
                }))} placeholder="Lorem ipsum dolor sit amet consectetur. Cursus netus volutpat aliquam risus purus. Sollicitudin mattis et nibh massa senectus."></textarea>
            </div>
            <CreateTaskLoad prev={1} next={3} setPage={setPage} maxPage={4} disabled={!consultation.desc}/>
        </div>
    );
}
