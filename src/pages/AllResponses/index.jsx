import styles from './style.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import energyImg from '../../assets/icons/energy.svg';
import freelancerImg from '../../assets/images/freelancer.png';
import arrowImg from "../../assets/icons/arrowBlackLong.svg";
import like from '../../assets/icons/like.svg';
import warnImg from '../../assets/icons/warning.svg';
import pigImg from '../../assets/icons/pig.svg';
import sandClockImg from '../../assets/icons/sandTimer.svg';

const mockResponses = [
    {
        id: 1,
        image: '../../../src/assets/images/freelancer.png',
        first_name: 'Жанна',
        last_name: 'Кондратьева',
        rating: '5.0',
        bio: 'Маркетолог-эксперт со стажем 14 лет практических работ',
        region: 'region',
        price: 1200,
        orderQuantity: 10,
        successOrders: 97,
        skills: ['навык', 'навык', 'навык', 'навык', 'навык', 'навык',]
    },
    {
        id: 2,
        image: '../../../src/assets/images/freelancer.png',
        first_name: 'Жанна',
        last_name: 'Кондратьева',
        rating: '5.0',
        bio: 'Маркетолог-эксперт со стажем 14 лет практических работ',
        region: 'region',
        price: 1200,
        orderQuantity: 10,
        successOrders: 97,
        skills: ['навык', 'навык', 'навык', 'навык', 'навык', 'навык',]
    },
    {
        id: 3,
        image: '../../../src/assets/images/freelancer.png',
        first_name: 'Жанна',
        last_name: 'Кондратьева',
        rating: '5.0',
        bio: 'Маркетолог-эксперт со стажем 14 лет практических работ',
        region: 'region',
        price: 1200,
        orderQuantity: 10,
        successOrders: 97,
        skills: ['навык', 'навык', 'навык', 'навык', 'навык', 'навык',]
    },
    {
        id: 4,
        image: '../../../src/assets/images/freelancer.png',
        first_name: 'Жанна',
        last_name: 'Кондратьева',
        rating: '5.0',
        bio: 'Маркетолог-эксперт со стажем 14 лет практических работ',
        region: 'region',
        price: 1200,
        orderQuantity: 10,
        successOrders: 97,
        skills: ['навык', 'навык', 'навык', 'навык', 'навык', 'навык',]
    },
    {
        id: 5,
        image: '../../../src/assets/images/freelancer.png',
        first_name: 'Жанна',
        last_name: 'Кондратьева',
        rating: '5.0',
        bio: 'Маркетолог-эксперт со стажем 14 лет практических работ',
        region: 'region',
        price: 1200,
        orderQuantity: 10,
        successOrders: 97,
        skills: ['навык', 'навык', 'навык', 'навык', 'навык', 'навык',]
    },
    {
        id: 6,
        image: '../../../src/assets/images/freelancer.png',
        first_name: 'Жанна',
        last_name: 'Кондратьева',
        rating: '5.0',
        bio: 'Маркетолог-эксперт со стажем 14 лет практических работ',
        region: 'region',
        price: 1200,
        orderQuantity: 10,
        successOrders: 97,
        skills: ['навык', 'навык', 'навык', 'навык', 'навык', 'навык',]
    },
    {
        id: 7,
        image: '../../../src/assets/images/freelancer.png',
        first_name: 'Жанна',
        last_name: 'Кондратьева',
        rating: '5.0',
        bio: 'Маркетолог-эксперт со стажем 14 лет практических работ',
        region: 'region',
        price: 1200,
        orderQuantity: 10,
        successOrders: 97,
        skills: ['навык', 'навык', 'навык', 'навык', 'навык', 'навык',]
    },
    {
        id: 8,
        image: '../../../src/assets/images/freelancer.png',
        first_name: 'Жанна',
        last_name: 'Кондратьева',
        rating: '5.0',
        bio: 'Маркетолог-эксперт со стажем 14 лет практических работ',
        region: 'region',
        price: 1200,
        orderQuantity: 10,
        successOrders: 97,
        skills: ['навык', 'навык', 'навык', 'навык', 'навык', 'навык',]
    },
]

