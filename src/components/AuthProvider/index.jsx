import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshTokens, checkAuth, logout } from "../../redux/slices/authSlice";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { accessToken, refreshToken, error } = useSelector((state) => state.auth);

    useEffect(() => {
        // Проверяем, есть ли код OAuth в URL
        const params = new URLSearchParams(location.search);
        const hasOAuthCode = params.get('code');
        
        if (accessToken) {
            dispatch(checkAuth());
        } else if (!accessToken && !refreshToken && location.pathname !== "/login" && location.pathname !== "/registration" && !hasOAuthCode) {
            navigate("/login");
        }
        
        if (accessToken && location.pathname === "/login" && !hasOAuthCode) {
            navigate("/");
        }
    }, [accessToken, refreshToken, dispatch, navigate, location.pathname, location.search]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (refreshToken) {
                dispatch(refreshTokens())
                    .unwrap()
                    .then(() => {
                        dispatch(checkAuth());
                    })
                    .catch(() => {
                        dispatch(logout());
                        navigate("/login");
                    });
            }
        }, 15 * 60 * 1000); // Каждые 15 минут

        return () => clearInterval(interval);
    }, [refreshToken, dispatch, navigate]);

    useEffect(() => {
        if (error === "Не удалось обновить токен" || error === "Refresh token отсутствует") {
            dispatch(logout());
            navigate("/login");
        }
    }, [error, dispatch, navigate]);

    return children;
};