import styles from "./style.module.css";
import editImg from '../../../assets/icons/edit2.svg';
import avatarImg from '../../../assets/images/projectImage.png';
import { useDispatch, useSelector } from "react-redux";
import { setClientExpertises, setEducation, setResume, setWork } from "../../../redux/slices/userSlice";

export default function CreateProfilePageEight({ setPage, user }) {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.category);

    console.log(categories);

    function fetchClientData(){
        if(user.userResume) dispatch(setResume(user.userResume));
        if (user.userDescription) {
            dispatch(setClientExpertises({ 
                categories: user.userCategories.length ? [...user.userCategories] : [],
                description: user.userDescription 
            }));
        }
        if (user.userExperience && user.userExperience.length) {
            const experienceData = user.userExperience.map(({ id, ...rest }) => rest);
            dispatch(setWork(experienceData));
        }
        if (user.userEducation && user.userEducation.length) {
            const educationData = user.userEducation.map(({ id, ...rest }) => rest);
            dispatch(setEducation(educationData))
        }
    }

    return (
        <div className={styles.createProfile}>
            <div className={styles.createProfileContainer}>
                <h2>Ваш профиль</h2>
                <p>Вы сможете изменить данные позже в разделе настроек, а пока что Ваш профиль выглядит таким образом</p>
                <div className={styles.details}>
                    <div className={styles.detailsContent}>
                        <img 
                            src={user.userDetails.image ? user.userDetails.image : avatarImg}
                            width={90}
                            height={90}
                            alt="avatar" 
                            style={{objectFit: 'cover'}}
                        />
                        <div>
                            <h2>Жанна Кондратьева</h2>
                            <h3>{user.userDetails.city}, {user.userDetails.country}</h3>
                        </div>
                    </div>
                    <button onClick={() => setPage(6)}>
                        <img 
                            src={editImg}
                            width={24}
                            height={24}
                            alt="edit" 
                        />
                    </button>
                </div>
                <div className={styles.description}>
                    <div>
                        <div className={styles.title}>
                            <h2>Описание</h2>
                            <button onClick={() => setPage(7)}>
                                <img 
                                    src={editImg}
                                    width={24}
                                    height={24}
                                    alt="edit" 
                                />
                            </button>
                        </div>
                        <p>{user.userDescription}</p>
                    </div>
                    <div>
                        <div className={styles.title}>
                            <h2>Сфера деятельности</h2>
                            <button onClick={() => setPage(2)}>
                                <img 
                                    src={editImg}
                                    width={24}
                                    height={24}
                                    alt="edit" 
                                />
                            </button>
                        </div>
                        {user.userCategories.length !== 0 ? 
                            <ul className={styles.skills}>
                                {user.userCategories.map(item => {
                                    const category = categories.find(category => category.id === item);

                                    return (
                                        <li key={category.id}>{category.rusName}</li>
                                    )
                                })}
                            </ul>
                            :
                            <h2 className={styles.optionalText}>Вы не оставили информации в этом поле, но не беспокойтесь — оно необязательное</h2>
                        }
                    </div>
                </div>
                <div className={styles.experience}>
                    <div className={styles.title}>
                        <h2>Опыт работы</h2>
                        <button onClick={() => setPage(3)}>
                            <img 
                                src={editImg}
                                width={24}
                                height={24}
                                alt="edit" 
                            />
                        </button>
                    </div>
                    {user.userExperience.length !== 0 ? (
                        <ul className={styles.experiencesList}>
                            {user.userExperience.map((item, index) => (
                                <li key={index}>
                                    <div>
                                        <h2>{item.name}</h2>
                                        <h3>{item.start_month}.{item.start_year} - {item.end_month}.{item.end_year}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ): (
                        <h2 className={styles.optionalText}>Вы не оставили информации в этом поле, но не беспокойтесь — оно необязательное</h2>
                    )}
                </div>
                <div className={styles.education}>
                    <div className={styles.title}>
                        <h2>Образование</h2>
                        <button onClick={() => setPage(5)}>
                            <img 
                                src={editImg}
                                width={24}
                                height={24}
                                alt="edit" 
                            />
                        </button>
                    </div>
                    {user.userEducation.length !== 0 ? (
                        <ul className={styles.experiencesList}>
                            {user.userEducation.map((item, index) => (
                                <li key={index}>
                                    <div>
                                        <h2>{item.speciality}</h2>
                                        <h3>{item.start_month}.{item.start_year} - {item.end_month}.{item.end_year}</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur. Massa et id faucibus id fermentum. Sed netus id gravida dui tellus facilisis nullam interdum montes.</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <h2 className={styles.optionalText}>Вы не оставили информации в этом поле, но не беспокойтесь — оно необязательное</h2>
                    )}
                </div>
                <div className={styles.experience}>
                    <div className={styles.title}>
                        <h2>Другой опыт</h2>
                        <button onClick={() => setPage(4)}>
                            <img 
                                src={editImg}
                                width={24}
                                height={24}
                                alt="edit" 
                            />
                        </button>
                    </div>
                    {user.userOtherExperience.length !== 0 ? (
                        <ul className={styles.experiencesList}>
                            {user.userOtherExperience.map((item, index) => (
                                <li key={index}>
                                    <div>
                                        <h2>{item.title}</h2>
                                        <h3>{item.date.month}.{item.date.year}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <h2 className={styles.optionalText}>Вы не оставили информации в этом поле, но не беспокойтесь — оно необязательное</h2>
                    )}
                </div>
            </div>
            <div className={styles.btns}>
                <button onClick={() => setPage(7)}>Вернуться</button>
                <h2>8 из 8</h2>
                <button onClick={() => {
                    setPage(9)
                    fetchClientData()
                }}>Продолжить</button>
            </div>
        </div>
    );
}
