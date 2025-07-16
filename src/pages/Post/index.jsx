import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";

import mockGuide from "../../assets/images/mockGuide.png";
import Frame from "../../assets/icons/Frame.png";
import close from "../../assets/icons/close.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategory,
  fetchSubCategoryId,
} from "../../redux/slices/categorySlice";

import ggAdd from "../../assets/icons/gg_add.svg";
import Component from "../../assets/icons/Component.svg";
import Rectangle from "../../assets/icons/Rectangle1.svg";
import arrow from "../../assets/icons/arrow.svg";
import tabler from "../../assets/icons/tabler.svg";
import tablerRed from "../../assets/icons/tablerRed.svg";

function Post() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(0); // Хранит выбранный id категории
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState([]); // Хранит выбранный id подкатегории
  const [openSubCategor, setOpenSubCategor] = useState(false);
  const [numberInput, setNumberInput] = useState([{ id: 1 }]);
  const [coverImages, setCoverImages] = useState([]);
  const [mainImage, setMainImage] = useState(null);
  const fileInputRef = useRef(null);

  const category = useSelector((state) => state.category.category);
  const subCategory = useSelector((state) => state.category.subCategory);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSubCategoryId());
  }, [dispatch]);

  function handleSubCategoryClick(id) {
    setSelectedSubCategoryId((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((subId) => subId !== id)
        : [...prevIds, id]
    );
  }

  function clearInput() {
    setNumberInput((prevInputs) => [...prevInputs, { id: Date.now() }]);
  }

  function handleImageChange(event) {
    const files = Array.from(event.target.files);
    const newImages = [];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        newImages.push(reader.result);
        if (newImages.length === files.length) {
          setCoverImages((prevImages) => [...prevImages, ...newImages]);
          if (!mainImage) {
            setMainImage(newImages[0]); // Устанавливаем первую загруженную картинку как главную
          }
        }
      };
      reader.readAsDataURL(file);
    });

    event.target.value = "";
  }

  function handleImageClick(image) {
    setMainImage(image);
  }

  function removeImage() {
    if (coverImages.length > 0) {
      const newCoverImages = coverImages.filter((img) => img !== mainImage);
      setCoverImages(newCoverImages);
      setMainImage(newCoverImages.length > 0 ? newCoverImages[0] : null);
    }
  }

  function removeInput(id) {
    setNumberInput((prevInputs) => prevInputs.filter((item) => item.id !== id)); // Удаляем по id
  }
  function handleClickCategor(id) {
    if (id === selectedCategoryId) {
      setOpenSubCategor(!openSubCategor);
    } else {
      setSelectedCategoryId(id);
      setOpenSubCategor(true);
    }
  }

  return (
    <>
      <h1
        style={{
          margin: "auto",
          width: "1200px",
          fontWeight: "400",
          marginBottom: "25px",
          fontSize: "42px"
        }}
      >
        Разместить объявление
      </h1>
      <div className={styles.rod}>
        <div className={styles.banner}>
          <div className={styles.banner1}>
            <p>Название баннера</p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Viverra cursus quam netus
              bibendum justo pretium est maecenas cursus.{" "}
            </p>
            <img src={Frame} alt="" />
          </div>
          <img className={styles.mockGuide} src={mockGuide} alt="" />
        </div>
      </div>
      <div className={styles.rod2}>
        <div className={styles.info}>
          <h2 style={{ fontWeight: "400", marginBottom: "20px" }}>
            Основная информация
          </h2>

          <p>Название</p>
          <input placeholder="Ваше предназначение" type="text" />
          <p>Категория объявления</p>
          <ul className={styles.categor}>
            {category.map((item) => (
              <li
                key={item.id}
                style={{
                  backgroundColor:
                    item.id === selectedCategoryId ? "transparent" : "#EAEAEA",
                  border:
                    item.id === selectedCategoryId
                      ? "1px solid #000000"
                      : "none",
                }}
                onClick={() => handleClickCategor(item.id)} // Устанавливаем id выбранной категории
              >
                {item.rusName}
              </li>
            ))}
          </ul>
          {openSubCategor && <p>Подкатегории</p>}
          <div className={styles.subCategor}>
            {openSubCategor &&
              subCategory
                .filter((subcat) => subcat.categoryId === selectedCategoryId) // Фильтруем по выбранной категории
                .map((subcat) => (
                  <span
                    onClick={() => handleSubCategoryClick(subcat.id)}
                    style={{
                      cursor: "pointer",
                      backgroundColor: selectedSubCategoryId.includes(subcat.id)
                        ? "transparent"
                        : "#EAEAEA",
                      border: selectedSubCategoryId.includes(subcat.id)
                        ? "1px solid #000000 "
                        : "none",
                    }}
                    key={subcat.id}
                    className={styles.subCategoryTag}
                  >
                    {subcat.rusName}
                  </span>
                ))}
          </div>
        </div>

        <div className={styles.oblojka}>
          <p style={{ marginTop: "30px" }}>Обложка объявления</p>
          <input
            type="file"
            accept="image/*"
            id="cover-upload"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          {coverImages.length === 0 && (
            <button
              style={{ color: "#543BA7" }}
              onClick={() => document.getElementById("cover-upload").click()}
            >
              Добавить обложку <img src={ggAdd} alt="" />{" "}
            </button>
          )}

          {mainImage && (
            <div className={styles.mainImageContainer}>
              <img
                className={styles.mainImage}
                src={mainImage}
                alt="Главное изображение"
              />
              <button className={styles.removeButton} onClick={removeImage}>
                <img src={tablerRed} alt="" />
              </button>
            </div>
          )}
          <div className={styles.thumbnailContainer}>
            {coverImages.map((image, index) => (
              <img
                key={index}
                className={styles.thumbnail}
                src={image}
                alt={`Обложка ${index + 1}`}
                onClick={() => handleImageClick(image)}
              />
            ))}
            {coverImages.length !== 0 && (
              <div
                onClick={() => document.getElementById("cover-upload").click()}
                className={styles.addPhoto}
              >
                <p>+</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.rod3}>
        <h1>Описание и файлы</h1>
        <p>Описание услуги</p>
        <textarea
          placeholder="Lorem ipsum dolor sit amet consectetur. Cursus netus volutpat aliquam risus purus. Sollicitudin mattis et nibh massa senectus."
          type="text"
        />
        <p>Что нужно от покупателя</p>
        <textarea
          placeholder="Lorem ipsum dolor sit amet consectetur. Cursus netus volutpat aliquam risus purus. Sollicitudin mattis et nibh massa senectus."
          type="text"
        />
        <p>Вложения</p>
        <button>
          Прикрепить файлы <img src={Component} alt="" />
        </button>
      </div>
      <div className={styles.rod4}>
        <h1>Портфолио</h1>
        <p>
          Портфолио — одним из ключевых факторов, определяющих вероятность
          успешного привлечения клиентов. Без хорошего портфолио становится
          сложно выделиться в конкурентной среде фриланса, поэтому
          инвестирование времени и усилий в его создание и обновление —
          критически важный шаг!
        </p>
        <button>+</button>
        <div className={styles.carts}>
          <div className={styles.cart}>
            <img src={Rectangle} alt="" />
            <p style={{ color: "#000000" }}>
              Название выполненной работы или кейса
            </p>
          </div>
        </div>
        <div className={styles.arrows}>
          <img className={styles.prevArrow} src={arrow} alt="" />
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className={styles.rod5}>
        <div className={styles.faq}>
          <h1>FAQ - Частые вопросы</h1>
          <p>
            У ваших покупателей часто могут возникать одни и те же вопросы, Вы
            можете заранее дать ответы на них, чтобы увеличить шансы на успешный
            заказ
          </p>
          {numberInput.map((item) => (
            <div key={item.id} className={styles.inputs}>
              <div className={styles.input}>
                <input placeholder="Вопрос" type="text" />
                <input placeholder="Дайте ответ" type="text" />
              </div>
              <img
                onClick={() => removeInput(item.id)}
                style={{ cursor: "pointer" }}
                src={tabler}
                alt=""
              />
            </div>
          ))}
        </div>
        <div className={styles.createInput}>
          <button onClick={() => clearInput()}>Добавить вопрос +</button>
        </div>
        <div className={styles.buttons}>
          <button>Вернуться назад</button>
          <button>Опубликовать объявление</button>
        </div>
      </div>
    </>
  );
}

export default Post;
