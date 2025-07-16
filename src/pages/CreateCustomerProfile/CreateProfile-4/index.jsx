import styles from "./style.module.css";
import CreateTaskLoad from "../../../components/CreateTaskLoad";
import { useEffect, useState } from "react";
import Modal from "../../../components/Modal";
import { GradientText } from "../../../components/GradientText";
import { Link } from "react-router-dom";

import jobifyImg from "../../../assets/icons/logoJobify.svg";
import editImg from '../../../assets/icons/edit2.svg';
import deleteImg from '../../../assets/icons/cross.svg';
import plusImg from '../../../assets/icons/plusWithBg.svg';
import plus2Img from '../../../assets/icons/plus.svg';

export default function CreateProfilePageFour({ setPage, setUser, user }) {
    const [editId, setEditId] = useState(null);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [experiences, setExperiences] = useState([]);
    const [myExperience, setMyExperience] = useState({
        id: null,
        title: '',
        country: '',
        city: '',
        date: {
            month: '', 
            year: ''
        },
        description: ''
    });
    
    const isSaveDisabled = !myExperience.title || !myExperience.country || !myExperience.city || !myExperience.date.month || !myExperience.date.year || !myExperience.description;
    
    useEffect(() => {
        setExperiences([...user.userOtherExperience]);
    }, [user.userOtherExperience]);

    const handleSetData = (e, item) => {
        setMyExperience((prev) => ({
            ...prev,
            [item]: e.target.value
        }));
    }

    const handleCloseModal = () => {
        setMyExperience({
            id: null,
            title: '',
            country: '',
            city: '',
            date: {
                month: '', 
                year: ''
            },
            description: ''
        });
        setEditId(null);
        setIsOpenModal(false);
    };

    const handleSave = () => {
        if (editId !== null) {
            setExperiences((prev) => prev.map(exp => exp.id === editId ? { ...myExperience, id: editId } : exp));
        } else {
            setExperiences((prev) => [...prev, { ...myExperience, id: Date.now() }]);
        }
        handleCloseModal();
    };

    const handleEdit = (id) => {
        const experienceToEdit = experiences.find(exp => exp.id === id);
        if (experienceToEdit) {
            setMyExperience({ ...experienceToEdit });
            setEditId(id);
            setIsOpenModal(true);
        }
    };

    const handleDelete = (id) => {
        setExperiences((prev) => prev.filter(exp => exp.id !== id));
    };

    return (
        <div className={styles.createProfile}>
            <Link to="/"><img src={jobifyImg} width={102} height={42} alt="Jobify logo" /></Link>
            <div className={styles.createProfileContainer}>
                <h2>Опишите сторонние <GradientText text="достижения"/></h2>
                <h3>Если у вас есть иной опыт  в выбранной отрасли, то вы можете указать его тут. Это может быть участие в мероприятиях (хакатонах, олимпиадах, социальных/коммерческих проектах)</h3>
                {!experiences.length ? (
                    <button className={styles.addExperience} onClick={() => setIsOpenModal(true)}>
                        <img 
                            src={plusImg}
                            width={20}
                            height={20}
                            alt="plus"
                        />
                        <span>Указать другой опыт</span>
                    </button> 
                ) :
                    <div className={styles.experienceWrapper}>
                        <ul className={styles.experienceList}>
                            {experiences.map((item, index) => (
                                <li key={index}>
                                    <div className={styles.experienceContent}>
                                        <div>
                                            <h2>{item.title}</h2>
                                            <div>
                                                <button onClick={() => handleEdit(item.id)}>
                                                    <img 
                                                        src={editImg}
                                                        width={24}
                                                        height={24}
                                                        alt="edit" 
                                                    />
                                                </button>
                                                <button onClick={() => handleDelete(item.id)}>
                                                    <img 
                                                        src={deleteImg}
                                                        width={24}
                                                        height={24}
                                                        alt="delete" 
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                        <h3>{item.date.month}.{item.date.year}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <button className={styles.addExperienceSmall} onClick={() => setIsOpenModal(true)}>
                            <img 
                                src={plus2Img}
                                width={24}
                                height={24}
                                alt="plus" 
                            />
                        </button>
                    </div>
                }
            </div>
            <CreateTaskLoad 
                prev={3} 
                next={5} 
                setPage={setPage} 
                maxPage={8} 
                disabled={false} 
                onNext={
                    () => setUser((prev) => ({...prev, userOtherExperience: [...experiences]}))
                }
            />
            <Modal isOpen={isOpenModal} onClose={handleCloseModal} showClose={false}>
                <div className={styles.modalContainer}>
                    <h2>Указать другой опыт</h2>
                    <form>
                        <div className={styles.formTitle}>
                            <label htmlFor="title">Название <span style={{color: '#F63939'}}>*</span></label>
                            <input type="text" id="title" value={myExperience.title} placeholder="Участие в хакатоне" required onInput={(e) => handleSetData(e, 'title')}/>
                        </div>
                        <div className={styles.formLocation}>
                            <div>
                                <label htmlFor="country">Страна <span style={{color: '#F63939'}}>*</span></label>
                                <input type="text" id="country" value={myExperience.country} placeholder="Россия" required onInput={(e) => handleSetData(e, 'country')}/>
                            </div>
                            <div>
                                <label htmlFor="city">Город <span style={{color: '#F63939'}}>*</span></label>
                                <input type="text" id="city" value={myExperience.city} placeholder="Москва" required onInput={(e) => handleSetData(e, 'city')}/>
                            </div>
                        </div>
                        <div className={styles.formWorkTime}>
                            <div>
                                <h2>Дата события <span style={{color: '#F63939'}}>*</span></h2>
                                <div>
                                    <input type="number" placeholder="Месяц" value={myExperience.date.month} onChange={(e) => setMyExperience(prev => ({
                                        ...prev, date: { ...prev.date, month: e.target.value }
                                    }))} />
                                    <input type="number" placeholder="Год" value={myExperience.date.year} onChange={(e) => setMyExperience(prev => ({
                                        ...prev, date: { ...prev.date, year: e.target.value }
                                    }))} />
                                </div>
                            </div>
                        </div>
                         <div className={styles.formDescription}>
                            <h2>Описание <span style={{color: '#F63939'}}>*</span></h2>
                            <textarea 
                                value={myExperience.description}
                                onChange={(e) => handleSetData(e, 'description')} 
                                required 
                            />
                        </div>
                        <div className={styles.formBtns}>
                            <button onClick={handleCloseModal}>Назад</button>
                            <button onClick={handleSave} style={{opacity: isSaveDisabled ? '0.2' : '1', cursor: isSaveDisabled ? 'not-allowed' : 'pointer'}} disabled={isSaveDisabled}>Сохранить</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
}
