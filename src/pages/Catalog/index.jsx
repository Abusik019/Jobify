import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Rectangle from "../../assets/images/Rectangle 55.png";
import Ellipse from "../../assets/images/Ellipse 6.png";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchCategory,
    fetchSubCategoryId,
} from "../../redux/slices/categorySlice";
import CardCarousel from "../../components/CardCarousel";
import { fetchUsers } from "../../redux/slices/userSlice";

function Catalog() {
    const [selectedCategoryId, setSelectedCategoryId] = useState(0); // Хранит выбранный id категории
    const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(0); // Хранит выбранный id подкатегории
    const [openSubCategor, setOpenSubCategor] = useState(false);

    const category = useSelector((state) => state.category.category);
    const subCategory = useSelector((state) => state.category.subCategory);
    const users = useSelector((state) => state.user.users.users) || []
    console.log(users);
    

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategory());
    }, []);
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    useEffect(() => {
        dispatch(fetchSubCategoryId());
    }, []);
  

    function handleClickCategor(id) {
        if (id === selectedCategoryId) {
            setOpenSubCategor(!openSubCategor);
        } else {
            setSelectedCategoryId(id);
            setOpenSubCategor(true);
        }
    }

    return (
        <div className={styles.rod}>
            <header>
                <h1>Каталог фрилансеров</h1>
                <ul className={styles.categor}>
                    {category.map((item) => {
                        return (
                            <li
                                style={{
                                    color:
                                        item.id === selectedCategoryId
                                            ? "#FFFFFF"
                                            : "#000000",
                                    backgroundColor:
                                        item.id === selectedCategoryId
                                            ? "#000000"
                                            : "#FFFFFF",
                                    cursor: "pointer",
                                }}
                                onClick={() => handleClickCategor(item.id)}
                                key={item.id}
                            >
                                {item.rusName}
                            </li>
                        );
                    })}
                </ul>
                {openSubCategor && (
                    <p className={styles.subCat}>Подкатегории</p>
                )}
                <div className={styles.subCategor}>
                    {openSubCategor &&
                        subCategory
                            .filter(
                                (subcat) =>
                                    subcat.categoryId === selectedCategoryId
                            ) // Фильтруем по выбранной категории
                            .map((subcat) => (
                                <span
                                    onClick={() =>
                                        setSelectedSubCategoryId(subcat.id)
                                    }
                                    style={{
                                        cursor: "pointer",
                                        color:
                                            subcat.id === selectedSubCategoryId
                                                ? "#FFFFFF"
                                                : "#000000",
                                        backgroundColor:
                                            subcat.id === selectedSubCategoryId
                                                ? "#000000"
                                                : "#EAEAEA",
                                    }}
                                    key={subcat.id}
                                    className={styles.subCategoryTag}
                                >
                                    {subcat.rusName}
                                </span>
                            ))}
                </div>
            </header>

            <main>
                <h2 className={styles.zagalovok1}>
                    Опытные фрилансеры в сфере "Реклама / Маркетинг"{" "}
                </h2>
                <div className={styles.carts}>
                    <CardCarousel users={users} />
                </div>

                <h2 className={styles.zagalovok1}>Недавно просмотренные</h2>
                <div className={styles.carts}>
                    <CardCarousel users={users} />
                </div>
            </main>

            <footer>
                <h2 className={styles.zagalovok1}>
                    Объявления "Реклама / Маркетинг"{" "}
                </h2>
                <div className={styles.carts}>
                    <div className={styles.cart}>
                        <img
                            className={styles.rectange}
                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                            alt=""
                        />
                        <div className={styles.block}>
                            <div className={styles.reclama}>
                                <p>Контекстная реклама любых видов под ключ </p>
                                <h4>от 8000₽</h4>
                            </div>
                            <div className={styles.info1}>
                                <img src="https://i.pravatar.cc/150?img=8" style={{borderRadius: "50%"}} alt="" />
                                <div className={styles.info2}>
                                    <p>Иван Делуца</p>
                                    <p>90% успешных заказов</p>
                                </div>
                                <p>4.2</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cart}>
                        <img
                            className={styles.rectange}
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                            alt=""
                        />
                        <div className={styles.block}>
                            <div className={styles.reclama}>
                                <p>Настройка и ведение контекстной рекламы в Google Ads</p>
                                <h4>от 7500₽</h4>
                            </div>
                            <div className={styles.info1}>
                                <img src="https://i.pravatar.cc/150?img=13" style={{borderRadius: "50%"}} alt="" />
                                <div className={styles.info2}>
                                    <p>Андрей Быков</p>
                                    <p>99% успешных заказов</p>
                                </div>
                                <p>5.0</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cart}>
                        <img
                            className={styles.rectange}
                            src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                            alt=""
                        />
                        <div className={styles.block}>
                            <div className={styles.reclama}>
                                <p>Создание рекламных кампаний для малого бизнеса</p>
                                <h4>от 3300₽</h4>
                            </div>
                            <div className={styles.info1}>
                                <img src="https://i.pravatar.cc/150?img=12" style={{borderRadius: "50%"}} alt="" />
                                <div className={styles.info2}>
                                    <p>Максим Лавров</p>
                                    <p>97% успешных заказов</p>
                                </div>
                                <p>4.8</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cart}>
                        <img
                            className={styles.rectange}
                            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                            alt=""
                        />
                        <div className={styles.block}>
                            <div className={styles.reclama}>
                                <p>Аудит и улучшение текущих рекламных кампаний</p>
                                <h4>от 2000₽</h4>
                            </div>
                            <div className={styles.info1}>
                                <img src="https://i.pravatar.cc/150?img=11" style={{borderRadius: "50%"}} alt="" />
                                <div className={styles.info2}>
                                    <p>Алексей Иванов</p>
                                    <p>91% успешных заказов</p>
                                </div>
                                <p>4.7</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Catalog;
