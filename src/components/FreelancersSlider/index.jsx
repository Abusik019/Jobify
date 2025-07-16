import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import freelancer from "../../assets/images/freelancer.png";
import toFavourite from "../../assets/icons/toFavourite.svg";
import arrow from "../../assets/icons/arrowBlackLong.svg";

const mockFreelancers = [
    ...Array(10)
        .fill(null)
        .map((_, index) => ({
            id: index + 1,
            name: "Жанна Кондратьева",
            image: `${freelancer}`,
            region: "Регион",
            description:
                "Маркетолог-эксперт со стажем 14 лет практических работ",
            totalOrders: "17",
            rating: "5.0",
            price: "1200",
            skills: ["навык", "навык", "навык", "навык", "навык", "навык"],
        })),
];

export default function FreelancersSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            Math.max(prevIndex - 1, 0)
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            Math.min(prevIndex + 1, mockFreelancers.length - 3)
        );
    };

    return (
        <>
            <div className={styles.sliderWrapper}>
                <div className={styles.sliderContainer}>
                    <ul
                        className={styles.slider}
                        style={{
                            transform: `translateX(-${currentIndex * (390 + 15)}px)`, 
                        }}
                    >
                        {mockFreelancers.map((slide, index) => {
                            const isVisible =
                                index >= currentIndex &&
                                index < currentIndex + 3;
                            return (
                                <li
                                    key={slide.id}
                                    className={`${styles.freelancerCard} ${
                                        isVisible
                                            ? styles.visible
                                            : styles.hidden
                                    }`}
                                >
                                    <div className={styles.freelancerInfo}>
                                        <img
                                            src={slide.image}
                                            width={70}
                                            height={70}
                                            style={{
                                                borderRadius: "16px",
                                                objectFit: "cover",
                                            }}
                                            alt="profile photo"
                                        />
                                        <div>
                                            <div className={styles.freelancerName}>
                                                <h2>{slide.name}</h2>
                                                <h3>{slide.rating}</h3>
                                            </div>
                                            <h3>{slide.region}</h3>
                                        </div>
                                    </div>
                                    <p>{slide.description}</p>
                                    <div className={styles.slideLine}></div>
                                    <div className={styles.freelancerStats}>
                                        <h2>{slide.totalOrders} выполненных заказов</h2>
                                        <h3>~{slide.price}₽ за заказ</h3>
                                    </div>
                                    <div className={styles.freelancerSkills}>
                                        {slide.skills.map((skill, index) => (
                                            <div key={index}>{skill}</div>
                                        ))}
                                    </div>
                                    <button
                                        className={styles.onlineConsultation}
                                    >
                                        <Link to="#">Онлайн-консультация</Link>
                                    </button>
                                    <div className={styles.slideActions}>
                                        <button className={styles.toProfile}>
                                            <Link to="#">
                                                Перейти в профиль
                                            </Link>
                                        </button>
                                        <button
                                            className={styles.addToFavourite}
                                        >
                                            <img
                                                src={toFavourite}
                                                width={30}
                                                height={24}
                                                alt="add to fav"
                                            />
                                        </button>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className={styles.sliderBtns}>
                <button 
                    className={styles.prevSlide} 
                    onClick={prevSlide}
                    style={{
                        opacity: currentIndex === 0 ? '0.5' : '1',
                        cursor: currentIndex === 0 ? 'default' : 'pointer'
                    }}
                >
                    <img 
                        src={arrow}
                        width={35}
                        height={25}
                        alt="prev" 
                    />
                </button>
                <button 
                    className={styles.nextSlide} 
                    onClick={nextSlide}
                    style={{
                        opacity: currentIndex === mockFreelancers.length - 3 ? '0.5' : '1',
                        cursor: currentIndex === mockFreelancers.length - 3 ? 'default' : 'pointer'
                    }}
                >
                    <img
                        src={arrow}
                        width={35}
                        height={25}
                        alt="next"
                    />
                </button>
            </div>
        </>
    );
}