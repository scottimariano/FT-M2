import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div id='navBar'>
      <div id='title'>
        <img id='logoHenry' src={Logo} alt="Logo Henry" />        
        <h1>HENRY - WEATHER APP</h1>
      </div>
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
