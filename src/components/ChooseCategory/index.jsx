import styles from './style.module.css';
import { useState } from 'react';

export const ChooseCategory = ({ question, description, options, setTask, task }) => {
    const [choosenVariable, setChoosenVariable] = useState(task.details.mainCategory);

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
                                        mainCategory: item 
                                    }
                                }));
                            }}
                        />
                        <label>
                            {item.rusName}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}
