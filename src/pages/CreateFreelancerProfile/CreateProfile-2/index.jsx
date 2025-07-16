import styles from "./style.module.css";
import CreateTaskLoad from "../../../components/CreateTaskLoad";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
    fetchCategory,
    fetchSubCategoryId,
} from "../../../redux/slices/categorySlice";
import { GradientText } from "../../../components/GradientText";

import jobifyImg from "../../../assets/icons/logoJobify.svg";
import krestikImg from "../../../assets/icons/close.svg";
import plusImg from "../../../assets/icons/plus.svg";

export default function CreateProfilePageTwo({ setPage, setUser, user }) {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.category);
    const subcategories = useSelector((state) => state.category.subCategory);

    const [choosenCategory, setChoosenCategory] = useState(null);
    const [choosenSubcategories, setChoosenSubcategories] = useState([]);

    const disabledBtn = choosenSubcategories.length ? true : false;

    useEffect(() => {
        dispatch(fetchCategory());
        dispatch(fetchSubCategoryId());
    }, [dispatch]);

    useEffect(() => {
        setChoosenCategory(user.userCategories);
    }, [user.userCategories]);

    console.log(choosenSubcategories);

    return (
        <div className={styles.createProfile}>
            <img src={jobifyImg} width={102} height={42} alt="Jobify logo" />
            <div className={styles.createProfileContainer}>
                <h2>В какой <GradientText text="области"/> вы специализируетесь?</h2>
                <h3>
                    Выберите одну или несколько сфер деятельности. Не беспокойтесь, Вы сможете изменить это позднее (не более 4 категорий)
                </h3>
                <ul className={styles.categories}>
                    {(Array.isArray(categories) && categories.length !== 0) &&
                        categories.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => setChoosenCategory(item.id)}
                                style={{
                                    backgroundColor:
                                        item.id === choosenCategory
                                            ? "#fff"
                                            : "#EAEAEA",
                                    border:
                                        item.id === choosenCategory
                                            ? "1px solid #000"
                                            : "none",
                                }}
                            >
                                <span
                                    style={{
                                        opacity:
                                            item.id === choosenCategory
                                                ? 1
                                                : 0.6,
                                    }}
                                >
                                    {item.rusName}
                                </span>
                                {item.id === choosenCategory && (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setChoosenCategory(null);
                                        }}
                                    >
                                        <img
                                            src={krestikImg}
                                            width={16}
                                            height={16}
                                            alt="close"
                                        />
                                    </button>
                                )}
                            </li>
                        ))}
                </ul>
                {choosenCategory && (
                    <ul className={styles.subcategories}>
                        {(Array.isArray(subcategories) && subcategories.length !== 0) &&
                            subcategories
                                .filter(
                                    (subcategory) =>
                                        subcategory.categoryId ===
                                        choosenCategory
                                )
                                .map((item) => (
                                    <li
                                        key={item.id}
                                        onClick={() => {
                                            if(choosenSubcategories.length < 4){
                                                setChoosenSubcategories((prev) => [
                                                    ...prev,
                                                    item,
                                                ])
                                            }
                                        }}
                                        style={{
                                            backgroundColor:
                                                choosenSubcategories.some(
                                                    (sub) => sub.id === item.id
                                                )
                                                    ? "#fff"
                                                    : "#EAEAEA",
                                            border: choosenSubcategories.some(
                                                (sub) => sub.id === item.id
                                            )
                                                ? "1px solid #000"
                                                : "none",
                                        }}
                                    >
                                        <span
                                            style={{
                                                opacity:
                                                    choosenSubcategories.some(
                                                        (sub) =>
                                                            sub.id === item.id
                                                    )
                                                        ? 1
                                                        : 0.6,
                                            }}
                                        >
                                            {item.rusName}
                                        </span>
                                        {choosenSubcategories.some(
                                            (sub) => sub.id === item.id
                                        ) ? (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setChoosenSubcategories(
                                                        (prev) =>
                                                            prev.filter(
                                                                (el) =>
                                                                    el.id !==
                                                                    item.id
                                                            )
                                                    );
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
                                            <button>
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
                )}
            </div>
            <CreateTaskLoad
                prev={1}
                next={3}
                setPage={setPage}
                maxPage={9}
                disabled={!disabledBtn}
                onNext={() => {
                    setUser((prev) => ({
                        ...prev,
                        userCategories: [...choosenSubcategories],
                    }));
                }}
            />
        </div>
    );
}