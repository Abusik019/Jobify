import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import avatarImg from "../../assets/images/freelancer.png";
import copyImg from "../../assets/icons/copy.svg";
import shareImg from "../../assets/icons/share.svg";
import mockImg from "../../assets/images/Rectangle 55.png";
import arrowImg from "../../assets/icons/arrowBlackLong.svg";
import smallArrowImg from "../../assets/icons/smallArrow.svg";
import trashImg from "../../assets/icons/blackTrash.svg";
import checkmarkImg from '../../assets/icons/checkmark.svg';

export default function MyCommercialAnnouncement() {
    const [isHideDesc, setIsHideDesc] = useState(false);
    const [isCopyLink, setIsCopyLink] = useState(false);

    function handleCopyClick() {
        const { textContent } = document.getElementById('copyText')
        navigator.clipboard.writeText(textContent)
            .then(() => {
                setIsCopyLink(true);
                setTimeout(() => {
                    setIsCopyLink(false);
                }, 3000);
            })
            .catch(err => console.error("Ошибка копирования: ", err));
    }

    return (
        <div className={styles.announcement}>
            <div className={styles.announcementContainer}>
                <div className={styles.announcementContent}>
                    <div className={styles.announcementTitleBlock}>
                        <h1>Название услуги</h1>
                        <div className={styles.taskInfo}>
                            <h2>Дата публикации: 21.12.2024</h2>
                            <h3>203</h3>
                        </div>
                        <div className={styles.authorInfo}>
                            <img
                                src={avatarImg}
                                width={58}
                                height={58}
                                alt="freelancer avatar"
                            />
                            <ul>
                                <li>Фрилансер</li>
                                <li>
                                    Жанна Кондратьева <span>5.0</span>
                                </li>
                                <li>Регион</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.announcementImagesBlock}>
                        <div className={styles.announcementImages}>
                            <img src={mockImg} alt="announcement image" />
                            <div>
                                <img src={mockImg} alt="announcement image" />
                                <img src={mockImg} alt="announcement image" />
                                <img src={mockImg} alt="announcement image" />
                                <img src={mockImg} alt="announcement image" />
                                <img src={mockImg} alt="announcement image" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.announcementDesc}>
                        <div className={styles.descTitleBlock}>
                            <h2>Описание задания</h2>
                            <button 
                                onClick={() => setIsHideDesc((prev) => !prev)}
                                style={{transform: isHideDesc ? 'rotate(0deg)' : 'rotate(180deg)'}}
                            >
                                <img src={smallArrowImg} width={20} height={20} alt="arrow" />
                            </button>
                        </div>
                        {!isHideDesc && 
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Risus odio
                                ac tellus id quis ante. Eget pharetra sed quam
                                tortor leo blandit. Ac iaculis turpis porttitor
                                lectus sed. Sapien sit elementum pulvinar est vitae
                                diam condimentum.
                                <br />
                                Ipsum non volutpat urna augue amet placerat gravida
                                scelerisque risus. Ut tempor maecenas vestibulum
                                elit at amet amet eget. Neque lorem lorem diam enim
                                vitae dolor magna non sit. Pellentesque eget aliquam
                                suspendisse lacus vitae arcu sem lacus. Eu vitae
                                condimentum quisque non vulputate pharetra. Mi diam
                                eu semper tellus a enim pulvinar. Tincidunt pharetra
                                vel leo enim dictum amet amet quis pellentesque.
                                Arcu at blandit non quis ipsum ipsum iaculis.
                                Aliquam tortor massa duis sit hendrerit viverra
                                aliquam consequat. Massa diam in donec nec commodo
                                quis.
                                <br />
                                Velit tincidunt sem sed vel potenti quisque
                                fringilla. Rhoncus praesent sapien pulvinar
                                ullamcorper sapien quam enim arcu habitasse. Feugiat
                                vestibulum lacus sed donec suscipit vulputate non.
                                Cursus urna nibh erat risus enim. Est ultricies
                                scelerisque mauris euismod. Aliquet lorem tellus
                                sollicitudin sit semper sit viverra eu magnis.
                                Ridiculus odio tincidunt ac sit aliquam adipiscing
                                eu malesuada est. Sit egestas arcu metus sit urna.
                                Aenean cursus molestie posuere convallis scelerisque
                                libero metus. Feugiat arcu molestie gravida nec sem
                                magna odio a etiam. Aliquam nisl et quam
                                pellentesque.
                            </p>
                        }
                    </div>
                    <div className={styles.announcementFiles}>
                        <h2>Вложения</h2>
                        <ul>
                            <li>document.docx</li>
                            <li>document.docx</li>
                            <li>document.docx</li>
                        </ul>
                    </div>
                    <div className={styles.announcementCategory}>
                        <h2>Категория объявления</h2>
                        <div>Графический дизайн</div>
                    </div>
                    <div className={styles.announcementQuestions}>
                        <h2>Частые вопросы</h2>
                        <ul>
                            <li>
                                <h2>Lorem ipsum dolor sit amet consectetur?</h2>
                                <h3>Lorem ipsum dolor sit amet consectetur. Odio adipiscing rutrum gravida tortor senectus.</h3>
                            </li>
                            <li>
                                <h2>Lorem ipsum dolor sit amet consectetur?</h2>
                                <h3>Lorem ipsum dolor sit amet consectetur. Odio adipiscing rutrum gravida tortor senectus.</h3>
                            </li>
                            <li>
                                <h2>Lorem ipsum dolor sit amet consectetur?</h2>
                                <h3>Lorem ipsum dolor sit amet consectetur. Odio adipiscing rutrum gravida tortor senectus.</h3>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.profilePortfolio}>
                        <h2>Портфолио</h2>
                        <ul className={styles.portfolioTasks}>
                            <li>
                                <img src={mockImg} alt="task image" />
                            </li>
                            <li>
                                <img src={mockImg} alt="task image" />
                            </li>
                            <li>
                                <img src={mockImg} alt="task image" />
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
                    </div>
                    <div className={styles.announcementOtherTasks}>
                        <div>
                            <h2>Другие объявления фрилансера</h2>
                            <Link to="#">Смотреть все</Link>
                        </div>
                        <ul>
                            <li>
                                <Link to="#">
                                    Lorem ipsum dolor sit amet consec eu tellus
                                    dui eu non
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    Lorem ipsum dolor sit amet consec eu tellus
                                    dui eu non
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    Lorem ipsum dolor sit amet consec eu tellus
                                    dui eu non
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.announcementSimilarTasks}>
                        <div>
                            <h2>Похожие объявления на Бирже</h2>
                            <Link to="#">Смотреть все</Link>
                        </div>
                        <ul>
                            <li>
                                <Link to="#">
                                    Lorem ipsum dolor sit amet consec eu tellus
                                    dui eu non
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    Lorem ipsum dolor sit amet consec eu tellus
                                    dui eu non
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    Lorem ipsum dolor sit amet consec eu tellus
                                    dui eu non
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.linkToTask}>
                        <h2>Ссылка на задание</h2>
                        <div className={styles.linkToTaskActions}>
                            <button id="copyText">https://music.yandex.ru/artist/54254</button>
                            <button 
                                onClick={handleCopyClick} 
                                style={{
                                    backgroundColor: isCopyLink ? '#EAEAEA' : 'transparent',
                                    border: isCopyLink && 'none'
                                }}
                            >
                                <img src={!isCopyLink ? copyImg : checkmarkImg} width={24} height={24} alt="copy" />
                            </button>
                            <button>
                                <img
                                    src={shareImg}
                                    width={24}
                                    height={24}
                                    alt="share"
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.announcementAside}>
                    <button className={styles.responseBtn}>
                        Редактировать
                    </button>
                    <div className={styles.asideBtns}>
                        <button>В черновики</button>
                        <button>
                            <img 
                                src={trashImg}
                                width={20}
                                height={20} 
                                alt="trash" 
                            />
                        </button>
                    </div>
                    <div className={styles.aboutClient}>
                        <h2>О фрилансере</h2>
                        <h3>
                            Россия, г. Казань
                            <br />
                            21:00
                        </h3>
                        <ul className={styles.clientInfo}>
                            <li>Почта подтверждена</li>
                            <li>Способ оплаты добавлен</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
