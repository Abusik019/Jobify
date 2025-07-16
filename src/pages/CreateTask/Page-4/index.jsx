import styles from "./style.module.css";
import CreateTaskLoad from "../../../components/CreateTaskLoad";
import { GradientText } from "../../../components/GradientText";
import { ChooseCategory } from "../../../components/ChooseCategory";
import { SquareSelect } from "../../../components/SquareSelect";
import { ChoosePrice } from '../../../components/ChoosePrice';
import DatePickerItem from '../../../components/DatePicker';
import TimePickerItem from '../../../components/TimePicker';

export default function CreateTaskPageFour({ setPage, setTask, task }) {
    const isDisabledBtn = Boolean(task.details.mainCategory && task.details.subcategories.length && task.details.highPriceOffers && task.details.deadlines.date && task.details.deadlines.time); 
    
    return (
        <div className={styles.createTask}>
            <div className={styles.createTaskContainer}>
                <div className={styles.titleBlock}>
                    <h2>Теперь уточним <GradientText text="детали"/> Вашего заказа</h2>
                    <p>
                        Указание деталей заказа помогает привлечь квалифицированных исполнителей, сокращая неподходящие отклики
                    </p>
                </div>
                <div className={styles.orderDetails}>
                    <ChooseCategory
                        question="Введите категорию, которой принадлежит ваш заказ"
                        description="Список категорий"
                        options={task.skills}
                        task={task}
                        setTask={setTask}
                    />
                    <SquareSelect 
                        question="Уточните подкатегории, в которых будет размещён заказ"
                        description="Список подкатегорий в рамках выбранных категорий"
                        task={task}
                        setTask={setTask}
                    />
                    <ChoosePrice
                        question="Рассмотрите ли предложения за более высокую цену от высококвалифицированных исполнителей?"
                        description="Да/Нет"
                        task={task}
                        setTask={setTask}
                    />
                    <div className={styles.deadlines}>
                        <h2>Укажите сроки выполнения задания <span style={{color: '#F63939'}}>*</span></h2>
                        <p>Заполните сроки</p>
                        <div className={styles.deadlinesContent}>
                            <DatePickerItem 
                                value={task.details.deadlines.date}
                                onChange={(date, dateString) => {
                                    setTask((prev) => ({
                                        ...prev,
                                        details: {
                                            ...prev.details,
                                            deadlines: {
                                                ...prev.details.deadlines,
                                                date: date ? dateString : "" 
                                            },
                                        }
                                    }));
                                }}
                            />
                            <TimePickerItem value={task.details.deadlines.time} onChange={(date, dateString) => {
                                setTask((prev) => ({
                                    ...prev,
                                    details: {
                                        ...prev.details,
                                        deadlines: {
                                            ...prev.details.deadlines,
                                            time: date ? dateString : "" 
                                        },
                                    }
                                }));
                            }}/>
                        </div>
                    </div>
                    <div className={styles.notes}>
                        <h2>Примечания</h2>
                        <p>Укажите дополнительные детали, чтобы фрилансер знал все тонкости</p>
                        <input value={task.details.notes} type="text" placeholder="Укажите примечания" onInput={(e) => setTask((prev) => ({
                            ...prev,
                            details: {
                                ...prev.details,
                                notes: e.target.value
                            }
                        }))}/>
                    </div>
                </div>
            </div>
            <CreateTaskLoad prev={2} next={4} setPage={setPage} maxPage={6} disabled={!isDisabledBtn}/>
        </div>
    );
}
