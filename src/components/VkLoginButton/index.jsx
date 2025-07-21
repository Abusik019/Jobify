import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import vkImg from '../../assets/icons/vk.svg';

const { VITE_KC_HOST, VITE_KC_REALM, VITE_KC_CLIENT_ID, VITE_REDIRECT_URI } = import.meta.env;   

const VkLoginButton = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (!code) return;

    window.history.replaceState({}, '', '/login');

    axios
      .get(`/api/auth/oauth/kc-callback?code=${code}`)
      .then(({ data }) => {
        console.log(data);
        localStorage.setItem('accessToken',  data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        navigate('/');                              
      })
      .catch((error) => {
        console.error('Ошибка авторизации: ', error)
      });
  }, [navigate]);

  const handleClick = () => {
    const url =
      `${VITE_KC_HOST}/realms/${VITE_KC_REALM}/protocol/openid-connect/auth`   +
      `?client_id=${VITE_KC_CLIENT_ID}`                                   +
      `&response_type=code`                                          +
      `&scope=openid%20email`                                        +
      `&redirect_uri=${encodeURIComponent(VITE_REDIRECT_URI)}`            +
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