import styles from "./style.module.css";
import { useEffect, useState } from "react";
import UploadFile from "../../../components/UploadFile";
import Modal from "../../../components/Modal";
import CreateTaskLoad from "../../../components/CreateTaskLoad";
import { GradientText } from '../../../components/GradientText';

import jobifyImg from "../../../assets/icons/logoJobify.svg";
import uploadImg from "../../../assets/icons/upload-2.svg";
import closeImg from "../../../assets/icons/close.svg";
import avatarImg from "../../../assets/images/createTaskAvatar.png";
import fileImg from "../../../assets/icons/file.svg";

export default function CreateProfilePageOne({ setPage, setUser, user }) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [files, setFiles] = useState([]);

    useEffect(() => {
        setFiles(user.userResume);
    }, [user.userResume]);

    function formatFileSize(size) {
        return (size / (1024 * 1024)).toFixed(2) + " МБ";
    }

    function handleFileDelete(index) {
        setFiles((prev) => prev.filter((_, i) => i !== index));
    }

    function handleContinue() {
        setIsOpenModal(false);
    }

    return (
        <div className={styles.createProfile}>
            <img src={jobifyImg} width={102} height={42} alt="Jobify logo" />
            <div className={styles.createProfileContainer}>
                <div className={styles.createProfileContent}>
                    <h1>А теперь <GradientText text="создадим профиль"/></h1>
                    <p>
                        Хорошо оформленный профиль — залог успеха. Загрузите ваше резюме, расскажите о своих достижениях и опыте работы.
                        <br />
                        <br />
                        Процесс создания профиля займет всего 5-10 минут
                    </p>
                    <button onClick={() => setIsOpenModal(true)}>
                        <img src={uploadImg} width={20} height={20} alt="upload" />
                        <span>Загрузить резюме</span>
                    </button>
                    <ul className={styles.inputResult}>
                        {files.map((file, index) => (
                            <li key={index}>
                                <span>{file.name}</span>
                                <img
                                    src={closeImg}
                                    width={16}
                                    height={16}
                                    alt="delete"
                                    onClick={() =>
                                        handleFileDelete(index)
                                    }
                                    style={{ cursor: "pointer" }}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.createProfileQuote}>
                    <p>«Создав свой профиль, я смогла найти много интересных проектов и расширить свою клиентскую базу на бирже»</p>
                    <h2>Анна Петрова, графический дизайнер</h2>
                    <img src={avatarImg} width={78} height={78} alt="avatar"/>
                </div>
            </div>
            <CreateTaskLoad prev={0} next={2} setPage={setPage} maxPage={9} nextText={files.length ? 'Продолжить' : 'Продолжить без резюме'} onNext={
                () => {
                    setUser((prev) => ({
                        ...prev,
                        userResume: [...files]
                    }));
                }
            }/>
            <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
                <div className={styles.modalContainer}>
                    <h2>Загрузить резюме</h2>
                    <UploadFile setFiles={setFiles} />
                    <ul className={styles.filesList}>
                        {files.length !== 0 &&
                            files.map((file, index) => (
                                <li key={index}>
                                    <div>     
                                        <img 
                                            src={fileImg}
                                            width={36}
                                            height={36} 
                                            alt="file" 
                                        />
                                        <div className={styles.fileContent}>
                                            <h2>{file.name}</h2>
                                            <h3>{formatFileSize(file.size)}</h3>
                                            <div className={styles.fileProgress}>
                                                <div></div>
                                                <span>100%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <img
                                        src={closeImg}
                                        width={20}
                                        height={20}
                                        alt="delete"
                                        onClick={() => setFiles(files.filter((_, i) => i !== index))}
                                        style={{ cursor: "pointer" }}
                                    />
                                </li>
                            ))}
                    </ul>
                    <button onClick={handleContinue}>Продолжить</button>
                </div>
            </Modal>
        </div>
    );
}
