import styles from "./style.module.css";
import CreateTaskLoad from "../../../components/CreateTaskLoad";
import { GradientText } from "../../../components/GradientText";

export default function CreateConsultationPageTwo({ setPage, setConsultation, consultation }) {
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setConsultation((prev) => ({
            ...prev,
            cover: file
          }));
    };

    return (
        <div className={styles.createConsultationWrapper}>
            <div className={styles.createConsultation}>
                <h2>Укажите <GradientText text="название"/> консультации<span style={{color: '#F63939'}}>*</span></h2>
                <p>
                    Формулируйте запрос чётко и конкретно, указывая суть проблемы или темы консультации. Это поможет специалисту сразу понять вашу потребность и подготовиться к разговору.
                    <br />
                    <br />
                    Например: "Оптимизация рекламы в соцсетях" или "Настройка нейросети для анализа данных"
                </p>
                <input type="text" placeholder="Укажите название консультации" onInput={(e) => setConsultation((prev) => ({
                    ...prev,
                    title: e.target.value
                }))}/>
                <label>
                    Добавить обложку
                    <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                    />
                </label>
            </div>
            <CreateTaskLoad prev={0} next={2} setPage={setPage} maxPage={4} disabled={!consultation.title}/>
        </div>
    );
}
