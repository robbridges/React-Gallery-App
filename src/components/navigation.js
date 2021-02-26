import React from 'react';
import {Navlink} from 'react-router-dom';

const Navigation = () => {
  return (
    <header>
      <nav className ='main-nav'>
        <ul>
          <li><Navlink to='/stars'>Stars</Navlink></li>
          <li><Navlink to='/moutains'>Moutains</Navlink></li>
          <li><Navlink to='/forests'>Forests</Navlink></li>
        </ul>
      </nav>
    </header>
  );  
};

export default Navigation;