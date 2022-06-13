import React from 'react';
import Card from './Card';
import styles from './Cards.module.css';

export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  return (
      <div className={styles.CardsContainer}>
        {cities.map((city, index)=>{
          return (<Card key={index}
            id={city.id}
            max={city.max}
            min={city.min}
            name={city.name}
            img={city.img}
            onClose={()=> onClose(city.id)}
          />
        )})}
      </div>
    )
};