function handleValidateEmail(e, changeState, setEmail) {
    setEmail(e.target.value);
    const value = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
    changeState(value);
}

export default handleValidateEmail;