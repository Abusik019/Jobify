import vkImg from "../../assets/icons/vk.svg";

const { VITE_KC_HOST, VITE_KC_REALM, VITE_KC_CLIENT_ID, VITE_REDIRECT_URI } = import.meta.env;

const VkLoginButton = () => {
    const handleClick = () => {
        const url =
            `${VITE_KC_HOST}/realms/${VITE_KC_REALM}/protocol/openid-connect/auth` +
            `?client_id=${VITE_KC_CLIENT_ID}` +
            `&response_type=code` +
            `&scope=openid%20email` +
            `&redirect_uri=${encodeURIComponent(VITE_REDIRECT_URI + "/login")}` +
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