import styles from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchSubCategoryId } from '../../redux/slices/categorySlice';

export const SquareSelect = ({ question, description, task, setTask }) => {
    const dispatch = useDispatch();
    const subcategories = useSelector((state) => state.category.subCategory);
    const [choosenCategoryArray, setChoosenCategoryArray] = useState([]);
    
    useEffect(() => {
        dispatch(fetchSubCategoryId());
    }, [])

    useEffect(() => {
        if (subcategories.length) {
            setChoosenCategoryArray(subcategories.filter(item => item.categoryId === task.details.mainCategory.id));
        } else {
            setChoosenCategoryArray([]);
        }
    }, [task.details.mainCategory.id, subcategories]);  
    
    function handleChangeSubcategories(item) {                            
        setTask((prev) => ({
            ...prev,
            details: {
                ...prev.details,
                subcategories: prev.details.subcategories.includes(item) 
                    ? prev.details.subcategories.filter((el) => el.id !== item.id)
                    : [...prev.details.subcategories, item]
            }
        }));
    }    

    console.log(task.details.subcategories);

    return (
        <div className={styles.selectWrapper}>
            <h2>{question} <span style={{color: '#F63939'}}>*</span></h2>
            <p>{description}</p>
            <div className={styles.selectOption}>
                {choosenCategoryArray.length !== 0 &&
                    choosenCategoryArray.map(item => (
                        <div className={styles.checkboxWrapper} key={item.id}>
                            <input 
                                type='checkbox' 
                                checked={task.details.subcategories.some(el => el.id === item.id)}
                                onChange={() => handleChangeSubcategories(item)}
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
