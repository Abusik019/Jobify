import styles from './style.module.css';

export default function EmailConfirm() {
  return (
      <div className={styles.emailConfirmWrapper}>
        <div className={styles.emailConfirm}>
            <h1>Подтвердите адрес электронной почты</h1>
            <h2>Мы отправили сообщение на адрес: example@gmail.com</h2>
            <h3>Чтобы подтвердить адрес, перейдите по ссылке в письме верификации</h3>
            <button>Прислать еще раз</button>
            <div className={styles.haveAccount}> 
                <a href='#'>Уже зарегистрированы?</a>
                <a href='#'>Войти в аккаунт</a>
            </div>
        </div>
      </div>
  )
}
