import React from 'react';
import Photo from './Photo';
import NoResults from './NoResults';
import { withRouter } from 'react-router'

/*
Our photo container, the main part of the app that actually shows the pictures, it passes into the photo component informatio needed for the endpoint of the flicka API 
This is also the point where we show no show the user that their request matched no results, should that be the case. Otherwise we are mapping each photo with passed in props.
*/

const PhotoContainer = (props) => {
  let results = props.data;
  let photos;
  let query = props.query;
  let url = props.history.location.pathname;

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

/*
Discovered a major in the app where the app reset the state upon page refresh or browser navigation, I had to import withRouter again to get the url path, then take the substring
of that for the keyboard to perform the onsearch again before rendering the photots. It works!
*/

  if (url.includes("/search")) {
    let searchTerm = url.substring(8);
    if (searchTerm !== query) {
       props.onSearch(searchTerm);
    }
  }
  
/*
Displaying the photos
*/  
  return (
    <div className="photo-container">
    <h3>Results for {query}:</h3>
      <ul>
        {photos}
      </ul>
    </div>
  );
}

export default withRouter(PhotoContainer);
