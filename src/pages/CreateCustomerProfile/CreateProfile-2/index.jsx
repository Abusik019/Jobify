import styles from "./style.module.css";
import CreateTaskLoad from "../../../components/CreateTaskLoad";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCategory } from "../../../redux/slices/categorySlice";
import { GradientText } from "../../../components/GradientText";
import { Link } from "react-router-dom";

import krestikImg from "../../../assets/icons/close.svg";
import plusImg from "../../../assets/icons/plus.svg";
import jobifyImg from "../../../assets/icons/logoJobify.svg";

export default function CreateProfilePageTwo({ setPage, setUser, user }) {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.category);
    const [choosenCategories, setChoosenCategories] = useState([]);

    useEffect(() => {
        dispatch(fetchCategory());
    }, [dispatch]);

    useEffect(() => {
        setChoosenCategories(user.userCategories);
    }, [user.userCategories]);

    return (
        <div className={styles.createProfile}>
            <Link to="/"><img src={jobifyImg} width={102} height={42} alt="Jobify logo" /></Link>
            <div className={styles.createProfileContainer}>
                <h2>Укажите <GradientText text="сферу"/> деятельности</h2>
                <h3>
                    По желанию, Вы можете выбрать одну или несколько сфер деятельности или оставить это поле пустым. Не переживайте, Ваш выбор можно изменить позже (не более 4 категорий)
                </h3>
                <ul className={styles.categories}>
                    {categories.length !== 0 &&
                        categories.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => {
                                    if(choosenCategories.length < 4){
                                        !choosenCategories.includes(item.id) && setChoosenCategories((prev) => [...prev, item.id])
                                    }
                                }}
                                style={{
                                    backgroundColor: choosenCategories.includes(item.id) ? "#fff" : "#EAEAEA",
                                    border: choosenCategories.includes(item.id) ? "1px solid #000" : "none",
                                }}
                            >
                                <span style={{opacity: choosenCategories.includes(item.id) ? 1 : 0.6}}>
                                    {item.rusName}
                                </span>
                                {choosenCategories.includes(item.id) ? (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setChoosenCategories((prev) => prev.filter(el => el !== item.id));
                                        }}
                                    >
                                        <img
                                            src={krestikImg}
                                            width={16}
                                            height={16}
                                            alt="close"
                                        />
                                    </button>
                                ) : (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setChoosenCategories((prev) => [
                                                ...prev,
                                                item.id
                                            ]);
                                        }}
                                    >
                                        <img
                                            src={plusImg}
                                            width={16}
                                            height={16}
                                            alt="plus"
                                        />
                                    </button>    
                                )}
                            </li>
                        ))}
                </ul>
            </div>
            <CreateTaskLoad
                prev={1}
                next={3}
                setPage={setPage}
                maxPage={8}
                disabled={false}
                onNext={() => {
                    setUser((prev) => ({
                        ...prev,
                        userCategories: [...choosenCategories],
                    }));
                }}
            />
        </div>
    );
}
