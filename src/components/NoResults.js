import React from 'react';
/*
Very simple no results page offers the user to try again if no results are met. 
*/
const NoResults = () => {
  return (
    <li className="not-found">
      <h3>No Results Found</h3>
      <p>You search did not return any results. Please try again.</p>
    </li>
  );
};

export default NoResults;