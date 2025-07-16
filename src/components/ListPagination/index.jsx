import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import freelancer from "../../assets/images/freelancer.png";
import favorite from "../../assets/icons/favorite.png";
import zipper from "../../assets/icons/zipper.svg";
import battery from "../../assets/icons/battery.svg";
import smail from "../../assets/icons/smail.svg";
import favoriteAccent from "../../assets/icons/favoriteAccent.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/slices/userSlice";

// Данные для карточек
const data = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  lastName: "Жанна Кондратьева",
  rating: "5.0",
  title: "Маркетолог-эксперт со стажем 14 лет практических работ",
  region: "Регион",
  price: "-1200₽ за заказ",
  orders: "10 заказов в вашей сфере",
  successRate: "97% успешных заказов",
  description:
    "Lorem ipsum dolor sit amet consectetur. Nullam feugiat porttitor arcu magna vel fermentum dictumst morbi. Ut id malesuada nisl sit nunc. Pellentesque tellus dignissim eget praesent tellus. In lacus at  rutrum...",
}));

const ListPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [favorite1, setFavorite1] = useState(false);
  const [indexFavorite, setIndexFavorite] = useState(null);

  const itemsPerPage = 7;

  const dispatch = useDispatch()

  const users = useSelector((state) => state.user.users.users) || []
 
  

  useEffect(() => {
    dispatch(fetchUsers())
  },[])

  useEffect(() => {
    if (users) {
      console.log(users);
    }
  }, [users]);
  


  function favorites(index) {
    setFavorite1(!favorite1);
    setIndexFavorite(index);
  }

  // Определение текущих карточек
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(users?.length / itemsPerPage);

  // Функция для смены страницы
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.container}>
      {/* Карточки */}
      <div className={styles.cardsContainer}>
        {currentItems?.map((item, index) => (
          <div className={styles.cart} key={item.userId}>
            <div className={styles.user}>
              <div className={styles.userInfo}>
              <img className={styles.freelancer} src={freelancer} alt="" />
              <div>

                <p>
                  {item.lastName} {item.firstName} * {item.rating}{" "}
                  <img className={styles.zipper} src={zipper} alt="" />
                </p>
                <p>{item.title}</p>
                <p>{item.region}</p>
              </div>
              </div>
              <div className={styles.favorite}>
                {favorite1 && indexFavorite === index ? (
                  <img
                    onClick={() => favorites(index)}
                    src={favoriteAccent}
                    alt=""
                  />
                ) : (
                  <img onClick={() => favorites(index)} src={favorite} alt="" />
                )}

                <button>Пригласить</button>
              </div>
            </div>
            <div className={styles.raiting}>
              <p>{item.price}</p>
              <p>
                <img src={battery} alt="" /> {item.orders}
              </p>
              <p>
                <img src={smail} alt="" /> {item.successRate}
              </p>
            </div>
            <p style={{ color: "gray", marginTop: "12px" }}>
              {item.description}{" "}
              <span style={{ color: "#000000", cursor: "pointer" }}>
                Подробнее
              </span>
            </p>
            <div className={styles.buttons1}>
              <button> навык</button>
              <button> навык</button>
              <button> навык</button>
              <button>навык</button>
              <button>навык</button>
              <button>...</button>
            </div>
          </div>
        ))}
      </div>

      {/* Пагинация */}
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`${styles.pageButton} ${
              currentPage === i + 1 ? styles.activePage : ""
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ListPagination;
