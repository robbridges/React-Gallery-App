import React from 'react';
import {Navlink} from 'react-router-dom';

const PageNotFound = () => {
  return(
    <div>
      <h1> Page not found</h1>
      <h2>Yikes, how'd you get here? There's no page here!</h2>
      <p><Navlink to='/'>Let's get you back to safety</Navlink></p>
    </div>
  );
};

export default PageNotFound;