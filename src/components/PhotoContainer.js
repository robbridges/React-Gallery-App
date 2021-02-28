import React from 'react';
import Photo from './Photo';

const PhotoContainer = (props) => {
  let results = props.photos
  
  if (results.length > 0) {
    results = results.map(photo => {
      return <Photo 
                photo={photo}
                key={photo.id} />
    })
  }
  return (
    <div className="photo-container">
      <ul>
        {results}
      </ul>
    </div>
  );
}

