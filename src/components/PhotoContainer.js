import React from 'react';
import Photo from './Photo';
import NoResults from './NoResults';
import { withRouter } from "react-router";

const PhotoContainer = (props) => {
  let results = props.data;
  let photos;

  if (results.length > 0) {
    photos = results.map( photo => 
      <Photo 
        server={photo.server}
        secret={photo.secret}
        id={photo.id}
        key={photo.id}
      /> 
    );
  } else {
    
    photos = <NoResults />
  }

  
  
  
  return (
    <div className="photo-container">
      <ul>
        {photos}
      </ul>
    </div>
  );
}

export default withRouter(PhotoContainer);
