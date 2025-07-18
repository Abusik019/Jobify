import styles from './style.module.css';
import { Navbar } from '../../components/Navbar';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubCategoryId } from '../../redux/slices/categorySlice';

import bgImg from '../../assets/images/lending-bg-item.png';
import videoImg from '../../assets/images/video.png';
import itImg from '../../assets/icons/ITicon.svg';
import smmImg from '../../assets/icons/smm.svg';
import audioImg from '../../assets/icons/video.svg';
import businessImg from '../../assets/icons/business.svg';
import seoImg from '../../assets/icons/seo.svg';
import designImg from '../../assets/icons/design.svg';
import textsImg from '../../assets/icons/texts.svg';
import linkArrowImg from '../../assets/icons/linkArrow.svg';
import switch1Img from '../../assets/images/lending-switch1.png';
import switch2Img from '../../assets/images/lending-switch2.png';
import switch3Img from '../../assets/images/lending-switch3.png';
import switch4Img from '../../assets/images/lending-switch4.png';
import jobifyImg from '../../assets/icons/logoJobify.svg';
import vkImg from '../../assets/icons/blackVK.svg';
import tgImg from '../../assets/icons/blackTG.svg';
import igImg from '../../assets/icons/blackIG.svg';
import course1Img from '../../assets/images/course1.png';
import course2Img from '../../assets/images/course2.png';
import course3Img from '../../assets/images/course3.png';

const switchData = [
    {
        id: 1,
        title: 'Новые функции платформы',
        desc: 'Мы обновили биржу — добавили встроенный чат, быстрые переводы и систему гарантии сделок, а также поддержку пользователей',
    },
    {
        id: 2,
        title: 'Увеличение скорости выполнения заданий',
        desc: 'Благодаря использованию нейросетей исполнители нашего сервиса смогут выполнить задания за пару часов, вместо того чтобы ждать 2-3 дня, как это делают конкуренты',
    },
    {
        id: 3,
        title: 'Адекватная ценовая политика',
        desc: 'Комииссия сервиса будет значительно меньше, чем у конкурентов. Начинаться с 15% от суммы заказа и уменьшаться в зависимости от количества успешно выполненных работ',
    },
    {
        id: 4,
        title: 'Оптимизация логики формирования рейтинга',
        desc: 'Формирование рейтинга будет базироваться на опыте человека, количестве качественных работ в портфолио, отзывах реальных клиентов',
    },
]

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: .7, y: 0, transition: { duration: 0.3 } }
};

