import styles from './style.module.css';

export const GradientText = ({ text }) => {
  return (
    <span className={styles.gradient}>
        {text}
    </span>
  )
}
