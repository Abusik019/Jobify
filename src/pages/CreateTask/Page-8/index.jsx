import styles from "./style.module.css";
import { Link } from 'react-router-dom';
import doneImg from '../../../assets/images/bigDone.png';

export default function CreateTaskPageEight() {
    return (
        <div className={styles.createTask}>
           <div className={styles.createTaskConatiner}>
                <img 
                    src={doneImg}
                    width={99}
                    height={99}
                    alt="done" 
                />
                <h2>Ваш заказ был успешно опубликован!</h2>
                <Link to='#'>Перейти к заказу</Link>
           </div>
        </div>
    );
}
