import styles from "./style.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSignIn, checkAuth } from "../../redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import handleValidateEmail from "../../utils/emailValidate";
import { GradientText } from "../../components/GradientText/index";

import hidePasswordImg from "../../assets/icons/hidePassword.svg";
import showPasswordImg from "../../assets/icons/showPassword.svg";
import hidePasswordImgRed from "../../assets/icons/redHidePassword.svg";
import showPasswordImgRed from "../../assets/icons/redShowPassword.svg";
import vkImg from "../../assets/icons/vk.svg";
import jobifyImg from "../../assets/icons/logoJobify.svg";
import phoneImg from "../../assets/icons/phone2.svg";

function Login() {
    const [hidePassword, setHidePassword] = useState(false);
    const [emailVaildate, setEmailVaildate] = useState(true);
    const [passwordVaildate, setPasswordVaildate] = useState(true);

    const { accessToken, loading, error } = useSelector((state) => state.auth);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isDisabled = !(email && password && emailVaildate && passwordVaildate);

    // Проверяем авторизацию при загрузке
    useEffect(() => {
        if (accessToken) {
            dispatch(checkAuth())
                .unwrap()
                .then(() => navigate("/"))
                .catch(() => {});
        }
    }, [accessToken, dispatch, navigate]);

    function fetchSignIn() {
        if (!email || !password) return;

        dispatch(authSignIn({ email, password }))
            .unwrap()
            .then(() => navigate("/"))
            .catch((err) => console.error("Login error:", err));
    }

    function handleValidatePassword(e) {
        setPassword(e.target.value);
        const value = /^(?=.*[A-ZА-Я])(?=.*[a-zа-я])(?=.*\d)(?=.*[\W_]).{8,}$/.test(e.target.value);
        setPasswordVaildate(value);
    }

    return (
        <div className={styles.loginWrapper}>
            <Link to="/">
                <img src={jobifyImg} width={127} height={42} alt="Jobify logo" />
            </Link>
            <div className={styles.registration}>
                <h1>Вход в аккаунт Jobify</h1>
                <form className={styles.regForm}>
                    {error && <div className={styles.errorMessage}>{error}</div>}
                    <div className={styles.emailWrapper}>
                        <label
                            style={{
                                color: emailVaildate ? "#000" : "#F63939",
                            }}
                            htmlFor="email"
                        >
                            {emailVaildate ? "E-mail" : "E-mail введен некорректно"}
                        </label>
                        <input
                            value={email}
                            type="text"
                            id="email"
                            placeholder="Ваша почта"
                            onChange={(e) => handleValidateEmail(e, setEmailVaildate, setEmail)}
                            style={{
                                borderColor: emailVaildate ? "#808080" : "#F63939",
                                color: emailVaildate ? "#000" : "#F63939",
                            }}
                            required
                        />
                    </div>
                    <div className={styles.passwordWrapper}>
                        <label
                            style={{
                                color: passwordVaildate ? "#000" : "#F63939",
                            }}
                            htmlFor="password"
                        >
                            {passwordVaildate ? "Пароль" : "Пароль должен содержать минимум 8 символов"}
                        </label>
                        <input
                            value={password}
                            type={hidePassword ? "password" : "text"}
                            id="password"
                            placeholder="Ваш пароль"
                            onChange={(e) => handleValidatePassword(e)}
                            style={{
                                borderColor: passwordVaildate ? "#808080" : "#F63939",
                                color: passwordVaildate ? "#000" : "#F63939",
                            }}
                            required
                        />
                        <button
                            className={styles.passwordVisible}
                            onClick={(e) => {
                                e.preventDefault();
                                setHidePassword((prevState) => !prevState);
                            }}
                        >
                            <img
                                src={
                                    hidePassword
                                        ? passwordVaildate
                                            ? showPasswordImg
                                            : showPasswordImgRed
                                        : passwordVaildate
                                        ? hidePasswordImg
                                        : hidePasswordImgRed
                                }
                                width={24}
                                height={24}
                                alt="Toggle password visibility"
                            />
                        </button>
                    </div>
                    <button className={styles.forgotPassword}>Забыли пароль?</button>
                    <button type="button" onClick={fetchSignIn} className={styles.nextBtn} disabled={isDisabled || loading}>
                        {loading ? "Загрузка..." : "Войти"}
                    </button>
                </form>
                <div className={styles.anotherRegistrations}>
                    <button>
                        <img src={phoneImg} width={26} height={26} alt="Phone" />
                        Войти с помощью номера
                    </button>
                    <button>
                        <img src={vkImg} width={24} height={24} alt="VK" />
                        Войти через аккаунт Вконтакте
                    </button>
                </div>
                <div className={styles.haveAccount}>
                    <h2>Нет аккаунта?</h2>
                    <Link to="/registration">
                        <GradientText text="Регистрация" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
