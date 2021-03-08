import React from 'react';
import {NavLink} from 'react-router-dom';
/*
Simple 404 page that if a route is requested that is not loacted it tells the user about the error and navigates them back to the home route of the app
*/

const PageNotFound = () => {
  return(
    <div>
      <h1> Page not found</h1>
      <h2>Yikes, how'd you get here? There's no page here!</h2>
      <p><NavLink to='/'>Let's get you back to safety</NavLink></p>
    </div>
  );
};

export default PageNotFound;