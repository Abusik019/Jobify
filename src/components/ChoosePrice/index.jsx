import styles from './style.module.css';
import { useState } from 'react';

const options = [
    {
        id: 1,
        name: 'Да'
    },
    {
        id: 2,
        name: 'Нет'
    },
    {
        id: 3,
        name: 'Не важно'
    },
]

export const ChoosePrice = ({ question, description, setTask, task }) => {
    const [choosenVariable, setChoosenVariable] = useState(task.details.highPriceOffers);

    return (
        <div className={styles.selectWrapper}>
            <h2>{question} <span style={{color: '#F63939'}}>*</span></h2>
            <p>{description}</p>
            <div className={styles.selectOption}>
                {options.map(item => (
                    <div className={styles.checkboxWrapper} key={item.id}>
                        <input 
                            type='checkbox' 
                            checked={item.id == choosenVariable.id ? true : false} 
                            onChange={() => {
                                setChoosenVariable(item); 
                        
                                setTask((prev) => ({
                                    ...prev,
                                    details: {
                                        ...prev.details,
                                        highPriceOffers: item 
                                    }
                                }));
                            }}
                        />
                        <label>
                            {item.name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}
