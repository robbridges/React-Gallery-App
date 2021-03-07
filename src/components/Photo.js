import React from 'react';
/*
Photo page, does nothing more than displays 
*/
const Photo = (props) => {
  return(
      <li>
          <img src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt="" />
      </li>
  );
}

export default Photo;