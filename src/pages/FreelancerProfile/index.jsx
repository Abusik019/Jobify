import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import MyFreelancerProfile from "../MyFreelancerProfile";
import { GradientText } from '../../components/GradientText';

import avatarImg from "../../assets/images/onlineAvatar.png";
import universityImg from "../../assets/icons/university.svg";
import ratingStarImg from "../../assets/icons/ratingStar.svg";
import arrowImg from "../../assets/icons/arrowBlackLong.svg";
import noneImg from '../../assets/images/mockLi.png';
import like from '../../assets/icons/like.svg';
import verifyImg from '../../assets/icons/verifed.svg';
import rhombusImg from '../../assets/icons/whiteRhombus.svg';
import listImg from '../../assets/icons/list.svg';
import uploadImg from '../../assets/icons/upload.svg';
import toFavoriteImg from '../../assets/icons/toFavourite.svg';
import purpleFavoriteImg from '../../assets/icons/purpleFavorite.svg';

export default function FreelancerProfile() {
    const [isMyProfile, setIsMyProfile] = useState(false);
    const [isShowVerify, setIsShowVerify] = useState(false);
    const [showAllReviews, setShowAllReviews] = useState(false);

    return (
        <>
            {!isMyProfile ? (
                <div className={styles.profile}>
                    <div className={styles.profileInfo}>
                        <aside className={styles.aside}>
                            <div className={styles.profileNameContainer}>
                                <div className={styles.profileNameBlock}>
                                    <img
                                        src={avatarImg}
                                        width={90}
                                        height={90}
                                        alt="profile avatar"
                                    />
                                    <div className={styles.profileNameContent}>
                                        <div>
                                            <h2>Жанна Кондратьева</h2>
                                            <button onMouseEnter={() => setIsShowVerify(true)} onMouseLeave={() => setIsShowVerify(false)}>
                                                <img 
                                                    src={verifyImg}
                                                    width={22}
                                                    height={22} 
                                                    alt="verify" 
                                                />
                                            </button>
                                            {isShowVerify && 
                                                <div className={styles.isVerify}>
                                                    <h2>Профиль верифицирован</h2>
                                                    <div>
                                                        Фрилансер подтвердил свою личность
                                                        <img 
                                                            src={rhombusImg}
                                                            width={24}
                                                            height={24} 
                                                            alt="rhombus" 
                                                        />
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                        <h3>Россия, Казань</h3>
                                    </div>
                                </div>
                                <div className={styles.profileActions}>
                                    <button>Связаться с фрилансером</button>
                                    <button>
                                        <img 
                                            src={listImg}
                                            width={20}
                                            height={20} 
                                            alt="list" 
                                        />
                                        <span>Резюме фрилансера</span>
                                    </button>
                                </div>
                                <div className={styles.profileStats}>
                                    <div>
                                        <h2>₽ 90 000+</h2>
                                        <h3>Всего заработано</h3>
                                    </div>
                                    <div>
                                        <h2>16</h2>
                                        <h3>Заказов</h3>
                                    </div>
                                    <div>
                                        <h2>97 %</h2>
                                        <h3>Успешных заказов</h3>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.profileVerification}>
                                <h2>Верификация</h2>
                                <h3>Почта подтверждена</h3>
                            </div>
                            <div className={styles.profileEducation}>
                                <h2>Образование</h2>
                                <div className={styles.profileEducationContent}>
                                    <img
                                        src={universityImg}
                                        width={28}
                                        height={28}
                                        alt="university icon"
                                    />
                                    <div>
                                        <h2>ВШЭ</h2>
                                        <h3>
                                            Бакалавриат
                                            <br />
                                            2020 - 2025
                                        </h3>
                                    </div>
                                </div>
                                <h2>Навыки</h2>
                                <ul className={styles.profileSkills}>
                                    <li>навык</li>
                                    <li>навык</li>
                                    <li>навык</li>
                                    <li>навык</li>
                                    <li>навык</li>
                                    <li>навык</li>
                                </ul>
                            </div>
                            <div className={styles.jobExperience}>
                                <h2>Опыт работы</h2>
                                <ul className={styles.experienceList}>
                                    <li>
                                        <h2>Специалист по кибербезопасности</h2>
                                        <h3>05.12.24 - сейчас</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur. Massa et id faucibus id fermentum.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.otherExperience}>
                                <h2>Другой опыт</h2>
                                <ul className={styles.otherExperienceList}>
                                    <li>
                                        <h2>Победитель хакатона</h2>
                                        <h3>15.02.2024</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur. Massa et id faucibus id fermentum. Sed netus id gravida dui tellus facilisis nullam interdum montes.
                                        </p>
                                    </li>
                                    <li>
                                        <h2>Участие в стартапе</h2>
                                        <h3>15.02.2024</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur. Massa et id faucibus id fermentum. Sed netus
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                        <div className={styles.profileContent}>
                            <section className={styles.profileBio}>
                                <div>
                                    <h2>Услуги эксперта по кибербезопасности</h2>
                                </div>
                                <h3>
                                    Lorem ipsum dolor sit amet consectetur. Sit diam
                                    imperdiet elit proin non cursus ridiculus. Nam
                                    blandit egestas malesuada imperdiet facilisis in non
                                    sit. Dictum vel nec metus morbi.
                                    <br/>
                                    Lorem ipsum dolor sit amet consectetur. Tortor
                                    aenean nec risus vel. Magna sed augue eget iaculis
                                    vitae enim quam molestie. Sagittis sagittis dolor
                                    tincidunt sit id aliquam in id. Elementum integer
                                    proin lobortis commodo. Odio dolor lacus in sed
                                    lorem luctus sodales. Fringilla commodo mattis leo
                                    eget ultricies integer tortor proin. Nunc cursus vel
                                    consectetur dui commodo. In dolor diam tortor
                                    rhoncus id amet adipiscing egestas.
                                </h3>
                            </section>
                            <section className={styles.responseConsultation}>
                                <h2>Запросить консультацию</h2>
                                <div className={styles.consultationCard}>
                                    <img
                                        src={avatarImg}
                                        width={150}
                                        height={150}
                                        alt="avatar consultant"
                                    />
                                    <div className={styles.consultationCardContent}>
                                        <h2>Название консультации</h2>
                                        <h3>Бесплатная 15-ти минутная консультация</h3>
                                        <ul>
                                            <li>Тема обсуждения</li>
                                            <li>Тема обсуждения</li>
                                        </ul>
                                        <Link to="#">
                                            <GradientText text="Записаться"/>
                                        </Link>
                                    </div>
                                </div>
                            </section>
                            <section className={styles.doneTasks}>
                                <div className={styles.doneTasksTitle}>
                                    <h2>Выполненные задания</h2>
                                    <button>
                                        <img
                                            src={uploadImg}
                                            width={24}
                                            height={24}
                                            alt="upload" 
                                        />
                                    </button>
                                </div>
                                <ul className={styles.taskCards}>
                                    <li>
                                        <h2>Название задания</h2>
                                        <div className={styles.rating}>
                                            <div>
                                                <img
                                                    src={ratingStarImg}
                                                    width={18}
                                                    height={18}
                                                    alt="star"
                                                />
                                                <img
                                                    src={ratingStarImg}
                                                    width={18}
                                                    height={18}
                                                    alt="star"
                                                />
                                                <img
                                                    src={ratingStarImg}
                                                    width={18}
                                                    height={18}
                                                    alt="star"
                                                />
                                                <img
                                                    src={ratingStarImg}
                                                    width={18}
                                                    height={18}
                                                    alt="star"
                                                />
                                                <img
                                                    src={ratingStarImg}
                                                    width={18}
                                                    height={18}
                                                    alt="star"
                                                />
                                            </div>
                                            <h3>5.0</h3>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur.
                                            Malesuada parturient placerat sit at
                                            fermentum. Feugiat sit facilisi aenean et
                                            venenatis maecenas tortor sit arcu.
                                        </p>
                                        <div className={styles.taskCardPrice}>
                                            <h2>₽ 32 000</h2>
                                            <h3>45 часов</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <h2>Название задания</h2>
                                        <div className={styles.rating}>
                                            <div>
                                                <img
                                                    src={ratingStarImg}
                                                    width={18}
                                                    height={18}
                                                    alt="star"
                                                />
                                                <img
                                                    src={ratingStarImg}
                                                    width={18}
                                                    height={18}
                                                    alt="star"
                                                />
                                                <img
                                                    src={ratingStarImg}
                                                    width={18}
                                                    height={18}
                                                    alt="star"
                                                />
                                                <img
                                                    src={ratingStarImg}
                                                    width={18}
                                                    height={18}
                                                    alt="star"
                                                />
                                                <img
                                                    src={ratingStarImg}
                                                    width={18}
                                                    height={18}
                                                    alt="star"
                                                />
                                            </div>
                                            <h3>5.0</h3>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur.
                                            Malesuada parturient placerat sit at
                                            fermentum. Feugiat sit facilisi aenean et
                                            venenatis maecenas tortor sit arcu.
                                        </p>
                                        <div className={styles.taskCardPrice}>
                                            <h2>₽ 32 000</h2>
                                            <h3>45 часов</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <h2>Название задания</h2>
                                        <div className={styles.rating}>
                                            <div>
                                                <img
                                                    src={ratingStarImg}
                                                    width={18}
                                                    height={18}
                                                    alt="star"
                                                />
                                                <img
                                                    src={ratingStarImg}
                                                    width={18}
                                                    height={18}
                                                    alt="star"
                                                />
                                                <img
                                                    src={ratingStarImg}
                                                    width={18}
                                                    height={18}
                                                    alt="star"
                                                />
                                                <img
                                                    src={ratingStarImg}
                                                    width={18}
                                                    height={18}
                                                    alt="star"
                                                />
                                                <img
                                                    src={ratingStarImg}
                                                    width={18}
                                                    height={18}
                                                    alt="star"
                                                />
                                            </div>
                                            <h3>5.0</h3>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur.
                                            Malesuada parturient placerat sit at
                                            fermentum. Feugiat sit facilisi aenean et
                                            venenatis maecenas tortor sit arcu.
                                        </p>
                                        <div className={styles.taskCardPrice}>
                                            <h2>₽ 32 000</h2>
                                            <h3>45 часов</h3>
                                        </div>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>
                    <section className={styles.profilePortfolio}>
                        <h2>Портфолио</h2>
                            <>
                                <ul className={styles.portfolioTasks}>
                                    <li>
                                        <img 
                                            src={noneImg} 
                                            width={284}
                                            height={160}
                                            alt="task image" 
                                        />
                                        <h2>Название выполненной работы или кейса</h2>
                                    </li>
                                    <li>
                                        <img 
                                            src={noneImg} 
                                            width={284}
                                            height={160}
                                            alt="task image" 
                                        />
                                        <h2>Название выполненной работы или кейса</h2>
                                    </li>
                                    <li>
                                        <img 
                                            src={noneImg} 
                                            width={284}
                                            height={160}
                                            alt="task image" 
                                        />
                                        <h2>Название выполненной работы или кейса</h2>
                                    </li>
                                    <li>
                                        <img 
                                            src={noneImg} 
                                            width={284}
                                            height={160}
                                            alt="task image" 
                                        />
                                        <h2>Название выполненной работы или кейса</h2>
                                    </li>
                                </ul>
                                <div className={styles.arrowBtns}>
                                    <button className={styles.prevBtn}>
                                        <img
                                            src={arrowImg}
                                            width={32}
                                            height={12}
                                            alt="arrow"
                                        />
                                    </button>
                                    <button className={styles.nextBtn}>
                                        <img
                                            src={arrowImg}
                                            width={33}
                                            height={12}
                                            alt="arrow"
                                        />
                                    </button>
                                </div>
                            </>
                    </section>
                    <section className={styles.profileReviews}>
                        <h2> Отзывы о фрилансере <span>(12)</span></h2>
                        <ul className={styles.reviewsList}>
                            <li>
                                <img 
                                    src={avatarImg}
                                    width={52}
                                    height={52}
                                    alt="profile avatar" 
                                />
                                <div className={styles.reviewsContentTitle}>
                                    <div>
                                        <h2>Имя Юзера</h2>
                                        <img 
                                            src={like}
                                            width={20}
                                            height={20}
                                            alt="like" 
                                        />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur. Faucibus gravida elit odio neque massa id nibh pellentesque. Lorem ipsum dolor sit amet consectetur. Faucibus gravida elit odio neque massa id nibh pellentesque. </p>
                                </div>
                            </li>
                            <li>
                                <img 
                                    src={avatarImg}
                                    width={52}
                                    height={52}
                                    alt="profile avatar" 
                                />
                                <div className={styles.reviewsContentTitle}>
                                    <div>
                                        <h2>Имя Юзера</h2>
                                        <img 
                                            src={like}
                                            width={20}
                                            height={20}
                                            alt="like" 
                                        />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur. Faucibus gravida elit odio neque massa id nibh pellentesque. Lorem ipsum dolor sit amet consectetur. Faucibus gravida elit odio neque massa id nibh pellentesque. </p>
                                </div>
                            </li>
                            <li>
                                <img 
                                    src={avatarImg}
                                    width={52}
                                    height={52}
                                    alt="profile avatar" 
                                />
                                <div className={styles.reviewsContentTitle}>
                                    <div>
                                        <h2>Имя Юзера</h2>
                                        <img 
                                            src={like}
                                            width={20}
                                            height={20}
                                            alt="like" 
                                        />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur. Faucibus gravida elit odio neque massa id nibh pellentesque. Lorem ipsum dolor sit amet consectetur. Faucibus gravida elit odio neque massa id nibh pellentesque. </p>
                                </div>
                            </li>
                            <li>
                                <img 
                                    src={avatarImg}
                                    width={52}
                                    height={52}
                                    alt="profile avatar" 
                                />
                                <div className={styles.reviewsContentTitle}>
                                    <div>
                                        <h2>Имя Юзера</h2>
                                        <img 
                                            src={like}
                                            width={20}
                                            height={20}
                                            alt="like" 
                                        />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur. Faucibus gravida elit odio neque massa id nibh pellentesque. Lorem ipsum dolor sit amet consectetur. Faucibus gravida elit odio neque massa id nibh pellentesque. </p>
                                </div>
                            </li>
                        </ul>
                        <button className={styles.showMoreReviews} onClick={() => setShowAllReviews((prev) => !prev)}>{!showAllReviews ? 'Показать ещё' : 'Скрыть отзывы'}</button>
                    </section>
                    <section className={styles.announcement}>
                        <h2>Объявления фрилансера</h2>
                        <ul className={styles.announcementList}>
                            <li>
                                <img 
                                    src={noneImg}
                                    width={284}
                                    height={160}
                                    alt="order image" 
                                />
                                <div className={styles.orderText}>
                                    <h2>Контекстная реклама любых видов под ключ</h2>
                                    <h3>от 1000₽</h3>
                                    <h4>Срок выполнения: от 48 часов</h4>
                                    <div className={styles.orderActions}>
                                        <Link to='#'>Подробнее</Link>
                                        <button>
                                            <img 
                                                src={toFavoriteImg}
                                                width={30}
                                                height={24} 
                                                alt="favorite" 
                                            />
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img 
                                    src={noneImg}
                                    width={284}
                                    height={160}
                                    alt="order image" 
                                />
                                <div className={styles.orderText}>
                                    <h2>Контекстная реклама любых видов под ключ</h2>
                                    <h3>от 1000₽</h3>
                                    <h4>Срок выполнения: от 48 часов</h4>
                                    <div className={styles.orderActions}>
                                        <Link to='#'>Подробнее</Link>
                                        <button>
                                            <img 
                                                src={purpleFavoriteImg}
                                                width={30}
                                                height={24} 
                                                alt="favorite" 
                                            />
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img 
                                    src={noneImg}
                                    width={284}
                                    height={160}
                                    alt="order image" 
                                />
                                <div className={styles.orderText}>
                                    <h2>Контекстная реклама любых видов под ключ</h2>
                                    <h3>от 1000₽</h3>
                                    <h4>Срок выполнения: от 48 часов</h4>
                                    <div className={styles.orderActions}>
                                        <Link to='#'>Подробнее</Link>
                                        <button>
                                            <img 
                                                src={toFavoriteImg}
                                                width={30}
                                                height={24} 
                                                alt="favorite" 
                                            />
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img 
                                    src={noneImg}
                                    width={284}
                                    height={160}
                                    alt="order image" 
                                />
                                <div className={styles.orderText}>
                                    <h2>Контекстная реклама любых видов под ключ</h2>
                                    <h3>от 1000₽</h3>
                                    <h4>Срок выполнения: от 48 часов</h4>
                                    <div className={styles.orderActions}>
                                        <Link to='#'>Подробнее</Link>
                                        <button>
                                            <img 
                                                src={toFavoriteImg}
                                                width={30}
                                                height={24} 
                                                alt="favorite" 
                                            />
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className={styles.arrowBtns}>
                            <button className={styles.prevBtn}>
                                <img
                                    src={arrowImg}
                                    width={32}
                                    height={12}
                                    alt="arrow"
                                />
                            </button>
                            <button className={styles.nextBtn}>
                                <img
                                    src={arrowImg}
                                    width={33}
                                    height={12}
                                    alt="arrow"
                                />
                            </button>
                        </div>
                    </section>
                </div>
            )
            : (
                <MyFreelancerProfile />
            )
            }
        </>
    );
}
