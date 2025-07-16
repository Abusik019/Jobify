import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { Order } from "../../components/Order";
import { useState } from "react";
import { GradientText } from "../../components/GradientText";
import FreelancersSlider from "../../components/FreelancersSlider";

import questionImg from "../../assets/icons/question.svg";
import whiteArrow from "../../assets/icons/w-longArrow.svg";
import blackArrow from "../../assets/icons/b-longArrow.svg";
import close from "../../assets/icons/close.svg";
import uploadImg from "../../assets/icons/upload.svg";


export default function MyOrders() {
    const [isOpenFullOrders, setIsOpenFullOrders] = useState(false);
    
    return (
        <div className={styles.myOrders}>
            <section className={styles.myOrdersContent}>
                <div className={styles.myOrdersHeadContent}>
                    <div className={styles.myOrdersTitle}>
                        <h2>Мои заказы</h2>
                        <img
                            src={questionImg}
                            width={24}
                            height={24}
                            alt="question"
                        />
                    </div>
                    <button>
                        <Link to="/create-task">
                            <span>+</span> Добавить заказ
                        </Link>
                    </button>
                </div>
                <ul className={styles.orders}>
                    <Order
                        title="Контроль и консультирование менеджеров по техническим вопросам"
                        desc="Нужен человек, способный и распологающий временем для контроля, консультирования и содействия менеджерам в части, касающейся технических вопросов по монтажу ворот и дверей"
                        theme="Выбранная тема"
                        date="2 декабря, 00:11"
                        status="pending"
                        views={263}
                        response={27}
                    />
                    <Order
                        title="Контроль и консультирование менеджеров по техническим вопросам"
                        desc="Нужен человек, способный и распологающий временем для контроля, консультирования и содействия менеджерам в части, касающейся технических вопросов по монтажу ворот и дверей"
                        theme="Выбранная тема"
                        date="2 декабря, 00:11"
                        status="pending"
                        views={263}
                        response={27}
                    />
                    <Order
                        title="Контроль и консультирование менеджеров по техническим вопросам"
                        desc="Нужен человек, способный и распологающий временем для контроля, консультирования и содействия менеджерам в части, касающейся технических вопросов по монтажу ворот и дверей"
                        theme="Выбранная тема"
                        date="2 декабря, 00:11"
                        status="done"
                        views={263}
                        response={27}
                    />
                </ul>
                <button className={styles.toAllOrders} onClick={() => setIsOpenFullOrders((prev) => !prev)}>{!isOpenFullOrders ? "Показать все" : "Скрыть заказы"}</button>
            </section>
            <section className={styles.recommendedFreelancers}>
                <div className={styles.recommendedFreelancersTitle}>
                    <div>
                        <h2>Рекомендуемые фрилансеры</h2>
                        <button>
                            <img 
                                src={uploadImg}
                                width={24}
                                height={24}
                                alt="upload" 
                            />
                        </button>
                    </div>
                    <Link to="">Показать ещё</Link>
                </div>
                <FreelancersSlider />
            </section>
            <section className={styles.guidesContainer}>
                <ul className={styles.guides}>
                    <li>
                        <div className={styles.guidePinnedTitle}>
                            <h2>Название Гайда</h2>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. At sodales
                            sed adipiscing tempus est ac. Tempor elit
                            blandittempus.
                        </p>
                        <button className={styles.guideArrow}>
                            <img
                                src={whiteArrow}
                                width={134}
                                height={15}
                                alt="arrow"
                            />
                        </button>
                    </li>
                    <li>
                        <div className={styles.guideTitle}>
                            <h2>Название Гайда</h2>
                            <button>
                                <img
                                    src={close}
                                    width={29}
                                    height={29}
                                    alt="close button"
                                />
                            </button>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. At
                            sodales sed adipiscing tempus est ac. Tempor
                            elit blandittempus.
                        </p>
                        <button className={styles.guideArrow}>
                            <img
                                src={blackArrow}
                                width={134}
                                height={15}
                                alt="arrow"
                            />
                        </button>
                    </li>
                    <li>
                        <div className={styles.guideTitle}>
                            <h2>Название Гайда</h2>
                            <button>
                                <img
                                    src={close}
                                    width={29}
                                    height={29}
                                    alt="close button"
                                />
                            </button>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                        <span>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur</span>
                        <button className={styles.guideGoOne}>
                            <GradientText text="Перейти" />
                        </button>
                    </li>
                    <li>
                        <div className={styles.guideTitle}>
                            <h2>Название Гайда</h2>
                            <button>
                                <img
                                    src={close}
                                    width={29}
                                    height={29}
                                    alt="close button"
                                />
                            </button>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                        <span>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur</span>
                        <button className={styles.guideGoTwo}>Перейти</button>
                    </li>
                </ul>
            </section>
        </div>
    );
}
