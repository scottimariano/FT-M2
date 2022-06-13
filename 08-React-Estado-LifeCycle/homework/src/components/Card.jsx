import React from 'react';
import styles from './Card.module.css'

export default function Card({id, max, min, name, img, onClose}) {
  // acá va tu código

  return (
    <div className={styles.divContainer}>
      <span onClick={onClose} className={styles.closeButton}>X</span>
      <h2 className={styles.cityName}>{name}</h2>
      <div className={styles.cardDetail}>
        <p>{`Max: ${max}˚`}</p>
        <p>{`Max: ${min}˚`}</p>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
      </div>
    </div>
  )
};