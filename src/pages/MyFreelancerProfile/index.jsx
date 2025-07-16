import styles from "./style.module.css";
import { useState } from "react";
import { GradientText } from '../../components/GradientText/index';
import { Link } from 'react-router-dom';

import avatarImg from "../../assets/images/onlineAvatar.png";
import universityImg from "../../assets/icons/university.svg";
import arrowImg from "../../assets/icons/arrowBlackLong.svg";
import like from "../../assets/icons/like.svg";
import verifyImg from "../../assets/icons/verifed.svg";
import rhombusImg from "../../assets/icons/whiteRhombus.svg";
import listImg from "../../assets/icons/list.svg";
import editImg from "../../assets/icons/edit2.svg";
import plusImg from "../../assets/icons/plusWithBg.svg";
import messageImg from "../../assets/icons/bigChat.svg";
import boxImg from "../../assets/icons/box.svg";
import folderImg from "../../assets/icons/folder.svg";
import certificateImg from "../../assets/icons/cup.svg";
import bagImg from "../../assets/icons/bigBag.svg";
import menu from "../../assets/icons/order-menu.svg";
import ratingStarImg from "../../assets/icons/ratingStar.svg";
import mockImg from '../../assets/images/mockGuide.png';
import noneImg from '../../assets/images/mockLi.png';

const data = {
    first_name: "1",
    last_name: "1",
    location: "1",
    stats: "1",
    isEmail: false,
    desc: "1",
    education: "1",
    sphere: "1",
    experience: "1",
    tasks: "1",
    reviews: "1",
    announcements: "1",
    certficates: "1",
    portfolio: "1"
}

