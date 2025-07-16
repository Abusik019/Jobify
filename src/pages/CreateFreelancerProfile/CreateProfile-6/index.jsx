import styles from "./style.module.css";
import { useEffect, useState } from "react";
import CreateTaskLoad from "../../../components/CreateTaskLoad";
import Modal from "../../../components/Modal";
import { GradientText } from "../../../components/GradientText";

import jobifyImg from "../../../assets/icons/logoJobify.svg";
import plusImg from '../../../assets/icons/plusWithBg.svg';
import editImg from '../../../assets/icons/edit2.svg';
import deleteImg from '../../../assets/icons/cross.svg';
import plus2Img from '../../../assets/icons/plus.svg';

export default function CreateProfilePageSix({ setPage, setUser, user }) {
    const [editId, setEditId] = useState(null);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [experiences, setExperiences] = useState([]);
    const [myExperience, setMyExperience] = useState({
        id: null,
        speciality: '',
        education_place: '',
        country: '',
        city: '',
        isStudy: false,
        date: {
            start: { month: '', year: '' },
            finish: { month: '', year: '' }
        },
    });
    
    const isSaveDisabled = !myExperience.speciality || !myExperience.education_place || !myExperience.country || !myExperience.city || !myExperience.date.start.month || !myExperience.date.start.year || (!myExperience.isStudy && (!myExperience.date.finish.month || !myExperience.date.finish.year));
    
    useEffect(() => {
        setExperiences([...user.userEducation]);
    }, [user.userEducation]);

    const handleSetData = (e, item) => {
        setMyExperience((prev) => ({
            ...prev,
            [item]: item === 'isStudy' ? e.target.checked : e.target.value
        }));
    }

    const handleCloseModal = () => {
        setMyExperience({
            id: null,
            speciality: '',
            education_place: '',
            country: '',
            city: '',
            isStudy: false,
            date: {
                start: { month: '', year: '' },
                finish: { month: '', year: '' }
            },
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
            <img src={jobifyImg} width={102} height={42} alt="Jobify logo" />
            <div className={styles.createProfileContainer}>
                <h2>Вы можете рассказать о своём <GradientText text="образовании"/> здесь</h2>
                <h3>Если у вас есть диплом или вы обучаетесь в учебном заведении, то укажите это, чтобы клиенты знали, какими навыками вы обладаете</h3>
                {!experiences.length ? (
                    <button className={styles.addExperience} onClick={() => setIsOpenModal(true)}>
                        <img 
                            src={plusImg}
                            width={20}
                            height={20}
                            alt="plus"
                        />
                        <span>Указать образование</span>
                    </button> 
                ) :
                    <div className={styles.experienceWrapper}>
                        <ul className={styles.experienceList}>
                            {experiences.map((item, index) => (
                                <li key={index}>
                                    <div className={styles.experienceContent}>
                                        <div>
                                            <h2>{item.speciality}</h2>
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
                                                        alt="edit" 
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                        <h3>{item.date.start.month}.{item.date.start.year} - {item.date.finish.month}.{item.date.finish.year}</h3>
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
                prev={5} 
                next={7} 
                setPage={setPage} 
                maxPage={9} 
                disabled={false} 
                onNext={
                    () => {
                        setUser((prev) => ({
                            ...prev,
                            userEducation: [...experiences]
                        }));
                    }
                }
            />
            <Modal isOpen={isOpenModal} onClose={handleCloseModal}>
                <div className={styles.modalContainer}>
                    <h2>Указать Ваше образование</h2>
                    <form>
                        <div className={styles.formSpeciality}>
                            <label htmlFor="speciality">Специальность <span style={{color: '#F63939'}}>*</span></label>
                            <input type="text" id="speciality" value={myExperience.speciality} placeholder="Маркетинг и дизайн" required onInput={(e) => handleSetData(e, 'speciality')}/>
                        </div>
                        <div className={styles.formEducationPlace}>
                            <label htmlFor="education_place">Учебное заведение <span style={{color: '#F63939'}}>*</span></label>
                            <input type="text" id="education_place" value={myExperience.education_place} placeholder="Высшая школа экономики" required onInput={(e) => handleSetData(e, 'education_place')}/>
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
                        <div className={styles.formCheckbox}>
                            <input type="checkbox" id="checkbox" checked={myExperience.isStudy} onChange={(e) => handleSetData(e, 'isStudy')}/>
                            <label htmlFor="checkbox">Учусь здесь в настоящий момент</label>
                        </div>
                        <div className={styles.formWorkTime}>
                            <div>
                                <h2>Начало обучения <span style={{color: '#F63939'}}>*</span></h2>
                                <div>
                                    <input type="number" placeholder="Месяц" value={myExperience.date.start.month} onChange={(e) => setMyExperience(prev => ({
                                        ...prev, date: { ...prev.date, start: { ...prev.date.start, month: e.target.value } }
                                    }))} />
                                    <input type="number" placeholder="Год" value={myExperience.date.start.year} onChange={(e) => setMyExperience(prev => ({
                                        ...prev, date: { ...prev.date, start: { ...prev.date.start, year: e.target.value } }
                                    }))} />
                                </div>
                            </div>
                            <div>
                                <h2>Конец обучения <span style={{color: '#F63939'}}>*</span></h2>
                                <div>
                                    <input type="number" placeholder="Месяц" value={myExperience.date.finish.month} onChange={(e) => setMyExperience(prev => ({
                                        ...prev, date: { ...prev.date, finish: { ...prev.date.finish, month: e.target.value } }
                                    }))} />
                                    <input type="number" placeholder="Год" value={myExperience.date.finish.year} onChange={(e) => setMyExperience(prev => ({
                                        ...prev, date: { ...prev.date, finish: { ...prev.date.finish, year: e.target.value } }
                                    }))} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.formBtns}>
                            <button onClick={handleCloseModal}>Назад</button>
                            <button onClick={handleSave} style={{opacity: isSaveDisabled ? '0.2' : '1'}} disabled={isSaveDisabled}>Сохранить</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
}
