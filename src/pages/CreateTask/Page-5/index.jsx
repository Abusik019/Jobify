import styles from "./style.module.css";
import CreateTaskLoad from "../../../components/CreateTaskLoad";
import { GradientText } from "../../../components/GradientText";

import rubleImg from '../../../assets/icons/ruble.svg';
import plusImg from '../../../assets/icons/plus.svg';

export default function CreateTaskPageFive({ setPage, setTask, task }) {
    const disabledBtn = Boolean(task.stages.length && task.stages[0].name && task.stages[0].price);

    const handleAddStage = () => {
        setTask(prev => ({
            ...prev,
            stages: [...prev.stages, { name: "", price: "" }]
        }));
    };

    const handleStageChange = (index, field, value) => {
        setTask(prev => {
            const updatedStages = prev.stages.map((stage, i) =>
                i === index ? { ...stage, [field]: value } : stage
            );
            return { ...prev, stages: updatedStages };
        });
    };

    return (
        <div className={styles.createTask}>
            <div className={styles.createTaskContainer}>
                <div className={styles.titleBlock}>
                    <h2>Определим Ваш <GradientText text="бюджет"/></h2>
                    <p>
                        Определите приоритеты проекта, выделите средства на ключевые этапы, оцените стоимость исполнителей, оставьте резерв на непредвиденные расходы и поддерживайте гибкость в распределении бюджета
                    </p>
                </div>
                <div className={styles.yourBudget}>
                   <div className={styles.selectPaymentMethod}>
                        <div>
                            <label htmlFor="payment1">Оплата по этапам</label>
                            <input id="payment1" type="checkbox" 
                                checked={task.paymentMethod === 'byStages'} 
                                onChange={() => setTask(prev => ({
                                    ...prev,
                                    paymentMethod: "byStages"
                                }))}/>
                        </div>
                        <div>
                            <label htmlFor="payment2">Фиксированная оплата</label>
                            <input id="payment2" type="checkbox" 
                                checked={task.paymentMethod === 'fixed'} 
                                onChange={() => setTask(prev => ({
                                    ...prev,
                                    paymentMethod: "fixed"
                                }))}/>
                        </div>
                   </div>
                   <p>Вы можете выбрать: разделить работу на этапы и заплатить отдельно за каждый этап или заплатить сразу за весь объём</p>
                   {task.paymentMethod === 'byStages' && 
                        <>
                            <h2>Оплата по этапам <span style={{color: "#F63939"}}>*</span></h2>
                            <p>Разделите Ваше задание на этапы и производите оплату за каждый этап перед началом выполнения заказчиком данного этапа</p>
                            <div className={styles.paymentStages}>
                                    <ul className={styles.stages}>
                                        {task.stages.map((stage, index) => (
                                            <li key={index}>
                                                <input 
                                                    type="text" 
                                                    className={styles.stageName} 
                                                    placeholder="Название этапа" 
                                                    value={stage.name}
                                                    onChange={(e) => handleStageChange(index, "name", e.target.value)}
                                                    required
                                                />
                                                <input 
                                                    type="number" 
                                                    className={styles.stagePrice} 
                                                    placeholder="Ваш бюджет" 
                                                    value={stage.price}
                                                    onChange={(e) => handleStageChange(index, "price", e.target.value)}
                                                    required
                                                />
                                                <img
                                                    src={rubleImg}
                                                    width={11}
                                                    height={20}
                                                    alt="ruble" 
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                    <button className={styles.addStage} onClick={handleAddStage}>
                                        <span>Добавить этап</span>
                                        <img 
                                            src={plusImg}
                                            width={18}
                                            height={18}
                                            alt="plus" 
                                        />
                                    </button>
                            </div>
                        </>
                   }
                </div>
            </div>
            <CreateTaskLoad prev={3} next={5} setPage={setPage} maxPage={6} disabled={task.paymentMethod === 'fixed' ? false : !disabledBtn}/>
        </div>
    );
}
