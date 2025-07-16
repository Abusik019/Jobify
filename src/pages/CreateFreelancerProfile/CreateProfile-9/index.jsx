import styles from "./style.module.css";
import editImg from '../../../assets/icons/edit2.svg';
import avatarImg from '../../../assets/images/projectImage.png';

export default function CreateProfilePageNine({ setPage, user }) {
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
                    <button onClick={() => setPage(8)}>
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
                            <h2>Специализация</h2>
                            <button onClick={() => setPage(3)}>
                                <img 
                                    src={editImg}
                                    width={24}
                                    height={24}
                                    alt="edit" 
                                />
                            </button>
                        </div>
                        <h2 className={styles.userProfession}>{user.userProfession}</h2>
                    </div>
                    <div>
                        <div className={styles.title}>
                            <h2>Навыки</h2>
                            <button onClick={() => setPage(2)}>
                                <img 
                                    src={editImg}
                                    width={24}
                                    height={24}
                                    alt="edit" 
                                />
                            </button>
                        </div>
                        <ul className={styles.skills}>
                            {user.userCategories.length !== 0 && 
                                user.userCategories.map(item => (
                                    <li key={item.id}>{item.rusName}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className={styles.experience}>
                    <div className={styles.title}>
                        <h2>Опыт работы</h2>
                        <button onClick={() => setPage(4)}>
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
                                        <h3>{item.date.start.month}.{item.date.start.year} - {item.date.finish.month}.{item.date.finish.year}</h3>
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
                        <button onClick={() => setPage(6)}>
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
                                        <h3>{item.date.start.month}.{item.date.start.year} - {item.date.finish.month}.{item.date.finish.year}</h3>
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
                        <button onClick={() => setPage(5)}>
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
                <button onClick={() => setPage(8)}>Вернуться</button>
                <h2>9 из 9</h2>
                <button onClick={() => setPage(10)}>Продолжить</button>
            </div>
        </div>
    );
}