export default function MyFreelancerProfile() {
    const [isShowVerify, setIsShowVerify] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    return (
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
                                    <h2>{(data.first_name && data.last_name) ? "Жанна Кондратьева" : "FirstName LastName"}</h2>
                                    <button
                                        onMouseEnter={() =>
                                            setIsShowVerify(true)
                                        }
                                        onMouseLeave={() =>
                                            setIsShowVerify(false)
                                        }
                                    >
                                        <img
                                            src={verifyImg}
                                            width={22}
                                            height={22}
                                            alt="verify"
                                        />
                                    </button>
                                    {isShowVerify && (
                                        <div className={styles.isVerify}>
                                            <h2>Профиль верифицирован</h2>
                                            <div>
                                                Фрилансер подтвердил свою
                                                личность
                                                <img
                                                    src={rhombusImg}
                                                    width={24}
                                                    height={24}
                                                    alt="rhombus"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <h3>{data.location ? "Россия, Казань" : "Город, Страна - mm:hh"}</h3>
                            </div>
                        </div>
                        <div className={styles.profileActions}>
                            <div>
                                <button>Редактировать</button>
                                <button>Публичный вид</button>
                            </div>
                            <button>
                                <img
                                    src={listImg}
                                    width={20}
                                    height={20}
                                    alt="list"
                                />
                                <span>Мои резюме</span>
                            </button>
                        </div>
                        {data.stats && (
                            <div className={styles.profileStats}>
                                <div>
                                    <h2>₽ 1600</h2>
                                    <h3>Средний чек</h3>
                                </div>
                                <div>
                                    <h2>97 %</h2>
                                    <h3>Успешных заказов</h3>
                                </div>
                                <div>
                                    <h2>310</h2>
                                    <h3>Дней на бирже</h3>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={styles.profileVerification}>
                        <h2>Верификация</h2>
                        {data.isEmail ? <h3>Почта подтверждена</h3> : (
                            <div className={styles.notVerification}>
                                <h3>Подтвердить почту</h3>
                                <img 
                                    src={arrowImg} 
                                    width={32}
                                    height={12}
                                    alt="arrow"
                                />
                            </div>
                        )}
                    </div>
                    <div className={styles.profileAsideInfo}>
                        <h2>Образование</h2>
                        <div className={styles.profileEducationContent}>
                            {data.education ? (
                                <>
                                    <img
                                        src={universityImg}
                                        width={28}
                                        height={28}
                                        alt="university icon"
                                    />
                                    <div>
                                        <h2>ВШЭ</h2>
                                        <h3>Бакалавриат</h3>
                                        <h4>2020 - 2025</h4>
                                    </div>
                                </>
                            ) : (
                                <div className={styles.notEducation}>
                                    <h2>Вы еще не указали ваше образование</h2>
                                    <Link to="#"><GradientText text="Указать образование"/></Link>
                                </div>
                            )}
                        </div>
                        <h2>Навыки</h2>
                        {data.sphere ? (
                            <ul className={styles.profileSkills}>
                                <li>Сфера</li>
                                <li>Сфера</li>
                                <li>Сфера</li>
                                <li>Сфера</li>
                            </ul>
                        ) : (
                            <div className={styles.notSpheres}>
                                <h2>Пока нет информации о ваших навыках</h2>
                                <Link to="#"><GradientText text="Указать навыки"/></Link>
                            </div>
                        )}
                        <div className={styles.jobExperience}>
                            <h2>Опыт работы</h2>
                            {data.experience && (
                                <ul className={styles.experienceList}>
                                    <li>
                                        <h2>Специалист по кибербезопасности</h2>
                                        <h3>05.12.24 - сейчас</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur. Massa et id faucibus id fermentum.
                                        </p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className={styles.jobExperience}>
                            <h2>Другой опыт работы</h2>
                            {data.experience && (
                                <ul className={styles.experienceList}>
                                    <li>
                                        <h2>Специалист по кибербезопасности</h2>
                                        <h3>05.12.24 - сейчас</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur. Massa et id faucibus id fermentum.
                                        </p>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </aside>
                <div className={styles.profileContent}>
                    <section className={styles.profileBio}>
                        {data.desc ? (
                        <>
                            <h2>Описание</h2>
                            <h3>
                                Lorem ipsum dolor sit amet consectetur. Sit diam
                                imperdiet elit proin non cursus ridiculus. Nam
                                blandit egestas malesuada imperdiet facilisis in non
                                sit. Dictum vel nec metus morbi.
                                <br />
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
                        </>
                        ) : (
                            <>
                                <h4>Пока это поле пустует, расскажите немного о себе и своих увлечениях!</h4>
                                <Link to="#"><GradientText text="Рассказать о себе"/></Link>
                            </>
                        )}
                    </section>
                    {!isEdit && 
                        <section className={styles.responseConsultation}>
                            <div className={styles.consultationTitleBlock}>
                                <h2>Запросить консультацию</h2>
                                <div>
                                    <button>
                                        <img 
                                            src={editImg} 
                                            width={24}
                                            height={24}
                                            alt="edit" 
                                        />
                                    </button>
                                    <button>
                                        <img 
                                            src={plusImg} 
                                            width={24}
                                            height={24}
                                            alt="plus" 
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className={styles.consultationCard}>
                                <button>
                                    <img src={menu} width={18} height={4} alt="menu"/>
                                </button>
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
                    }
                    <section className={styles.profileTasks}>
                        <h2>Выполненные задания</h2>
                        {data.tasks ? (
                            <>
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
                        ) : (
                            <div className={styles.notReviews}>
                                <img 
                                    src={folderImg}
                                    width={68}
                                    height={68} 
                                    alt="message" 
                                />
                                <p>Выполненных работ пока что нет</p>
                            </div>
                        )}
                    </section>
                    <section className={styles.profileCertificates}>
                        <div className={styles.certificatesTitleBlock}>
                            <h2>Сертификаты</h2>
                            {isEdit &&  
                                <div>
                                    <button>
                                        <img 
                                            src={editImg} 
                                            width={24}
                                            height={24}
                                            alt="edit" 
                                        />
                                    </button>
                                    <button>
                                        <img 
                                            src={plusImg} 
                                            width={24}
                                            height={24}
                                            alt="plus" 
                                        />
                                    </button>
                                </div>
                            }
                        </div>
                        {data.certficates ? (
                            <>
                                <ul className={styles.certficatesList}>
                                    <li>
                                        <h2>Победитель хакатона</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur. Malesuada parturient placerat sit at fermentum. Feugiat sit facilisi aenean et venenatis maecenas tortor sit arcu.</p>
                                        <h3>dd:mm:yy</h3>
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
                        ) : (
                            <div className={styles.notReviews}>
                                <img 
                                    src={certificateImg}
                                    width={68}
                                    height={68} 
                                    alt="box" 
                                />
                                <p>Это поле пустует, но вы можете <Link to="#"><GradientText text="добавить свои сертификаты"/></Link> уже сейчас</p>
                            </div>
                        )}
                    </section>
                    {!data.portfolio && (
                        <section className={styles.profilePortfolio}>
                            <div className={styles.portfolioTitleBlock}>
                                <h2>Портфолио</h2>
                                {isEdit &&  
                                    <div>
                                        <button>
                                            <img 
                                                src={editImg} 
                                                width={24}
                                                height={24}
                                                alt="edit" 
                                            />
                                        </button>
                                        <button>
                                            <img 
                                                src={plusImg} 
                                                width={24}
                                                height={24}
                                                alt="plus" 
                                            />
                                        </button>
                                    </div>
                                }
                            </div>
                            <div className={styles.notReviews}>
                                <img 
                                    src={bagImg}
                                    width={68}
                                    height={68} 
                                    alt="box" 
                                />
                                <p>Вы не загрузили ни одной работы, но вы можете <Link to="#"><GradientText text="сделать это"/></Link> уже сейчас</p>
                            </div>
                        </section>
                    )}
                </div>
            </div>
            {data.portfolio && (
                <section className={styles.profilePortfolio}>
                    <div className={styles.portfolioTitleBlock}>
                        <h2>Портфолио</h2>
                        {isEdit &&  
                            <div>
                                <button>
                                    <img 
                                        src={editImg} 
                                        width={24}
                                        height={24}
                                        alt="edit" 
                                    />
                                </button>
                                <button>
                                    <img 
                                        src={plusImg} 
                                        width={24}
                                        height={24}
                                        alt="plus" 
                                    />
                                </button>
                            </div>
                        }
                    </div>
                    <ul className={styles.portfolioList}>
                        <li>
                            <img src={mockImg} alt="case image" />
                            <h2>Название выполненной работы или кейса</h2>
                        </li>
                        <li>
                            <img src={mockImg} alt="case image" />
                            <h2>Название выполненной работы или кейса</h2>
                        </li>
                        <li>
                            <img src={mockImg} alt="case image" />
                            <h2>Название выполненной работы или кейса</h2>
                        </li>
                        <li>
                            <img src={mockImg} alt="case image" />
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
                </section>
            )}
            <section className={styles.profileReviews}>
                <h2>
                    Ваши отзывы <span>(0)</span>
                </h2>
                {data.reviews ? (
                    <div className={styles.reviewsListWrapper}>
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
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Faucibus
                                        gravida elit odio neque massa id nibh
                                        pellentesque. Lorem ipsum dolor sit amet
                                        consectetur. Faucibus gravida elit odio neque
                                        massa id nibh pellentesque.
                                    </p>
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
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Faucibus
                                        gravida elit odio neque massa id nibh
                                        pellentesque. Lorem ipsum dolor sit amet
                                        consectetur. Faucibus gravida elit odio neque
                                        massa id nibh pellentesque.
                                    </p>
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
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Faucibus
                                        gravida elit odio neque massa id nibh
                                        pellentesque. Lorem ipsum dolor sit amet
                                        consectetur. Faucibus gravida elit odio neque
                                        massa id nibh pellentesque.
                                    </p>
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
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Faucibus
                                        gravida elit odio neque massa id nibh
                                        pellentesque. Lorem ipsum dolor sit amet
                                        consectetur. Faucibus gravida elit odio neque
                                        massa id nibh pellentesque.
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <button className={styles.showMoreReviews}>Показать все</button>
                    </div>
                ) : (
                    <div className={styles.notReviews}>
                        <img 
                            src={messageImg}
                            width={68}
                            height={68} 
                            alt="message" 
                        />
                        <p>У вас нет ни одного отзыва, а чтобы их получить, выполняйте задания</p>
                    </div>
                )}
            </section>
            <section className={styles.announcement}>
                <div className={styles.announcementTitleBlock}>
                    <h2>Ваши объявления</h2>
                    {isEdit &&  
                        <div>
                            <button>
                                <img 
                                    src={editImg} 
                                    width={24}
                                    height={24}
                                    alt="edit" 
                                />
                            </button>
                            <button>
                                <img 
                                    src={plusImg} 
                                    width={24}
                                    height={24}
                                    alt="plus" 
                                />
                            </button>
                        </div>
                    }
                </div>
                {data.announcements ? (
                    <>
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
                                    <Link to='#'>Подробнее</Link>
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
                                    <Link to='#'>Подробнее</Link>
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
                                    <Link to='#'>Подробнее</Link>
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
                                    <Link to='#'>Подробнее</Link>
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
                    </>
                ): (
                    <div className={styles.notReviews}>
                        <img 
                            src={boxImg}
                            width={78}
                            height={78} 
                            alt="box" 
                        />
                        <p>Вы не выложили ни одного объявления, но можете <Link to="#"><GradientText text="сделать это сейчас"/></Link></p>
                    </div>
                )}
            </section>
        </div>
    );
}
