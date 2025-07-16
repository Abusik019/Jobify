import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import MyCustomerProfile from "../MyCustomerProfile";
import Modal from '../../components/Modal';

import avatarImg from "../../assets/images/onlineAvatar.png";
import universityImg from "../../assets/icons/university.svg";
import arrowImg from "../../assets/icons/arrowBlackLong.svg";
import like from '../../assets/icons/like.svg';
import verifyImg from '../../assets/icons/verifed.svg';
import rhombusImg from '../../assets/icons/whiteRhombus.svg';
import listImg from '../../assets/icons/list.svg';
import messageImg from "../../assets/icons/bigChat.svg";
import downloadImg from "../../assets/icons/download.svg";

const data = {
    desc: "4",
    education: "5",
    sphere: "6",
    reviews: "4",
}

export default function CustomerProfile() {
    const [isMyProfile, setIsMyProfile] = useState(true);
    const [isShowVerify, setIsShowVerify] = useState(false);
    const [resumeModal, setResumeModal] = useState(false);

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
                                                        Заказчик подтвердил свою личность
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
                                    <button onClick={() => setResumeModal(true)}>
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
                                        <h2>₽ 1600 </h2>
                                        <h3>Средний чек</h3>
                                    </div>
                                    <div>
                                        <h2>97 %</h2>
                                        <h3>Успешных сделок</h3>
                                    </div>
                                    <div>
                                        <h2>310</h2>
                                        <h3>Дней на бирже</h3>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.profileVerification}>
                                <h2>Верификация</h2>
                                <h3>Почта подтверждена</h3>
                            </div>
                            <div className={styles.asideBio}>
                                <h2>Сфера деятельности</h2>
                                <ul className={styles.profileSkills}>
                                    <li>Сфера</li>
                                    <li>Сфера</li>
                                    <li>Сфера</li>
                                    <li>Сфера</li>
                                </ul>
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
                                        <h3>Бакалавриат</h3>
                                        <h4>2020 - 2025</h4>
                                    </div>
                                </div>
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
                            <section className={styles.profileReviews}>
                                <h2>
                                    Отзывы <span>(12)</span>
                                </h2>
                                {data.reviews ? (
                                    <>
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
                                            src={messageImg}
                                            width={68}
                                            height={68} 
                                            alt="message" 
                                        />
                                        <p>У вас нет ни одного отзыва, а чтобы их получить, выполняйте задания</p>
                                    </div>
                                )}
                            </section>
                        </div>
                    </div>
                    <section className={styles.announcement}>
                        <div className={styles.announcementTitleBlock}>
                            <h2>Объявления заказчика</h2>
                        </div>
                        <ul className={styles.announcementList}>
                            <li>
                                <div>
                                    <h2>Выбранная тема</h2>
                                    <h3>2 декабря, 00:11</h3>
                                </div>
                                <h2>Контроль и консультирование менеджеров по техническим вопросам</h2>
                                <p>Нужен человек, способный и распологающий временем для контроля, консультирования и содействия менеджерам в части, касающейся технических вопросов по монтажу ворот и дверей</p>
                            </li>
                            <li>
                                <div>
                                    <h2>Выбранная тема</h2>
                                    <h3>2 декабря, 00:11</h3>
                                </div>
                                <h2>Контроль и консультирование менеджеров по техническим вопросам</h2>
                                <p>Нужен человек, способный и распологающий временем для контроля, консультирования и содействия менеджерам в части, касающейся технических вопросов по монтажу ворот и дверей</p>
                            </li>
                            <li>
                                <div>
                                    <h2>Выбранная тема</h2>
                                    <h3>2 декабря, 00:11</h3>
                                </div>
                                <h2>Контроль и консультирование менеджеров по техническим вопросам</h2>
                                <p>Нужен человек, способный и распологающий временем для контроля, консультирования и содействия менеджерам в части, касающейся технических вопросов по монтажу ворот и дверей</p>
                            </li>
                        </ul>
                    </section>
                    <Modal isOpen={resumeModal} onClose={() => setResumeModal(false)}>
                        <div className={styles.modalOverlay}>
                            <h2>Резюме заказчика</h2>
                            <p>Здесь собраны все резюме, которыми поделился заказчик</p>
                            <ul>
                                <li>
                                    <h2>Резюме1.pdf</h2>
                                    <Link to="#"><img src={downloadImg} width={20} height={20} alt="download" /></Link>
                                </li>
                                <li>
                                    <h2>Резюме1.pdf</h2>
                                    <Link to="#"><img src={downloadImg} width={20} height={20} alt="download" /></Link>
                                </li>
                                <li>
                                    <h2>Резюме1.pdf</h2>
                                    <Link to="#"><img src={downloadImg} width={20} height={20} alt="download" /></Link>
                                </li>
                            </ul>
                        </div>
                    </Modal>
                </div>
            )
            : (
                <MyCustomerProfile />
            )
            }
        </>
    );
}