export default function AllResponses() {
    const [activeResponse, setActiveResponse] = useState(null);

    return (
        <div className={styles.allResponses}>
            <h1>Дизайн логотипа для  кондитерской лавки </h1>
            <div className={styles.responsesContainer}>
                <div className={styles.resContent}>
                    <div className={styles.contentLeft}>
                        <input type="text" placeholder='Поиск'/>
                        <ul className={styles.contentResponses}>
                            {mockResponses.map(item => (
                                <li 
                                    key={item.id}
                                    onClick={() => setActiveResponse(item.id)} 
                                    style={{backgroundColor: item.id === activeResponse ? '#F2F2F2' : 'transparent'}}
                                >
                                    <div className={styles.bioBlock}>
                                        <img 
                                            src={item.image}
                                            width={53}
                                            height={53}
                                            alt="freelancer photo" 
                                            style={{borderRadius: '12px'}}
                                        />
                                        <div className={styles.bioBlockText}>
                                            <div>
                                                <h2>{item.first_name} {item.last_name}</h2>
                                                <span>{item.rating}</span>
                                                <button>
                                                    <img
                                                        src={energyImg}
                                                        width={14}
                                                        height={14} 
                                                        alt="energy" 
                                                    />
                                                </button>
                                            </div>
                                            <h2>{item.bio}</h2>
                                            <h3>{item.region}</h3>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.contentRight}>
                        <div className={styles.responseActions}>
                            <Link to='/chat'>Перейти в чат</Link>
                            <button><img src={warnImg} width={18} height={18} alt="warning" /></button>
                        </div>
                        <div className={styles.freelancerInfoWrapper}>
                            <div className={styles.freelancerInfo}>
                                <img 
                                    src={freelancerImg}
                                    width={58}
                                    height={58}
                                    alt="freelancer photo" 
                                    style={{borderRadius: '12px'}}
                                />
                                <div className={styles.freelancerBio}>
                                    <h2>Фрилансер</h2>
                                    <div>
                                        <h3>Жанна Кондратьева</h3>
                                        <span>5.0</span>
                                    </div>
                                    <h3>Регион</h3>
                                </div>
                            </div>
                            <h2>15 000 ₽</h2>
                        </div>
                        <div className={styles.freelancerBid}>
                            <h2>Заявка</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Risus odio ac tellus id quis ante. Eget pharetra sed quam tortor leo blandit. Ac iaculis turpis porttitor lectus sed. Sapien sit elementum pulvinar est vitae diam condimentum.
                                <br />
                                <br />
                                Ipsum non volutpat urna augue amet placerat gravida scelerisque risus. Ut tempor maecenas vestibulum elit at amet amet eget. Neque lorem lorem diam enim vitae dolor magna non sit. Pellentesque eget aliquam suspendisse lacus vitae arcu sem lacus. Eu vitae condimentum quisque non vulputate pharetra. Mi diam eu semper tellus a enim pulvinar. Tincidunt pharetra vel leo enim dictum amet amet quis pellentesque. Arcu at blandit non quis ipsum ipsum iaculis.
                            </p>
                        </div>
                        <ul className={styles.freelancerDetails}>
                            <li>
                                <div>
                                    <h2>Поэтапная оплата</h2>
                                    <h3>Согласен на поэтапную оплату</h3>
                                </div>
                                <img src={pigImg} width={20} height={20} alt="pig" />
                            </li>     
                            <li>
                                <div>
                                    <h2>Сроки</h2>
                                    <h3>Успеет выполнить к 12.03.2025 в 13:45</h3>
                                </div>
                                <img src={sandClockImg} width={20} height={20} alt="sand clock" />
                            </li>    
                        </ul>
                        <div className={styles.freelancerReviews}>
                            <h2>Отзывы о фрилансере</h2>
                            <ul className={styles.reviewsList}>
                                <li>
                                    <img
                                        src={freelancerImg}
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
                                            Lorem ipsum dolor sit amet
                                            consectetur. Faucibus gravida elit
                                            odio neque massa id nibh
                                            pellentesque. Lorem ipsum dolor sit
                                            amet consectetur. Faucibus gravida
                                            elit odio neque massa id nibh
                                            pellentesque.
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
                        </div>
                        <div className={styles.freelancerActions}>
                            <button className={styles.cancelResponse}>Отклонить отклик</button>
                            <Link to="#">Нанять фрилансера</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
