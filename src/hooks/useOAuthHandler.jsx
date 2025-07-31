import axios from 'axios';
import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTokens } from '../redux/slices/authSlice';

export const useOAuthHandler = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const processingRef = useRef(false);
    const processedCodeRef = useRef(null);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const code = params.get('code');
        const sessionState = params.get('session_state');

        if (!code || !sessionState) return;
        
        if (processingRef.current || processedCodeRef.current === code) {
            return;
        }

        processingRef.current = true;
        processedCodeRef.current = code;

        window.history.replaceState({}, '', location.pathname);

        console.log('code:', code);

        axios
            .get(`https://jobify.api-coreinno.ru/api/auth/oauth/kc-callback?code=${code}`)
            .then(({ data }) => {
                console.log('OAuth success:', data);

                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('refreshToken', data.refreshToken);

                dispatch(setTokens({
                    accessToken: data.accessToken,
                    refreshToken: data.refreshToken,
                }));

                setTimeout(() => {
                    processingRef.current = false;
                    processedCodeRef.current = null;
                    navigate('/');
                }, 1000);
            })
            .catch((error) => {
                console.error('Ошибка авторизации:', error);
                processingRef.current = false;
                processedCodeRef.current = null;
                navigate('/login');
            });
    }, [location.search, location.pathname, navigate, dispatch]);
};