export default function Lending() {
    const dispatch = useDispatch();
    const subcategories = useSelector((state) => state.category.subCategory);
    const token = useSelector((state) => state.auth.accessToken);

    const [activeItem, setActiveItem] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [role, setRole] = useState('freelancer');
    const [hoverItems, setHoverItems] = useState({
        it: {
            id: 2,
            hover: false
        },
        smm: {
            id: 5,
            hover: false
        },
        video: {
            id: 6,
            hover: false
        },
        business: {
            id: 7,
            hover: false
        },
        seo: {
            id: 4,
            hover: false
        },
        design: {
            id: 1,
            hover: false
        },
        text: {
            id: 3,
            hover: false
        },
    })
    const sectionRef = useRef(null);

    useEffect(() => {
        dispatch(fetchSubCategoryId());
    }, [dispatch]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 } 
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            setActiveItem(1)
        }
    }, [isVisible]);

    useEffect(() => {
        if (isVisible && activeItem !== null) {
            const timer = setTimeout(() => {
                setActiveItem((prev) => (prev !== 4 ? prev + 1 : null));
            }, 5000);
    
            return () => clearTimeout(timer);
        }
    }, [isVisible, activeItem]);

    function changeImageSource(){
        switch(activeItem){
            case 1:
                return switch1Img;
            case 2:
                return switch2Img;
            case 3:
                return switch3Img;
            case 4:
                return switch4Img;
            default:
                return switch1Img;
        }
    }

    function getSubcategoryByCategory(id){
        const newSubcategories = Boolean(Array.isArray(subcategories) && subcategories.length) && subcategories.filter((item) => item.categoryId === id);
        
        return newSubcategories.map(item => item.rusName).join(", ");
    }

    function handleMouseEnter(category){
        setHoverItems((prev) => ({
            ...prev,
            [category]: {
                ...prev[category],
                hover: true
            }
        }))
    }

    function handleMouseLeave(category){
        setHoverItems((prev) => ({
            ...prev,
            [category]: {
                ...prev[category],
                hover: false
            }
        }))
    }

    return (
        <div className={styles.lending}>
            <Navbar theme="dark"/>
            <main className={styles.main}> 
                <div className={styles.mainInfo}>
                    <div className={styles.implementAI}>Внедряем ИИ</div>
                    <h2>Найдите идеальную работу или специалиста с Jobify!</h2>
                    <p>Платформа для поиска фриланс-заказов и исполнителей с удобным интерфейсом и надежными инструментами</p>
                    <div className={styles.mainBtns}>
                        <Link to={token ? "/list-orders" : "/registration"}>Присоединиться</Link>
                        {/* <button>Есть вопросы?</button> */}
                    </div>
                </div>
                <ul className={styles.advantages}>
                    <li>
                        <h2><span>Удобный</span> сервис</h2>
                        <p>Интуитивно понятно и ненавязчиво</p>
                    </li>
                    <li>
                        <h2><span>Быстрый</span> поиск</h2>
                        <p>Поиск клиентов и исполнителей за считаные минуты</p>
                    </li>
                    <li>
                        <h2>У нас нет подписок</h2>
                        <p>Рейтинг зависит от портфолио и успешно выполненных заказов</p>
                    </li>
                    <li>
                        <h2><span>Защита</span> всех сделок</h2>
                        <p>Мы уделили особое внимание вашей безопасности</p>
                    </li>
                </ul>
            </main>
            <motion.section
                className={styles.steps}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <img src={bgImg} alt="bg item" />
                <div className={styles.stepsContent}>
                    <div className={styles.stepsSwitchRole}>
                        <h2>Как мне находить исполнителей?</h2>
                        <div>
                            <button 
                                onClick={() => setRole('freelancer')}
                                style={{
                                    backgroundColor: role === 'freelancer' ? '#fff' : 'transparent',
                                    color: role === 'freelancer' ? '#000' : '#fff'
                                }}
                            >Я фрилансер</button>
                            <button 
                                onClick={() => setRole('customer')}
                                style={{
                                    backgroundColor: role === 'customer' ? '#fff' : 'transparent',
                                    color: role === 'customer' ? '#000' : '#fff'
                                }}
                            >Я заказчик</button>
                        </div>
                    </div>
                    <ul className={styles.stepsList}>
                        <li>
                            <h2>Шаг №1</h2>
                            <p>{role === 'customer' ? "Создайте задание" : "Найдите подходящий проект"}</p>
                        </li>
                        <li>
                            <h2>Шаг №2</h2>
                            <p>{role === 'customer' ? "Выберите исполнителя" : "Откликнитесь на заказ"}</p>
                        </li>
                        <li>
                            <h2>Шаг №3</h2>
                            <p>{role === 'customer' ? "Оплачивайте через безопасную сделку и получайте безупречный результат" : "Работайте и получайте оплату через безопасную сделку"}</p>
                        </li>
                    </ul>
                </div>
            </motion.section>
            <motion.section 
                className={styles.tutorial}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div className={styles.tutorialContent}>
                    <div className={styles.implementAI}>Что-то тут будет</div>
                    <h2>Туториал по работе на Jobify</h2>
                    <p>Мы обновили биржу — добавили встроенный чат, быстрые переводы и систему гарантии сделок, а также поддержку пользователей</p>
                    <Link to={token ? '/list-orders' : '/registration'}>Присоединиться</Link>
                </div>
                <img 
                    src={videoImg}
                    width={652}
                    height={410}
                    alt='video'
                />
            </motion.section>
            <motion.section
                className={styles.links}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <ul className={styles.linksList}>
                    <li 
                        className={`${styles.link} ${hoverItems.it.hover ? styles.hover : ''}`}
                        onMouseEnter={() => handleMouseEnter('it')}
                        onMouseLeave={() => handleMouseLeave('it')}
                    >
                        <Link to="/list-orders?category=developmentAndIT"> 
                            <h2>Разработка и IT</h2>
                            {hoverItems.it.hover ? (
                                <motion.p 
                                    initial="hidden"
                                    animate="visible"
                                    variants={textVariants}
                                >
                                    {getSubcategoryByCategory(hoverItems.it.id)}
                                </motion.p>
                                ) : (
                                <div>
                                    <img src={itImg} width={78} height={78} alt="it" />
                                    <Link to="#"><img src={linkArrowImg} width={24} height={24} alt="link" /></Link>
                                </div>
                            )}
                        </Link>
                    </li>
                    <li
                        className={`${styles.link} ${hoverItems.smm.hover ? styles.hover : ''}`}
                        onMouseEnter={() => handleMouseEnter('smm')}
                        onMouseLeave={() => handleMouseLeave('smm')}
                    >
                        <Link to="/list-orders?category=smmAndAdvertising">
                            <h2>SMM и реклама</h2>
                            {hoverItems.smm.hover ? (
                                <motion.p 
                                    initial="hidden"
                                    animate="visible"
                                    variants={textVariants}
                                >
                                    {getSubcategoryByCategory(hoverItems.smm.id)}
                                </motion.p>
                                ) : (
                                <div>
                                    <img src={smmImg} width={92} height={68} alt="smm" />
                                    <Link to="#"><img src={linkArrowImg} width={24} height={24} alt="link" /></Link>
                                </div>
                            )}
                        </Link>
                    </li>
                    <li
                        className={`${styles.link} ${hoverItems.video.hover ? styles.hover : ''}`}
                        onMouseEnter={() => handleMouseEnter('video')}
                        onMouseLeave={() => handleMouseLeave('video')}
                    >
                        <Link to="/list-orders?category=videoAndAudio">
                            <h2>Видео и аудио</h2>
                            {hoverItems.video.hover ? (
                                <motion.p
                                    initial="hidden"
                                    animate="visible"
                                    variants={textVariants}
                                >
                                    {getSubcategoryByCategory(hoverItems.video.id)}
                                </motion.p>
                            ) : (
                                <div>
                                    <img src={audioImg} width={100} height={100} alt="video" />
                                    <Link to="#"><img src={linkArrowImg} width={24} height={24} alt="link" /></Link>
                                </div>
                            )}
                        </Link >
                    </li>
                    <li
                        className={`${styles.link} ${hoverItems.business.hover ? styles.hover : ''}`}
                        onMouseEnter={() => handleMouseEnter('business')}
                        onMouseLeave={() => handleMouseLeave('business')}
                    >
                        <Link to="/list-orders?category=business">
                            <h2>Бизнес и обучение</h2>
                            {hoverItems.business.hover ? (
                                <motion.p
                                    initial="hidden"
                                    animate="visible"
                                    variants={textVariants}
                                >
                                    {getSubcategoryByCategory(hoverItems.business.id)}
                                </motion.p>
                            ) : (
                                <div>
                                    <img src={businessImg} width={97} height={79} alt="business" />
                                    <Link to="#"><img src={linkArrowImg} width={24} height={24} alt="link" /></Link>
                                </div>
                            )}
                        </Link>
                    </li>
                    <li
                        className={`${styles.link} ${hoverItems.seo.hover ? styles.hover : ''}`}
                        onMouseEnter={() => handleMouseEnter('seo')}
                        onMouseLeave={() => handleMouseLeave('seo')}
                    >
                        <Link to="/list-orders?category=seo">
                            <h2>SEO и аналитика</h2>
                            {hoverItems.seo.hover ? (
                                <motion.p
                                    initial="hidden"
                                    animate="visible"
                                    variants={textVariants}
                                >
                                    {getSubcategoryByCategory(hoverItems.seo.id)}
                                </motion.p>
                            ) : (
                                <div>
                                    <img src={seoImg} width={100} height={100} alt="seo" style={{opacity: '.1'}}/>
                                    <Link to="#"><img src={linkArrowImg} width={24} height={24} alt="link" /></Link>
                                </div>
                            )}
                        </Link>
                    </li>
                    <li
                        className={`${styles.link} ${hoverItems.design.hover ? styles.hover : ''}`}
                        onMouseEnter={() => handleMouseEnter('design')}
                        onMouseLeave={() => handleMouseLeave('design')}
                    >
                        <Link to="/list-orders?category=design">
                            <h2>Дизайн</h2>
                            {hoverItems.design.hover ? (
                                <motion.p
                                    initial="hidden"
                                    animate="visible"
                                    variants={textVariants}
                                >
                                    {getSubcategoryByCategory(hoverItems.design.id)}
                                </motion.p>
                            ) : (
                                <div>
                                    <img src={designImg} width={100} height={100} alt="design" />
                                    <Link to="#"><img src={linkArrowImg} width={24} height={24} alt="link" /></Link>
                                </div>
                            )}
                        </Link>
                    </li>
                    <li
                        className={`${styles.link} ${hoverItems.text.hover ? styles.hover : ''}`}
                        onMouseEnter={() => handleMouseEnter('text')}
                        onMouseLeave={() => handleMouseLeave('text')}
                    >
                        <Link to="/list-orders?category=textsAndTranslations">
                            <h2>Тексты и переводы</h2>
                            {hoverItems.text.hover ? (
                                <motion.p
                                    initial="hidden"
                                    animate="visible"
                                    variants={textVariants}
                                >
                                    {getSubcategoryByCategory(hoverItems.text.id)}
                                </motion.p>
                            ) : (
                                <div>
                                    <img src={textsImg} width={100} height={100} alt="texts" />
                                    <Link to="#"><img src={linkArrowImg} width={24} height={24} alt="link" /></Link>
                                </div>
                            )}
                        </Link>
                    </li>
                </ul>
            </motion.section>
            <motion.section
                ref={sectionRef}
                className={styles.switchInfo}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <img src={changeImageSource()} width={474} height={531} alt="switch" />
                <ul className={styles.switchInfoList}>
                    {switchData.map(item => (
                        <li key={item.id} className={`${activeItem === item.id ? styles.active : ''}`}>
                            <div onClick={() => setActiveItem(item.id)}></div>
                            <div>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </motion.section>
            <motion.section
                className={styles.course}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <h2>Курс по искусственному интелекту</h2>
                <p>Наш курс по искусственному интеллекту (ИИ) создан специально для фрилансеров, которые хотят зарабатывать больше и автоматизировать рутинные задачи.</p>
                <Link to="https://stepik.org/227990" target='_blank'>Перейти к курсу</Link>
                <img className={styles.course1} src={course1Img} alt="course example" />
                <img className={styles.course2} src={course2Img} alt="course example" />
                <img className={styles.course3} src={course3Img} alt="course example" />
            </motion.section>
            <motion.section
                className={styles.getFirstOffer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <h2><span>Ищешь работу?</span> Возьми свой первый заказ!</h2>
                <p>Начните работать с Jobify уже сегодня!</p>
                <input type="text" placeholder='Что будем искать?'/>
                <button>Найти работу</button>
            </motion.section>
            <motion.footer
                className={styles.footer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div className={styles.footerTop}>
                    <div className={styles.footerLogoBlock}>
                        <img src={jobifyImg} width={119} height={39} alt="Jobify logo" />
                        <h2>Будущее начинается с тебя!</h2>
                    </div>
                    <div className={styles.foooterLinks}>
                        <div>
                            <Link to="https://m.vk.com/coreinno"><img src={vkImg} width={24} height={24} alt="vk" /></Link>
                            <Link to="https://t.me/+pTuTWwR-Rg02ZGIy"><img src={tgImg} width={24} height={24} alt="tg" /></Link>
                            <Link to="https://www.instagram.com/core_inno?igsh=d2M3Z3RteHIwa3Bm"><img src={igImg} width={24} height={24} alt="ig" /></Link>
                        </div>
                        <h2>core.inno@mail.ru</h2>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <h2>© Jobify 2025 — Все права защищены</h2>
                    <div>
                        <Link target='_blank' to="https://docs.google.com/document/d/10JwPGD_cqI6uq_3lviSoyrbKJ4Pxwgj3/edit?usp=sharing&ouid=105424839330593201083&rtpof=true&sd=true">Пользовательское соглашение</Link>
                        <Link target='_blank' to="https://docs.google.com/document/d/1t5rbYrRGtbRtd5YVwtdx14RJ6f5vZMWB/edit?usp=sharing&ouid=105424839330593201083&rtpof=true&sd=true">Политика конфиденциальности</Link>
                    </div>
                </div>
            </motion.footer>
        </div>
    )
}


{/* <section className={styles.stats}>
    <ul className={styles.statsList}>
        <li>
            <h2>1000+</h2>
            <p>Выполненных заказов</p>
        </li>
        <li>
            <h2>100К+</h2>
            <p>Посещений в месяц</p>
        </li>
        <li>
            <h2>15К+</h2>
            <p>Активных пользователей</p>
        </li>
        <li>
            <h2>99.9%</h2>
            <p>Успешных заказов</p>
        </li>
    </ul>
</section> */}