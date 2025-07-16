import styles from './styles.module.css';
import { useState } from 'react';
import { GradientText } from '../../../components/GradientText';

import questionImg from '../../../assets/icons/question.svg';
import unionImg from '../../../assets/images/union.svg';
import bgItemImg from '../../../assets/images/bgPurpleCircle.svg';
import bgItem1Img from '../../../assets/images/bgPurpleOval.svg';
import bgItem2Img from '../../../assets/images/bgPurpleOval2.svg';

export default function CreateConsultationPageOne({ setPage }) {
    const [questionVisible, setQuestionVisible] = useState(false);

    const toggleQuestionVisible = () => {
        setQuestionVisible((prev) => !prev);
    };

  return (
    <div className={styles.createTask}>
        <div className={styles.createTaskTitleBlock}>
            <h2>Создайте и разместите <GradientText text="новую консультацию!"/></h2>
            <p>Консультации со специалистами помогают получить ценные советы, ускоряя решение сложных задач. Это позволяет избежать ошибок и найти оптимальные пути развития</p>
            <div className={styles.createTaskButtons}>
                <div className={styles.nextWithAI}>
                    <button className={styles.nextBtn} onClick={() => setPage(1)}>Продолжить</button>
                    <button onClick={toggleQuestionVisible}>
                        <img 
                            src={questionImg} 
                            width={24}
                            height={24}
                            alt="Подсказка" 
                        />
                    </button>
                    <div className={`${styles.question} ${questionVisible ? styles.visible : ''}`}>Мы внедрили искусственный интеллект прямо сюда. <GradientText text="Подробнее"/></div>
                </div>
            </div>
        </div>
        <div className={styles.unionWrapper}>
            <img src={bgItemImg} width={247} height={246} alt="purple circle" />
            <img src={bgItem2Img} width={106} height={140} alt="purple circle" />
            <img src={bgItem1Img} width={280} height={149} alt="purple circle" />
            <img 
                src={unionImg}
                width={446}
                height={446}
                alt='union photo'
            />
        </div>
    </div>
  )
}
