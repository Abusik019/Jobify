import styles from './style.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Textarea } from '../../components/Textarea';
import DragDrop from '../../components/DragAndDrop';
import SmallDragDrop from '../../components/SmallDragAndDrop';
import Modal from '../../components/Modal';
import AddNewProjectTwo from './AddNewProject2';

import crossImg from "../../assets/icons/cross.svg";
import mockImg from "../../assets/images/mock.addNewProject.png"

export default function AddNewProject() {
    const [files, setFiles] = useState([]);
    const [showImage, setShowImage] = useState(0); 
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isCover, setIsCover] = useState(null);
    const [page, setPage] = useState('add');
    const [inputData, setInputData] = useState({
        name: "",
        role: "",
        skills: "",
        link: "",
        description: "Расскажите о проекте"
    })

    const isDisabled = Boolean(inputData.name && inputData.role && inputData.skills && inputData.description);
    const imageSrc = files.length > 0 && files[showImage] ? URL.createObjectURL(files[showImage]) : null;

    const removeFile = (index) => {
        setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
        setShowImage(0); 
    };

    const handleChageInputState = (e, name) => {
        setInputData((prev) => ({
            ...prev,
            [name]: e.target.value
        }));

    }
    
    console.log(files);

    return (
        <>
            {page === "add" ? ( 
                <div className={styles.addNewProject}>
                    <button className={styles.closeBtn}><img src={crossImg} width={42} height={42} alt="cross" /></button>
                    <h1>Добавить новый проект</h1>
                    <p>Задайте чёткое название и описание, укажите свою роль и использованные навыки. Добавьте ссылку или прикрепите необходимые файлы, а затем внимательно проверьте всю информацию перед публикацией!</p>
                    <div className={styles.addNewProjectContainer}>
                        <div className={styles.inputs}>
                            <div>
                                <label htmlFor="name">Название проекта <span style={{color: '#F63939'}}>*</span></label>
                                <input value={inputData.name} type="text" id="name" placeholder="Введите название проекта" onChange={(e) => handleChageInputState(e, 'name')}/>
                            </div>
                            <div>
                                <label htmlFor="role">Ваша роль в проекте <span style={{color: '#F63939'}}>*</span></label>
                                <input value={inputData.role} type="text" id="role" placeholder="UI/UX Дизайнер" onChange={(e) => handleChageInputState(e, 'role')}/>
                            </div>
                            <div>
                                <label htmlFor="skills">Какие навыки применялись? <span style={{color: '#F63939'}}>*</span></label>
                                <input value={inputData.skills} type="text" id="skills" placeholder="UX-аналитика; Figma; Photoshop" onChange={(e) => handleChageInputState(e, 'skills')}/>
                                <h4>Перечислите навыки, разделяя их точкой с запятой (;)</h4>
                            </div>
                            <div>
                                <label htmlFor="link">Ссылка на проект <span>(если есть)</span></label>
                                <input value={inputData.link} type="text" id="link" placeholder="example.com" onChange={(e) => handleChageInputState(e, 'link')}/>
                            </div>
                            <div>
                                <h2>Описание <span style={{color: '#F63939'}}>*</span></h2>
                                <Textarea maxLength={1000} value={inputData.description} onInput={(e) => handleChageInputState(e, 'description')}/>
                            </div>
                        </div>
                        <div className={styles.dragAndDrop}>
                            {files.length > 0 ? (
                                <div className={styles.imageContainer}>
                                    <div className={styles.imageWrapper}>
                                        <img src={imageSrc ? imageSrc : mockImg} alt="Preview" className={styles.previewImage} />
                                        <button onClick={() => setIsOpenModal(true)}>Установить как обложку</button>
                                    </div>
                                    <ul className={styles.coversList}>
                                        {files.length && 
                                            files.map((item, index) => {
                                                if(index !== showImage){
                                                    const newImageSrc = files.length > 0 ? URL.createObjectURL(item) : null;
                                                    return (
                                                        <li onClick={() => setShowImage(index)}>
                                                            <img src={newImageSrc} width={150} height={100} alt="image" />
                                                            <button onClick={(e) => {
                                                                e.stopPropagation();
                                                                removeFile(index);
                                                            }}>
                                                                <img src={crossImg} width={16} height={16} alt="cross" />
                                                            </button>
                                                        </li>
                                                    )
                                                }
                                            })
                                        }
                                        <li>
                                            <SmallDragDrop setFiles={setFiles} />
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <DragDrop setFiles={setFiles} />
                            )}
                        </div>
                    </div>
                    <div className={styles.addNewProjectBtns}>
                        <Link to="#">Назад</Link>
                        <div>
                            <button>В черновики</button>
                            <button 
                                onClick={() => setPage('publish')}
                                style={{opacity: isDisabled ? '1' : '.2'}}
                                disabled={!isDisabled}
                            >Продолжить</button>
                        </div>
                    </div>
                    <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
                        <div className={styles.modalContent}>
                            <h2>Обложка проекта</h2>
                            <img src={imageSrc} alt="review image"/>
                            <ul className={styles.imageslist}>
                                {files.map((file, index) => (
                                    <li key={index} onClick={() => setShowImage(index)}>
                                        <img src={URL.createObjectURL(file)} width={100} height={100} alt={`Preview ${index + 1}`} />
                                    </li>
                                ))}
                            </ul>
                            <div>
                                <button onClick={() => setIsOpenModal(false)}>Назад</button>
                                <button onClick={() => {
                                    setIsCover(showImage);
                                    setIsOpenModal(false);
                                }}>Сохранить обложку</button>
                            </div>
                        </div>
                    </Modal>
                </div>
            )
                : <AddNewProjectTwo setPage={setPage} inputData={inputData} files={files} showImage={showImage} setShowImage={setShowImage} imageSrc={imageSrc}/>
            }
        </>
    );
}
