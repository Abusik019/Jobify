import styles from './style.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import jobifyImg from '../../assets/icons/logoJobify.svg';
import starImg from '../../assets/icons/roundedStar.svg';
import blackStarImg from '../../assets/icons/roundedBlackStar.svg';
import doneImg from '../../assets/images/bigDone.png';

export default function Review() {
    const [isNext, setIsNext] = useState(false);
    const [review, setReview] = useState({
        desc: "",
        isSatisfied: true,
        isGoodCustomer: true,
        rating: 1
    });

    function handleSetRating(rating){
        setReview((prev) => ({
            ...prev,
            rating
        }))
    }

    console.log(review);

    return (
        <>
            {!isNext ? (
                <div className={styles.review}>
                    <Link to="/">
                        <img src={jobifyImg} width={127} height={42} alt="Jobify logo" />
                    </Link>
                    <div className={styles.reviewContent}>
                        <div className={styles.reviewLeftSide}>
                            <h2>Поздравляем с выполненным заданием!</h2>
                            <p>Пожалуйста, оставьте отзыв о заказчике — это поможет другим фрилансерам сделать осознанный выбор!</p>
                        </div>
                        <div className={styles.reviewRightSide}>
                            <h2>Ваше мнение о заказчике</h2>
                            <textarea placeholder='Расскажите, как все прошло'></textarea>
                            <div className={styles.reviewChoice}>
                                <h2>Оставлись ли вы довольны? <span style={{color: '#F63939'}}>*</span></h2>
                                <p>Выберите один вариант ответа</p>
                                <div>
                                    <input 
                                        type="checkbox" 
                                        id='checkbox1' 
                                        checked={review.isSatisfied ? true : false} 
                                        onChange={() => setReview((prev) => ({
                                            ...prev,
                                            isSatisfied: true
                                        }))}
                                    />
                                    <label htmlFor="checkbox1">Да, конечно</label>
                                </div>
                                <div>
                                    <input 
                                        type="checkbox" 
                                        id='checkbox2' 
                                        checked={!review.isSatisfied ? true : false}
                                        onChange={() => setReview((prev) => ({
                                            ...prev,
                                            isSatisfied: false
                                        }))}
                                    />
                                    <label htmlFor="checkbox2">Нет, что-то пошло не так</label>
                                </div>
                            </div>
                            <div className={styles.reviewChoice}>
                                <h2>Заказчик вовремя предоставлял необходимые данные? <span style={{color: '#F63939'}}>*</span></h2>
                                <p>Выберите один вариант ответа</p>
                                <div>
                                    <input 
                                        type="checkbox" 
                                        id='checkbox1' 
                                        checked={review.isGoodCustomer ? true : false} 
                                        onChange={() => setReview((prev) => ({
                                            ...prev,
                                            isGoodCustomer: true
                                        }))}
                                    />
                                    <label htmlFor="checkbox1">Да</label>
                                </div>
                                <div>
                                    <input 
                                        type="checkbox" 
                                        id='checkbox2' 
                                        checked={!review.isGoodCustomer ? true : false}
                                        onChange={() => setReview((prev) => ({
                                            ...prev,
                                            isGoodCustomer: false
                                        }))}
                                    />
                                    <label htmlFor="checkbox2">Нет</label>
                                </div>
                            </div>
                            <h3>Ваша оценка заказчику <span style={{color: '#F63939'}}>*</span></h3>
                            <div className={styles.rating}>
                                <ul>
                                    <li onClick={() => handleSetRating(1)}><img src={blackStarImg} width={48} height={48} alt="star" /></li>
                                    <li onClick={() => handleSetRating(2)}><img src={review.rating >= 2 ? blackStarImg : starImg} width={48} height={48} alt="star" /></li>
                                    <li onClick={() => handleSetRating(3)}><img src={review.rating >= 3 ? blackStarImg : starImg} width={48} height={48} alt="star" /></li>
                                    <li onClick={() => handleSetRating(4)}><img src={review.rating >= 4 ? blackStarImg : starImg} width={48} height={48} alt="star" /></li>
                                    <li onClick={() => handleSetRating(5)}><img src={review.rating >= 5 ? blackStarImg : starImg} width={48} height={48} alt="star" /></li>
                                </ul>
                                <h4>{review.rating}/5</h4>
                            </div>
                        </div>
                    </div>
                    <button className={styles.nextBtn} onClick={() => setIsNext(true)}>Оставить отзыв</button>
                </div>
            ) : (
                <div className={styles.success}>
                    <Link to="/">
                        <img src={jobifyImg} width={127} height={42} alt="Jobify logo" />
                    </Link>
                    <div className={styles.successContainer}>
                        <img 
                            src={doneImg}
                            width={99}
                            height={99}
                            alt="done" 
                        />
                        <h2>Отзыв был успешно отправлен!</h2>
                        <Link to='#'>Продолжить</Link>
                    </div>
                </div>
            )}
        </>
    )
}
