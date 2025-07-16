import styles from "./style.module.css";
import arrow from "../../assets/icons/sliderArrow.svg";
import freelancer from "../../assets/images/freelancer.png";
import toFavourite from "../../assets/icons/toFavourite.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";


const mockFreelancers = [
  {
    id: 1,
    name: "Иван Петров",
    image: "https://i.pravatar.cc/150?img=3", // Пример аватарки
    region: "Стаж 14 лет",
    totalOrders: "97",
    rating: "5.0",
    price: "1200",
    sum: 12000
  },
  {
    id: 2,
    name: "Мария Сидорова",
    image: "https://i.pravatar.cc/150?img=1", // Пример аватарки
    region: "Стаж 10 лет",
    totalOrders: "85",
    rating: "4.9",
    price: "1100",
    sum: 48000
  },
  {
    id: 3,
    name: "Алексей Иванов",
    image: "https://i.pravatar.cc/150?img=2", // Пример аватарки
    region: "Стаж 8 лет",
    totalOrders: "72",
    rating: "4.0",
    price: "1000",
    sum: 2000
  },
  {
    id: 4,
    name: "Екатерина Кузнецова",
    image: "https://i.pravatar.cc/150?img=5", // Пример аватарки
    region: "Стаж 12 лет",
    totalOrders: "90",
    rating: "4.5",
    price: "1300",
    sum: 120000
  },
  {
    id: 5,
    name: "Дмитрий Смирнов",
    image: "https://i.pravatar.cc/150?img=4", // Пример аватарки
    region: "Стаж 15 лет",
    totalOrders: "100",
    rating: "4.7",
    price: "1400",
    sum: 17000
  },
];

export default function FreelancersSlider({users}) {

  

 
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, users.length - 3)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className={styles.sliderWrapper}>
      <button className={styles.prevSlide} onClick={prevSlide}>
        <img src={arrow} width={24} height={24} alt="prev" />
      </button>
      <div className={styles.sliderContainer}>
        <ul
          className={styles.slider}
          style={{ transform: `translateX(-${currentIndex * 336}px)` }}
        >
          {users?.map((slide, index) => {
            const isVisible = index >= currentIndex && index < currentIndex + 3;
            return (
              <li
                key={slide.userId}
                className={`${styles.freelancerCard} ${
                  isVisible ? styles.visible : styles.hidden
                }`}
              >
                <div className={styles.freelancerInfo}>
                  <img
                    src={''}
                    width={70}
                    height={70}
                    style={{ borderRadius: "16px", objectFit: "cover" }}
                    alt="profile photo"
                  />
                  <div>
                    <h2>{slide.lastName} {slide.firstName}</h2>
                    {/* <h3>{slide.region}</h3> */}
                  </div>
                </div>
                <div className={styles.slideLine}></div>
                <div className={styles.freelancerStats}>
                  <div className={styles.freelancerOrders}>
                    <h2>{slide.totalOrders}% успешных заказов</h2>
                    <div>{slide.rating}</div>
                  </div>
                  <div className={styles.price}>

                  <p>{slide.sum}₽ заработано</p>
                  <p>~{slide.price}₽ за заказ</p>
                  </div>
                </div>
                <div className={styles.freelancerSkills}></div>

                <div className={styles.slideActions}>
                  <button className={styles.toProfile}>
                    <Link to="/freelancer-profile">Обратиться</Link>
                  </button>
                  <button className={styles.addToFavourite}>
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
      <button className={styles.nextSlide} onClick={nextSlide}>
        <img
          src={arrow}
          width={24}
          height={24}
          alt="next"
          style={{ transform: "rotate(180deg)" }}
        />
      </button>
    </div>
  );
}
