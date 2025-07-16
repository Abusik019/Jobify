import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import search from "../../assets/icons/search.svg";
import right from "../../assets/icons/right.svg";
import bottom from "../../assets/icons/bottom.svg";
import mockGuide from "../../assets/images/mockGuide.png";
import Frame from "../../assets/icons/Frame.png";
import close from "../../assets/icons/close.svg";

import ReactSlider from "react-slider";
import ListPaginationOrders from "../../components/ListPaginationOrders";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategory,
  fetchSubCategoryId,
} from "../../redux/slices/categorySlice";

function CatalogPosts() {
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [openCategor, setOpenCategor] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);
  const [openRating, setOpenRating] = useState(false);
  const [openExecutor, setOpenExecutor] = useState(false);
  const [openWords, setOpenWords] = useState(false);
  const [openOrders, setOpenOrders] = useState(false);
  const [openOrders1, setOpenOrders1] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [successRate, setSuccessRate] = useState(0);
  const [successRate1, setSuccessRate1] = useState(0);
  const [number, setNumber] = useState(1);
  const [activeCategory, setActiveCategory] = useState(null);
  const [indexSubCategor, setIndexSubCategor] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategory());
  }, []);
  useEffect(() => {
    dispatch(fetchSubCategoryId());
  }, []);

  const categories = useSelector((state) => state.category.category);
  const subCategory = useSelector((state) => state.category.subCategory);

  const rows = [5, 4, 3, 2, 1];
  const items = Array(15).fill("Something");

  const toggleCategory = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
    setIndexSubCategor(null);
  };

  function handleSliderChange([min, max]) {
    setMinPrice(min);
    setMaxPrice(max);
  }

  return (
    <div>
      <header className={styles.content}>
        <h1>Каталог объявлений</h1>
        <div style={{ display: "inline" }}>
          <img
            style={{ position: "relative", left: "1170px", top: "43px" }}
            src={close}
            alt=""
          />
        </div>

        <img
          style={{ position: "relative", top: "40px", left: "-5px" }}
          src={search}
          alt=""
        />
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Поиск"
          type="text"
        />
      </header>
      <main className={styles.main}>
        <div className={styles.left}>
          <div className={styles.sidebar}>
            <h2
              style={{ cursor: "pointer" }}
              onClick={() => setOpenCategor(!openCategor)}
            >
              Категории{" "}
              {openCategor ? (
                <img src={right} alt="" />
              ) : (
                <img src={bottom} alt="" />
              )}
            </h2>
            {openCategor && (
              <ul>
                {categories.map((category, index) => (
                  <li key={category.id}>
                    <div
                      onClick={() => toggleCategory(index)}
                      style={{ cursor: "pointer" }}
                    >
                      {category.rusName}{" "}
                      {activeCategory === index ? (
                        <img src={right} alt="" />
                      ) : (
                        <img src={bottom} alt="" />
                      )}
                    </div>
                    {activeCategory === index && (
                      <ul className={styles.subcategories}>
                        {subCategory
                          .filter(
                            (sub) => sub.categoryId === category.id // Match subcategories to category
                          )
                          .map((sub, subIndex) => (
                            <li
                              onClick={() => setIndexSubCategor(subIndex)}
                              style={{
                                cursor: "pointer",
                                backgroundColor:
                                  indexSubCategor === subIndex && "#EAEAEA",
                                height: "36px",
                                display: "flex",
                                alignItems: "center",
                                borderRadius: "8px",
                                paddingLeft: "8px",
                              }}
                              key={sub.id}
                            >
                              {sub.rusName}
                            </li>
                          ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={styles.rating}>
            <h2
              style={{ cursor: "pointer" }}
              onClick={() => setOpenRating(!openRating)}
            >
              Рейтинг{" "}
              {openRating ? (
                <img src={right} alt="" />
              ) : (
                <img src={bottom} alt="" />
              )}{" "}
            </h2>
            {openRating && (
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {rows.map((filledStars, rowIndex) => (
                    <div key={rowIndex} style={{ display: "flex", gap: "5px" }}>
                      <input
                        style={{
                          position: "relative",
                          top: "8px",
                          borderRadius: "50%",
                          width: "22px",
                          height: "22px",
                        }}
                        type="checkbox"
                      />
                      {/* Рендерим 5 звезд в строке, закрашенные или пустые */}
                      {[...Array(5)].map((_, starIndex) => (
                        <span
                          key={starIndex}
                          style={{
                            fontSize: "24px",
                            color:
                              starIndex < filledStars ? "black" : "lightgray", // Закрашенные и пустые звезды
                          }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className={styles.orders}>
            <h2 onClick={() => setOpenOrders(!openOrders)}>
              Успешные заказы{" "}
              {openOrders ? (
                <img src={right} alt="" />
              ) : (
                <img src={bottom} alt="" />
              )}{" "}
            </h2>
            {openOrders && (
              <div className={styles.order}>
                <p>%успешных заказов от</p>
                <p> {successRate}%</p>

                <div
                  style={{
                    width: "240px",
                    border: "1px solid black",
                    marginBottom: "40px",
                  }}
                ></div>

                <ReactSlider
                  className={styles.slider1}
                  thumbClassName={styles.thumb}
                  trackClassName={styles.track}
                  min={0}
                  max={100}
                  value={successRate}
                  onChange={(val) => setSuccessRate(val)}
                  pearling
                  minDistance={1}
                  renderTrack={(props, state) => (
                    <div
                      {...props}
                      className={`${styles.track} ${
                        state.index === 1 ? "": styles.activeTrack 
                      }`}
                    />
                  )}
                />
              </div>
            )}
          </div>
          <div className={styles.orders}>
            <h2 onClick={() => setOpenOrders1(!openOrders1)}>
              Заказов в работе{" "}
              {openOrders1 ? (
                <img src={right} alt="" />
              ) : (
                <img src={bottom} alt="" />
              )}{" "}
            </h2>
            {openOrders1 && (
              <div className={styles.order}>
                <p>Не более</p>
                <p> {successRate1}%</p>

                <div
                  style={{
                    width: "240px",
                    border: "1px solid black",
                    marginBottom: "40px",
                  }}
                ></div>
                <ReactSlider
                  className={styles.slider1}
                  thumbClassName={styles.thumb}
                  trackClassName={styles.track}
                  min={0}
                  max={100}
                  value={successRate1}
                  onChange={(val) => setSuccessRate1(val)}
                  pearling
                  minDistance={1}
                  renderTrack={(props, state) => (
                    <div
                      {...props}
                      className={`${styles.track} ${
                        state.index === 1 ? "": styles.activeTrack 
                      }`}
                    />
                  )}
                />
              </div>
            )}
          </div>
          <div className={styles.buttons}>
            <button>Применить фильтры</button>
            <button>Сбросить </button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.carts}>
            <ListPaginationOrders />
          </div>
        </div>
      </main>
    </div>
  );
}

export default CatalogPosts;
