import styles from "./style.module.css";
import { useEffect, useState } from "react";
import CreateTaskLoad from "../../../components/CreateTaskLoad";
import { GradientText } from "../../../components/GradientText";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../../../redux/slices/categorySlice';

import deleteImg from '../../../assets/icons/purple-cross.svg';
import addImg from '../../../assets/icons/plus.svg';


export default function CreateTaskPageThree({ setPage, setTask, task }) {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.category);
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        dispatch(fetchCategory());
    }, [])

    function handleSearchCategory(e){
        if(e.target.value){
            const copyArray = categories.filter(item => item.rusName.includes(e.target.value));

            setSearchResult(copyArray);
        } else{
            setSearchResult([]);
        }
    } 
    
    function handleAddSkill(item){
        setTask((prev) => ({
            ...prev,
            skills: prev.skills.includes(item) ? [...prev.skills] : [
                ...prev.skills,
                item
            ]
        }))
    }

    function handleDeleteSkill(item){
        setTask((prev) => ({
            ...prev,
            skills: !prev.skills.includes(item) ? [...prev.skills] : prev.skills.filter(el => el.id !== item.id)
        }))
    }

    return (
        <div className={styles.createTask}>
            <div className={styles.createTaskContainer}>
                <div className={styles.titleBlock}>
                    <h2>Какие <GradientText text="навыки"/> требуются для работы?</h2>
                    <p>
                        Указание конкретных навыков при создании задания помогает привлечь исполнителей, поскольку четко обозначает ваши требования 
                        <br />
                        <br />
                        Позволяет сократить количество неподходящих откликов, привлечь более квалифицированных специалистов и улучшить качество выполнения проекта
                    </p>
                </div>
                <div className={styles.contentBlock}>
                    <input type="text" placeholder="Поиск" onInput={handleSearchCategory}/>
                    <h2>Выберите 3-5 навыков для лучших результатов</h2>
                    <ul className={styles.searchResultSkills}>
                        {searchResult.length !== 0 &&
                            searchResult.map(item => (
                                <li key={item.id}>
                                    <h2>{item.rusName}</h2>
                                    <button onClick={() => handleAddSkill(item)}>
                                        <img 
                                            src={addImg}
                                            width={18}
                                            height={18}
                                            alt="delete" 
                                        />
                                    </button>
                                </li>
                            ))    
                        }
                    </ul>
                    {task.skills.length !== 0 && <h3>Выбранные навыки</h3>}
                    <ul className={styles.choosenSkills}>
                        {task.skills.length !== 0 &&
                            task.skills.map((item) => (
                                <li key={item.id}>
                                    <h2><GradientText text={item.rusName}/></h2>
                                    <button onClick={() => handleDeleteSkill(item)}>
                                        <img 
                                            src={deleteImg}
                                            width={18}
                                            height={18}
                                            alt="delete" 
                                        />
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                    <h4>Популярные среди заказчиков</h4>
                    <ul className={styles.popularSkills}>
                        {categories.length !== 0 &&
                            categories.map((item) => (
                                <li key={item.id}>
                                    <h2>{item.rusName}</h2>
                                    <button onClick={() => handleAddSkill(item)}>
                                        <img 
                                            src={addImg}
                                            width={18}
                                            height={18}
                                            alt="delete" 
                                        />
                                    </button>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
            <CreateTaskLoad prev={1} next={3} setPage={setPage} maxPage={6} disabled={!Boolean(task.skills.length)}/>
        </div>
    );
}
