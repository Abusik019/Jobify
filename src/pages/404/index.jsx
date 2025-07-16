import styles from './style.module.css';
import { Link } from 'react-router-dom';

import jobifyImg from '../../assets/icons/logoJobify.svg';

export default function NotFound() {
  return (
    <div className={styles.notFound}>
        <Link to="/"><img src={jobifyImg} width={127} height={42} alt="Jobify logo"/></Link>
        <div className={styles.notFoundContent}>
            <h1>404</h1>
            <h2>К сожалению, запрашиваемая страница не была найдена</h2>
            <Link to='/'>На главную</Link>
        </div>
    </div>
  )
}
