import React from 'react';
import { Navlink } from 'react-router-dom';

const Navigation = () => {
  return (
    <header>
      <nav className ='main-nav'>
        <ul>
          <li><Navlink to='/oceans'>Oceans</Navlink></li>
          <li><Navlink to='/moutains'>Moutains</Navlink></li>
          <li><Navlink to='/campfires'>Campfires</Navlink></li>
        </ul>
      </nav>
    </header>
  );  
};

export default Navigation;