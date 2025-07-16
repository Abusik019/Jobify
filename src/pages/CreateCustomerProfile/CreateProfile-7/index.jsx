import styles from "./style.module.css";
import { useEffect, useState } from "react";
import CreateTaskLoad from "../../../components/CreateTaskLoad";
import { Textarea } from '../../../components/Textarea';
import { GradientText } from "../../../components/GradientText";
import { Link } from "react-router-dom";

import jobifyImg from "../../../assets/icons/logoJobify.svg";

export default function CreateProfilePageSeven({ setPage, setUser, user }) {
    const [aboutMe, setAboutMe] = useState("");
    const disabledBtn = aboutMe ? true : false;

    useEffect(() => {
        setAboutMe(user.userDescription);
    }, [user.userDescription]);

    return (
        <div className={styles.createProfile}>
            <Link to="/"><img src={jobifyImg} width={102} height={42} alt="Jobify logo" /></Link>
            <div className={styles.createProfileContainer}>
                <div className={styles.createProfileContent}>
                    <h2>Укажите <GradientText text="описание"/> профиля </h2>
                    <p>Заказчики хотят знать, с кем имеют дело, поэтому для привлечения клинетов рекомендуем указать описание</p>
                    <Textarea 
                        value={aboutMe ? aboutMe : "Начните рассказывать здесь, а вдохновение польется само собой"}
                        maxLength="5000" 
                        onInput={(e) => setAboutMe(e.target.value)}
                    />
                </div>
            </div>
            <CreateTaskLoad
                prev={6}
                next={8}
                setPage={setPage}
                maxPage={8}
                disabled={!disabledBtn}
                onNext={
                    () => {
                        setUser((prev) => ({
                            ...prev,
                            userDescription: aboutMe
                        }));
                    }
                }
            />
        </div>
    );
}
