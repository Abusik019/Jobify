import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { Textarea } from "../../components/Textarea";
import { useState } from "react";
import DatePickerItem from '../../components/DatePicker';
import TimePickerItem from '../../components/TimePicker';

import avatarImg from '../../assets/images/freelancer.png';
import arrowImg from '../../assets/icons/smallArrow.svg';

export default function Response() {
    const [isMyResponse, setIsMyResponse] = useState(false);
    const [response, setResponse] = useState({
        desc: '',
        price: '',
        deadline: {
            date: '',
            time: ''
        },
        payment: 'fixed'
    })
    const isDisabed = Boolean(response.desc && response.price && response.deadline.date && response.deadline.time);

    return (
        <div className={styles.response}>
            {!isMyResponse &&
                <section className={styles.responseRules}>
                    <ul className={styles.rulesList}>
                        <li>
                            <h2>Персонализация отклика</h2>
                            <p>Обращайтесь по имени и показывайте знание задания</p>
                        </li>
                        <li>
                            <h2>Выделение навыков</h2>
                            <p>Упоминайте релевантный опыт и примеры выполненных работ</p>
                        </li>
                        <li>
                            <h2>Описание вашего подхода</h2>
                            <p>Расскажите о методах и этапах работы над проектом</p>
                        </li>
                        <li>
                            <h2>Краткость и ясность речи</h2>
                            <p>Избегайте лишней информации и следите за грамотностью</p>
                        </li>
                    </ul>
                </section>
            }
            <section className={styles.responseCard}>
                <div>
                    <h2>Создать сайт для стоматологический клиники</h2>
                    <div className={styles.cardInfo}>
                        <h3>Дата публикации: 21.12.2024</h3>
                        <h4>203</h4>
                    </div>
                    <div className={styles.customerInfo}>
                        <img src={avatarImg} width={58} height={58} alt="avatar" />
                        <ul>
                            <li>Заказчик</li>
                            <li>Жанна Кондратьева <span>5.0</span></li>
                            <li>Регион</li>
                        </ul>
                    </div>
                </div>
            </section>
            {isMyResponse && 
                <section className={styles.responseInfo}>
                    <ul className={styles.responseList}>
                        <li>
                            <h2>Описание</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Id tortor purus vitae velit mi volutpat. Lacus cursus tempor nisl mattis ac hac donec at enim. Purus euismod pharetra convallis enim porta scelerisque lectus sit. Bibendum nunc euismod justo posuere cras rhoncus tristique.</p>
                        </li>
                        <li>
                            <h2>Порядок оплаты</h2>
                            <p>Фиксированная оплата</p>
                        </li>
                        <li>
                            <h2>Стоимость работы</h2>
                            <p>32 000 ₽</p>
                        </li>
                        <li>
                            <h2>Срок выполнения</h2>
                            <p>12.02.2024 13:45</p>
                        </li>
                    </ul>
                </section>
            }
            {isMyResponse && 
                <section className={styles.chat}>
                    <div className={styles.chatContent}>
                        <div>
                            <h2>Чат с заказчиком</h2>
                            <p>Вы можете связаться с заказчиком, если хотите уточнить детали</p>
                        </div>
                        <Link to='#'>
                            <img src={arrowImg} width={30} height={30} alt="arrow" style={{transform: 'rotate(-90deg)'}}/>
                        </Link>
                    </div>
                </section>
            }
            {!isMyResponse && 
                <section className={styles.yourReponse}>
                    <h2>Ваш отклик</h2>
                    <h3>Описание <span style={{color: '#F63939'}}>*</span></h3>
                    <Textarea 
                        value={response.desc ? response.desc : "Расскажите, почему стоит выбрать именно Вас" }
                        maxLength={5000} 
                        onInput={(e) => setResponse((prev) => ({
                            ...prev,
                            desc: e.target.value
                        }))}
                    />
                    <div className={styles.yourResponseInputs}>
                        <div className={styles.responsePrice}>
                            <label htmlFor="price">
                                Укажите стоимость работы <span style={{color: '#F63939'}}>*</span>
                            </label>
                            <input
                                type="number"
                                id="price"
                                placeholder="32000 ₽"
                                onInput={(e) => setResponse((prev) => ({
                                    ...prev,
                                    price: e.target.value
                                }))}
                                value={response.price}
                                required
                            />
                        </div>
                        <div className={styles.responseDate}>
                            <h2>Срок выполнения <span style={{color: '#F63939'}}>*</span></h2>
                            <div>
                                <DatePickerItem value={response.deadline.date} onChange={(date, dateString) => {
                                    setResponse((prev) => ({
                                        ...prev,
                                        deadline: {
                                            ...prev.deadline,
                                            date: date ? dateString : "" 
                                        }
                                    }));
                                }}/>
                                <TimePickerItem value={response.deadline.time} onChange={(time, timeString) => {
                                    setResponse((prev) => ({
                                        ...prev,
                                        deadline: {
                                            ...prev.deadline,
                                            time: time ? timeString : "" 
                                        }
                                    }));
                                }}/>
                            </div>
                        </div>
                    </div>
                </section>
            }
            {!isMyResponse && 
                <section className={styles.payment}>
                    <h2>Порядок оплаты <span style={{color: '#F63939'}}>*</span></h2>
                    <div className={styles.selectPaymentMethod}>
                        <div style={{opacity: response.payment === 'byStages' ? '1' : '0.5'}}>
                            <label htmlFor="payment1">Оплата по этапам</label>
                            <input 
                                id="payment1" 
                                type="checkbox" 
                                onChange={() => setResponse((prev => ({
                                    ...prev,
                                    payment: 'byStages'
                                })))}
                                checked={response.payment === 'byStages' ? true : false}
                            />
                        </div>
                        <div style={{opacity: response.payment === 'fixed' ? '1' : '0.5'}}>
                            <label htmlFor="payment2">Фиксированная оплата</label>
                            <input 
                                id="payment2" 
                                type="checkbox" 
                                onChange={() => setResponse((prev => ({
                                    ...prev,
                                    payment: 'fixed'
                                })))}
                                checked={response.payment === 'fixed' ? true : false}
                            />
                        </div>
                    </div>
                    <p>Оплата по этапам — после выполнения некоторой части задания заказчик пересылает вам соответствующую сумму.<br />Заказчик в праве оставить за собой способ оплаты.</p>
                </section>
            }
            {!isMyResponse && 
                <div className={styles.navBtns}>
                    <Link to='#'>Вернуться назад</Link>
                    <button disabled={!isDisabed} style={{opacity: isDisabed ? '1' : '.2'}}>Отправить отклик</button>
                </div>
            }
        </div>
    );
}
