import styles from "./style.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSignIn, checkAuth } from "../../redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { GradientText } from "../../components/GradientText/index";
import VkLoginButton from '../../components/VkLoginButton/index';

import hidePasswordImg from "../../assets/icons/hidePassword.svg";
import showPasswordImg from "../../assets/icons/showPassword.svg";
import jobifyImg from "../../assets/icons/logoJobify.svg";
import phoneImg from "../../assets/icons/phone2.svg";

function Login() {
    const [hidePassword, setHidePassword] = useState(true);

    const { accessToken, loading, error } = useSelector((state) => state.auth);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isDisabled = !(email && password);

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
                        <label htmlFor="email">E-mail</label>
                        <input
                            value={email}
                            type="text"
                            id="email"
                            placeholder="Ваша почта"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.passwordWrapper}>
                        <label htmlFor="password">Пароль</label>
                        <input
                            value={password}
                            type={hidePassword ? "password" : "text"}
                            id="password"
                            placeholder="Ваш пароль"
                            onChange={(e) => setPassword(e.target.value)}
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
                                src={hidePassword ? showPasswordImg : hidePasswordImg}
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
                    <VkLoginButton />
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
