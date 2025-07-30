import { useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTokens } from '../../redux/slices/authSlice'; 
import vkImg from '../../assets/icons/vk.svg';

const { VITE_KC_HOST, VITE_KC_REALM, VITE_KC_CLIENT_ID, VITE_REDIRECT_URI } = import.meta.env;   

const VkLoginButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const processingRef = useRef(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    console.log('OAuth code:', code);
    
    if (!code || processingRef.current) return;
    
    processingRef.current = true;

    axios
      .get(`https://jobify.api-coreinno.ru/api/auth/oauth/kc-callback?code=${code}`)
      .then(({ data }) => {
        console.log('OAuth success:', data);
        
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        
        dispatch(setTokens({
          accessToken: data.accessToken,
          refreshToken: data.refreshToken
        }));
        
        window.history.replaceState({}, '', '/login');
        
        setTimeout(() => {
          navigate('/');
        }, 100);                              
      })
      .catch((error) => {
        console.error('Ошибка авторизации: ', error);
        window.history.replaceState({}, '', '/login');
        processingRef.current = false; 
      });
  }, [navigate, dispatch]);

  const handleClick = () => {
    const url =
      `${VITE_KC_HOST}/realms/${VITE_KC_REALM}/protocol/openid-connect/auth`   +
      `?client_id=${VITE_KC_CLIENT_ID}`                                   +
      `&response_type=code`                                          +
      `&scope=openid%20email`                                        +
      `&redirect_uri=${encodeURIComponent(VITE_REDIRECT_URI + '/login')}`  + 
      `&kc_idp_hint=vkid`;                                       

    window.location.href = url;   
  };

  return (
    <button onClick={handleClick} className="vk-login-btn">
      <img src={vkImg} alt="vk" width={20} height={20} />
      Войти через VK ID
    </button>
  );
};

export default VkLoginButton;