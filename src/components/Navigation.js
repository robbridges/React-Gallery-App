import React from 'react';
import { NavLink } from 'react-router-dom';
/*
Very simple part of our app, navlinks that direct the user to a different part of our app.
*/
const Navigation = () => {
  return (
    <header>
      <nav className ='main-nav'>
        <ul>
          <li><NavLink to='/oceans'>Oceans</NavLink></li>
          <li><NavLink to='/moutains'>Moutains</NavLink></li>
          <li><NavLink to='/campfires'>Campfires</NavLink></li>
        </ul>
      </nav>
    </header>
  );  
};

export default Navigation;