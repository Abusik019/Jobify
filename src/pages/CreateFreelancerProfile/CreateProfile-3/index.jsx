import styles from "./style.module.css";
import CreateTaskLoad from "../../../components/CreateTaskLoad";
import jobifyImg from "../../../assets/icons/logoJobify.svg";
import { useEffect, useState } from "react";

export default function CreateProfilePageThree({ setPage, setUser, user }) {
    const [value, setValue] = useState("");
    const disabledBtn = value ? true : false;

    useEffect(() => {
        setValue(user.userProfession);
    }, [user.userProfession]);
    
    return (
        <div className={styles.createProfile}>
            <img src={jobifyImg} width={102} height={42} alt="Jobify logo" />
            <div className={styles.createProfileContainer}>
                <h2>Расскажите о том, кем вы являетесь</h2>
                <h3>Можете указать вашу профессию или хобби, а также Ваш опыт в указанной сфере</h3>
                <input type="text" placeholder="Пишите здесь" value={value ? value : ''} onInput={(e) => setValue(e.target.value)}/>
                <div className={styles.example}>
                    <h2>Например</h2>
                    <ul>
                        <li>Крутой разработчик игр под разные устройства</li>
                        <li>Графический дизайнер</li>
                    </ul>
                </div>
            </div>
            <CreateTaskLoad prev={2} next={4} setPage={setPage} maxPage={9} disabled={!disabledBtn} onNext={
                () => {
                    setUser((prev) => ({
                        ...prev,
                        userProfession: value
                    }));
                }
            }/>
        </div>
    );
}
