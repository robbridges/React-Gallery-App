import React from 'react';
import Photo from './Photo';

const PhotoContainer = (props) => {
  const results = props.photos
  let photos;
  if (results.length > 0) {
    photos = results.map(photo => {
      return <Photo 
                photo={photo}
                key={photo.id} />
    })
  }
}