import styles from "./style.module.css";
import CreateTaskLoad from "../../../components/CreateTaskLoad";
import { GradientText } from "../../../components/GradientText";

export default function CreateTaskPageTwo({ setPage, setTask, task }) {
    return (
        <div className={styles.createTask}>
            <div className={styles.createTaskTitleBlock}>
                <h2>
                    Введите <GradientText text="название" /> вашего задания
                </h2>
                <p>
                    Чтобы избежать недоразумений и привлечь правильных
                    исполнителей, сформулируйте название задания максимально
                    точно и понятно
                </p>
                <input
                    type="text"
                    placeholder="Ваше задание"
                    value={task.title}
                    onInput={(e) => setTask(prev => ({
                        ...prev, 
                        title: e.target.value
                    }))}
                />
                <h3>Например:</h3>
                <ul className={styles.taskExmaples}>
                    <li>Разработка и внедрение интерактивной AI-модели</li>
                    <li>
                        Создание и оптимизация AI-модели для [указать
                        применение]
                    </li>
                </ul>
            </div>
            <CreateTaskLoad prev={0} next={2} setPage={setPage} maxPage={6} disabled={!Boolean(task.title)} />
        </div>
    );
}
