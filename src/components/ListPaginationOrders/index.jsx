import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import favorite from "../../assets/icons/favorite.png";
import favoriteAccent from "../../assets/icons/favoriteAccent.svg";
import sms from "../../assets/icons/sms.svg";
import Rectangle from "../../assets/icons/Rectangle.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/slices/userSlice";

// Данные для карточек
const data = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  lastName: "Жанна Кондратьева",
  rating: "5.0",
  title: "Создам сайт под ключ для любых целей",
  payment: "Почта подтверждена",
  payment1: "Почта подтверждена",
  description:
    "Lorem ipsum dolor sit amet consectetur. Nullam feugiat porttitor arcu magna vel fermentum dictumst morbi. Ut id malesuada nisl sit nunc. Pellentesque tellus dignissim eget praesent tellus. In lacus at venenatis pretium vestibulum rutrum...",
  proposals: 5,
  price: "до 45000 ₽",
}));

const ListPaginationOrders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [favorite1, setFavorite1] = useState(false);
  const [indexFavorite, setIndexFavorite] = useState(null);
  const itemsPerPage = 7;
  
  const users = useSelector((state) => state.user.users.users)
  // Определение текущих карточек
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(users?.length / itemsPerPage);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])


  // Функция для смены страницы
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  function favorites(index) {
    setFavorite1(!favorite1);
    setIndexFavorite(index);
  }

  return (
    <div className={styles.container}>
      {/* Карточки */}
      <div  className={styles.cardsContainer}>
        {currentItems?.map((item, index) => (
          <div  className={styles.cart} key={item.userId}>
            <div  className={styles.user}>
              <img
                style={{ marginRight: "25px" }}
                width={128}
                height={128}
                src={Rectangle}
                alt=""
              />
              <div className={styles.userInfo}>
                <p>
                  {item.lastName} {item.firstName} * {item.rating}{" "}
                </p>
                <p>{item.title}</p>
                <div className={styles.payment}>
                  {" "}
                  <div>
                    <img width={14} height={14} src={sms} alt="" />{" "}
                    Почта подтверждена
                  </div>{" "}
                  <div>
                    <img width={14} height={14} src={sms} alt="" />{" "}
                    Почта подтверждена
                  </div>{" "}
                </div>
                <div className={styles.buttons1}>
              <button> навык</button>
              <button> навык</button>
              <button> навык</button>
              <button>навык</button>
              <button>...</button>
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
                <button>Отправить запрос</button>
                
              </div>
              
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

export default ListPaginationOrders;
