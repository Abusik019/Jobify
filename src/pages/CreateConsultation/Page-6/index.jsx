import styles from "./style.module.css";
import { Link } from 'react-router-dom';
import doneImg from '../../../assets/images/bigDone.png';

export default function CreateConsultationPageSix() {
    return (
        <div className={styles.createTask}>
           <div className={styles.createTaskConatiner}>
                <img 
                    src={doneImg}
                    width={99}
                    height={99}
                    alt="done" 
                />
                <h2>Консультация была успешно опубликована!</h2>
                <Link to='#'>Перейти в профиль</Link>
           </div>
        </div>
    );
}
