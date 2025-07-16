import styles from "./style.module.css";
import { useEffect, useState } from "react";
import CreateTaskLoad from "../../../components/CreateTaskLoad";
import DatePickerItem from '../../../components/DatePicker';
import Modal from "../../../components/Modal";
import { Link } from "react-router-dom";

import jobifyImg from "../../../assets/icons/logoJobify.svg";
import plusImg from '../../../assets/icons/plusWithBg.svg';
import editImg from '../../../assets/icons/edit2.svg';
import deleteImg from '../../../assets/icons/cross.svg';
import mockImg from '../../../assets/images/mockImage2.png';
import avatarImg from '../../../assets/images/defaultAvatar.png';

export default function CreateProfilePageSix({ setPage, setUser, user }) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [myProperties, setMyProperties] = useState({
        image: null,
        phoneNumber: '',
        country: '',
        city: '',
        dateOfBirth: ''
    });

    const isSaveDisabled = !myProperties.phoneNumber || !myProperties.country || !myProperties.city || !myProperties.dateOfBirth;
    
    useEffect(() => {
        setMyProperties(user.userDetails);
    }, [user.userDetails]);
    
    const handleSetData = (e, item) => {
        setMyProperties((prev) => ({
            ...prev,
            [item]: e.target.value
        }));
    }

    const handleCloseModal = () => {
        setMyProperties({
            image: null,
            phoneNumber: '',
            country: '',
            city: '',
            dateOfBirth: ''
        });
        setIsOpenModal(false);
    };

    const handleEdit = () => {
        setIsOpenModal(true);
    };

    const handleDelete = () => {
        setMyProperties({
            image: null,
            phoneNumber: '',
            country: '',
            city: '',
            dateOfBirth: ''
        });
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => setMyProperties((prev) => ({
            ...prev,
            image: e.target.result
          }));
          reader.readAsDataURL(file);
        }
    };

    return (
        <div className={styles.createProfile}>
            <Link to="/"><img src={jobifyImg} width={102} height={42} alt="Jobify logo" /></Link>
            <div className={styles.createProfileContainer}>
                <h2>Осталось совсем чуть-чуть</h2>
                <h3>На этом этапе укажите необходимые детали о себе такие как фотография, локация и дата рождения</h3>
                {isSaveDisabled ? (
                    <button className={styles.addExperience} onClick={() => setIsOpenModal(true)}>
                        <img 
                            src={plusImg}
                            width={20}
                            height={20}
                            alt="plus"
                        />
                        <span>Указать детали</span>
                    </button> 
                ) :
                    <div className={styles.aboutMeBlock}>
                        <img 
                            src={myProperties.image ? myProperties.image : avatarImg}
                            width={88}
                            height={88}
                            alt="your image" 
                        />
                        <div className={styles.aboutMeContent}>
                            <div>
                                <h2>Жанна Кондратьева</h2>
                                <div>
                                    <button onClick={handleEdit}>
                                        <img 
                                            src={editImg}
                                            width={24}
                                            height={24}
                                            alt="edit" 
                                        />
                                    </button>
                                    <button onClick={handleDelete}>
                                        <img 
                                            src={deleteImg}
                                            width={24}
                                            height={24}
                                            alt="delete" 
                                        />
                                    </button>
                                </div>
                            </div>
                            <h3>{myProperties.country}, {myProperties.city}</h3>
                            <h4>{myProperties.dateOfBirth}</h4>
                        </div>
                    </div>
                }
            </div>
            <CreateTaskLoad prev={5} next={7} setPage={setPage} maxPage={8} disabled={isSaveDisabled} onNext={
                () => {
                    setUser((prev) => ({
                        ...prev,
                        userDetails: myProperties
                    }));
                }
            }/>
            <Modal isOpen={isOpenModal} onClose={handleCloseModal}>
                <div className={styles.modalContainer}>
                    <h2>Указать детали</h2>
                    <form>
                        <div className={styles.formImage}>
                            <img 
                                src={myProperties.image || mockImg}
                                width={88}
                                height={88}
                                alt="your photo" 
                            />
                            <label>
                                Выбрать фотографию
                                <input
                                    type="file"
                                    style={{ display: "none" }}
                                    onChange={handleFileChange}
                                />
                            </label>
                        </div>
                        <div className={styles.formNumber}>
                            <label htmlFor="phoneNumber">Номер телефона <span style={{color: '#F63939'}}>*</span></label>
                            <input type="text" id="phoneNumber" value={myProperties.phoneNumber} placeholder="Ваш номер" required onInput={(e) => handleSetData(e, 'phoneNumber')}/>
                        </div>
                        <div className={styles.formLocation}>
                            <div>
                                <label htmlFor="country">Страна <span style={{color: '#F63939'}}>*</span></label>
                                <input type="text" id="country" value={myProperties.country} placeholder="Россия" required onInput={(e) => handleSetData(e, 'country')}/>
                            </div>
                            <div>
                                <label htmlFor="city">Город <span style={{color: '#F63939'}}>*</span></label>
                                <input type="text" id="city" value={myProperties.city} placeholder="Москва" required onInput={(e) => handleSetData(e, 'city')}/>
                            </div>
                        </div>
                        <div className={styles.formDatePicker}>
                            <h2>Дата рождения <span style={{color: '#F63939'}}>*</span></h2>
                            <DatePickerItem value={myProperties.dateOfBirth} onChange={(date, dateString) => {
                                setMyProperties((prev) => ({
                                    ...prev,
                                    dateOfBirth: date ? dateString : "" 
                                }));
                            }}/>
                        </div>
                        <div className={styles.formBtns}>
                            <button onClick={handleCloseModal}>Назад</button>
                            <button onClick={() =>  setIsOpenModal(false)} style={{opacity: isSaveDisabled ? '0.2' : '1'}} disabled={isSaveDisabled}>Сохранить</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
}
