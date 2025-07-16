import React, { useState } from "react";
import styles from "./style.module.css";
import mockLi from "../../assets/images/projectImage.png";
import arrow from "../../assets/icons/arrow.svg";
import close from "../../assets/icons/close.svg";
import { useNavigate } from "react-router-dom";

const projects = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Название проекта ${i + 1}`,
    description:
        "Lorem ipsum dolor sit amet consectetur. Sed eget varius non urna. Diam tortor sollicitudin sed accumsan ac. Enim in pellentesque vitae consequat suscipit dictum vitae.",
    date: "22 марта 2024",
    link: "#",
    image: mockLi,
}));

function CasePortfolio() {
    const [currentPage, setCurrentPage] = useState(1);
    const [images, setImages] = useState(projects.map((p) => p.image));

    const handleNext = () => {
        setCurrentPage((prev) => (prev < projects.length ? prev + 1 : prev));
    };

    const handlePrev = () => {
        setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
    };

    const navigate = useNavigate();

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImages((prevImages) => {
                    const newImages = [...prevImages];
                    newImages[currentPage - 1] = e.target.result;
                    return newImages;
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const currentProject = projects[currentPage - 1];

    return (
        <div>
            <img
                onClick={() => navigate("/")}
                className={styles.close}
                src={close}
                alt=""
            />
            <div className={styles.rod}>
                <div className={styles.left}>
                    <h1>{currentProject.title}</h1>
                    <p className={styles.lorem}>{currentProject.description}</p>
                    <div className={styles.talants}>
                        <p>Навыки и инструменты</p>
                        <div className={styles.buttons}>
                            <button>навык</button>
                            <button>навык</button>
                            <button>навык</button>
                            <button>навык</button>
                        </div>
                    </div>
                    <div className={styles.date}>
                        <p>Дата публикации: {currentProject.date}</p>
                        <a href={currentProject.link}>Ссылка на проект</a>
                    </div>
                </div>
                <div className={styles.right}>
                    <input
                        accept="image/*"
                        style={{ display: "none" }}
                        id="upload-image"
                        onChange={handleImageUpload}
                    />
                    <label htmlFor="upload-image">
                        <img
                            className={styles.mocKli}
                            src={images[currentPage - 1]}
                            alt=""
                            style={{ cursor: "pointer" }}
                        />
                    </label>
                    <div className={styles.images}>
                        <img
                            style={{
                                transform: "rotate(180deg)",
                                cursor: "pointer",
                            }}
                            src={arrow}
                            alt=""
                        />
                        <img style={{ cursor: "pointer" }} src={arrow} alt="" />
                    </div>
                </div>
            </div>
            <footer className={styles.footer}>
                <button onClick={handlePrev} disabled={currentPage === 1}>
                    <img
                        style={{ transform: "rotate(180deg)" }}
                        src={arrow}
                        alt=""
                    />{" "}
                    Предыдущая работа
                </button>
                <p>
                    {currentPage} из {projects.length}
                </p>
                <button
                    onClick={handleNext}
                    disabled={currentPage === projects.length}
                >
                    Следующая работа <img src={arrow} alt="" />
                </button>
            </footer>
        </div>
    );
}

export default CasePortfolio;
