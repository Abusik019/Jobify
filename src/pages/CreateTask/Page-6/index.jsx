import styles from "./style.module.css";
import CreateTaskLoad from '../../../components/CreateTaskLoad';
import { Textarea } from "../../../components/Textarea";
import { GradientText } from "../../../components/GradientText";
import { useRef } from "react";

import warningImg from '../../../assets/icons/warning.svg';
import deleteImg from '../../../assets/icons/close.svg';
import plusImg from '../../../assets/icons/plus.svg';

export default function CreateTaskPageSix({ setPage, setTask, task }) { 
    const fileInputRef = useRef(null);
    const isDisabledBtn = Boolean(task.desc && task.files.length);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const newFiles = Array.from(event.target.files); 
        setTask((prev) => ({
            ...prev,
            files: [...prev.files, ...newFiles], 
        }));
    };

    const handleDeleteFile = (item) => {
        setTask((prev) => ({
            ...prev,
            files: prev.files.filter(el => el.name !== item.name)
        }))
    }

    console.log(task.desc.length);

    return (
        <div className={styles.createTask}>
            <div className={styles.createTaskContainer}>
                <div className={styles.titleBlock}>
                    <h2>Опишите Вашу <GradientText text="задачу"/></h2>
                    <p>Грамотно опишите задачу, чтобы исполнитель мог наиболее корректно выполнить задание</p>
                    <ul className={styles.titleBlockList}>
                        <li>Четко формулируйте цель проекта</li>
                        <li>Опишите требования и технические детали</li>
                        <li>Используйте конкретные примеры</li>
                        <li>Укажите сроки выполнения</li>
                        <li>Определите критерии оценки успеха</li>
                        <li>Будьте открыты к вопросам</li>
                        <li>Предоставьте доступ к необходимым ресурсам</li>
                    </ul>
                </div>
                <div className={styles.task}>
                    {task.desc.length < 100 && 
                        <div className={styles.taskWarning}>
                            <img 
                                src={warningImg}
                                width={16}
                                height={16}
                                alt="warning" 
                            />
                            <p>Ваше описание задания выглядит довольно коротким, чтобы избежать недопониманий, увеличьте содержимое описания</p>
                        </div>
                    }
                    <div className={styles.taskTitleBlock}>
                        <h2>Опишите задачу</h2>
                    </div>
                    <Textarea 
                        value={task.desc} 
                        maxLength={5000} 
                        onInput={(e) => setTask((prev) => ({
                            ...prev,
                            desc: e.target.value
                        }))}
                    />
                    <div className={styles.files}>
                        <h2>Вложения</h2>
                        <ul className={styles.selectFiles}>
                            {task.files.length !== 0 &&
                                task.files.map((item, index) => (
                                    <li key={index}>
                                        <h2>{item.name}</h2>
                                        <button onClick={() => handleDeleteFile(item)}>
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
                            <button className={styles.addFileBtn} onClick={handleClick}>
                                <img src={plusImg} width={16} height={16} alt="plus" />
                            </button>
                            <input
                                type="file"
                                ref={fileInputRef}
                                className={styles.fileInput}
                                onChange={handleFileChange}
                            />
                        </ul>
                    </div>
                </div>
            </div>
            <CreateTaskLoad prev={4} next={6} setPage={setPage} maxPage={6} disabled={!isDisabledBtn}/>
        </div>
    );
}
