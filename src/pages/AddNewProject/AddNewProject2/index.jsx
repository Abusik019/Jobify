import styles from './style.module.css';
import { Link } from 'react-router-dom';

import crossImg from "../../../assets/icons/cross.svg";
import projectImg from '../../../assets/images/projectImage.png';

export default function AddNewProjectTwo({ setPage, inputData, files, imageSrc }) {
    const skills = inputData.skills.split(';');

    return (
        <div className={styles.publishPage}>
            <button className={styles.closeBtn}><img src={crossImg} width={42} height={42} alt="cross" /></button>
            <div className={styles.publishPageContent}>
                <div className={styles.publishPageText}>
                    <h2>{inputData.name}</h2>
                    <h3>{inputData.role}</h3>
                    <p>{inputData.description}</p>
                    <h4>Навыки и инструменты</h4>
                    <ul>
                        {skills.map((item, index) => {
                            if(item){
                                return <li key={index}>{item}</li>;
                            }
                        })}
                    </ul>
                    <h5>Дата публикации: 22 марта 2024</h5>
                    <Link to="#">{inputData.link}</Link>
                </div>
                <div className={styles.imageWrapper}>
                    <img src={imageSrc ? imageSrc : projectImg} alt="Preview"/>
                    <ul className={styles.coversList}>
                        {files.length !== 0 && 
                            files.map((item) => {
                                const newImageSrc = files.length > 0 ? URL.createObjectURL(item) : null;
                                return (
                                    <li>
                                        <img src={newImageSrc} width={150} height={100} alt="image" />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className={styles.addNewProjectBtns}>
                <button onClick={() => setPage('add')}>Назад</button>
                <div>
                    <button>В черновики</button>
                    <Link to="#">Продолжить</Link>
                </div>
            </div>
        </div>
    )
}
