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

export default function CreateProfilePageFour({ setPage, setUser, user }) {
    const [editId, setEditId] = useState(null);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [experiences, setExperiences] = useState([]);
    const [myExperience, setMyExperience] = useState({
        id: null,
        name: '',
        company: '',
        country: '',
        city: '',
        isWork: false,
        date: {
            start: {
                month: null,
                year: null
            },
            finish: {
                month: null,
                year: null
            }
        },
        description: ''
    });
    
    useEffect(() => {
        setExperiences([...user.userExperience]);
    }, [user.userExperience]);
    
    const handleSetData = (e, item) => {
        setMyExperience((prev) => ({
            ...prev,
            [item]: item === 'isWork' ? e.target.checked : e.target.value
        }));
    }

    const handleCloseModal = () => {
        setMyExperience({
            id: null,
            name: '',
            company: '',
            country: '',
            city: '',
            isWork: false,
            date: {
                start: { month: '', year: '' },
                finish: { month: '', year: '' }
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
            <img src={jobifyImg} width={102} height={42} alt="Jobify logo" />
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
                                            <h2>{item.name}</h2>
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
            <CreateTaskLoad prev={3} next={5} setPage={setPage} maxPage={9} disabled={false} onNext={
                () => {
                    setUser((prev) => ({
                        ...prev,
                        userExperience: [...experiences]
                    }));
                }
            }/>
            <Modal isOpen={isOpenModal} onClose={handleCloseModal} showClose={false}>
                <div className={styles.modalContainer}>
                    <h2>Указать опыт работы</h2>
                    <form>
                        <div className={styles.formName}>
                            <label htmlFor="name">Название <span style={{color: '#F63939'}}>*</span></label>
                            <input type="text" id="name" value={myExperience.name} placeholder="Разработчик игр" required onInput={(e) => handleSetData(e, 'name')}/>
                        </div>
                        <div className={styles.formCompany}>
                            <label htmlFor="company">Компания <span style={{opacity: '.6'}}>(если есть)</span></label>
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
                            <input type="checkbox" id="checkbox" checked={myExperience.isWork} onChange={(e) => handleSetData(e, 'isWork')}/>
                            <label htmlFor="checkbox">Работаю здесь в настоящий момент</label>
                        </div>
                        <div className={styles.formWorkTime}>
                            <div>
                                <h2>Дата начала работы <span style={{color: '#F63939'}}>*</span></h2>
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
                                <h2>Дата окончания работы <span style={{color: '#F63939'}}>*</span></h2>
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
