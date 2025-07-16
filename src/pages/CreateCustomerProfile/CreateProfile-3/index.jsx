import styles from "./style.module.css";
import CreateTaskLoad from "../../../components/CreateTaskLoad";
import { useEffect, useState } from "react";
import { GradientText } from "../../../components/GradientText";
import Modal from "../../../components/Modal";
import { Link } from "react-router-dom";

import editImg from '../../../assets/icons/edit2.svg';
import deleteImg from '../../../assets/icons/cross.svg';
import plus2Img from '../../../assets/icons/plus.svg';
import jobifyImg from "../../../assets/icons/logoJobify.svg";
import plusImg from '../../../assets/icons/plusWithBg.svg';

export default function CreateProfilePageThree({ setPage, setUser, user }) {    
    const [editId, setEditId] = useState(null);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [experiences, setExperiences] = useState([]);
    const [myExperience, setMyExperience] = useState({
        id: null,
        title: '',
        company: '',
        country: '',
        city: '',
        currently_working: false,
        start_month: null,
        start_year: null,
        end_month: null,
        end_year: null,
        description: ''
    });
    
    useEffect(() => {
        setExperiences([...user.userExperience]);
    }, [user.userExperience]);
    
    const handleSetData = (e, item) => {
        setMyExperience((prev) => ({
            ...prev,
            [item]: item === 'currently_working' ? e.target.checked : e.target.value
        }));
    }

    const handleCloseModal = () => {
        setMyExperience({
            id: null,
            title: '',
            company: '',
            country: '',
            city: '',
            currently_working: false,
            start_month: '',
            start_year: '',
            end_month: '',
            end_year: '',
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
                <h2>Расскажите о своём <GradientText text="опыте работы"/></h2>
                <h3>Если у вас есть опыт работы в выбранной отрасли, то вы можете указать его тут</h3>
                {!experiences.length ? (
                    <button className={styles.addExperience} onClick={() => setIsOpenModal(true)}>
                        <img 
                            src={plusImg}
                            width={20}
                            height={20}
                            alt="plus"
                        />
                        <span>Указать опыт работы</span>
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
                                        <h3>{item.start_month}.{item.start_year} - {item.end_month}.{item.end_year}</h3>
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
            <CreateTaskLoad prev={2} next={4} setPage={setPage} maxPage={8} disabled={false} onNext={
                () => {
                    setUser((prev) => ({
                        ...prev,
                        userExperience: [...experiences]
                    }));
                }
            }/>
            <Modal isOpen={isOpenModal} onClose={handleCloseModal}>
                <div className={styles.modalContainer}>
                    <h2>Указать опыт работы</h2>
                    <form>
                        <div className={styles.formName}>
                            <label htmlFor="name">Название <span style={{color: '#F63939'}}>*</span></label>
                            <input type="text" id="name" value={myExperience.title} placeholder="Разработчик игр" required onInput={(e) => handleSetData(e, 'title')}/>
                        </div>
                        <div className={styles.formCompany}>
                            <label htmlFor="company">Компания (если есть)</label>
                            <input type="text" id="company" value={myExperience.company} placeholder="Electronic Arts" onInput={(e) => handleSetData(e, 'company')}/>
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
                            <input type="checkbox" id="checkbox" checked={myExperience.currently_working} onChange={(e) => handleSetData(e, 'currently_working')}/>
                            <label htmlFor="checkbox">Работаю здесь в настоящий момент</label>
                        </div>
                        <div className={styles.formWorkTime}>
                            <div>
                                <h2>Дата начала работы <span style={{color: '#F63939'}}>*</span></h2>
                                <div>
                                    <input type="number" placeholder="Месяц" value={myExperience.start_month} onChange={(e) => handleSetData(e, 'start_month')} />
                                    <input type="number" placeholder="Год" value={myExperience.start_year} onChange={(e) => handleSetData(e, 'start_year')} />
                                </div>
                            </div>
                            <div>
                                <h2>Дата окончания работы <span style={{color: '#F63939'}}>*</span></h2>
                                <div>
                                    <input type="number" placeholder="Месяц" value={myExperience.end_month} onChange={(e) => handleSetData(e, 'end_month')} />
                                    <input type="number" placeholder="Год" value={myExperience.end_year} onChange={(e) => handleSetData(e, 'end_year')} />
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
                            <button onClick={handleSave}>Сохранить</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
}
