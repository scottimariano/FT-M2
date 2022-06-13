import React, { useState } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  // acá va tu código
  const [city, setCity] = useState('')

  return (
    <form className={styles.SearchBar} onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      document.getElementById('searchInput').value = ''
    }}>
      <input id='searchInput'
        onChange={(e)=>{
          setCity(e.target.value)
        }}
        type="text"
        placeholder="Ciudad..."
      />
      <input className={styles.buttonAgregar} type="submit" value="Agregar" />
    </form>
  );
}