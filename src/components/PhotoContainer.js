import React from 'react';
import Photo from './Photo';

const PhotoContainer = (props) => {
  let results = props.data
  
  let photos = results.map( photo => 
    <Photo 
      server={photo.server}
      secret={photo.secret}
      id={photo.id}
      key={photo.id}
    /> 
  );
  
  return (
    <div className="photo-container">
      <ul>
        {photos}
      </ul>
    </div>
  );
}

export default PhotoContainer;
