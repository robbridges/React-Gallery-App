
import './css/index.css';
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';

/*
View component rendering 
*/

import SearchBar from './components/SearchBar';
import Navigation from './components/Navigation';
import PhotoContainer from './components/PhotoContainer';
import PageNotFound from './components/PageNotFound';


/*
Sets up the initial state of our component. also resets a loading indicator to true, so that instead of a blank screen the user is informed that their request is loading
The photos array is where we will load the search photos and the only ones that change based on a query, all others are constant
*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      oceanPhotos: [],
      moutainPhotos: [],
      campfirePhotos: [],
      isLoading: true
    };
  }

/*
What the app does when it isinitally mounted, we are changing our changeing the state of loading once the request is done this will help in rendering the loading message, and also removing it once done.

*/
componentDidMount() {
  

  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=ocean&per_page=24&format=json&nojsoncallback=1`)
    .then(res => {
      this.setState({
        oceanPhotos: res.data.photos.photo,
        isLoading: false
      });
    })
    .catch(err => {
      console.log('Error fetching and parsing data', err);
    });

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=moutain&per_page=24&format=json&nojsoncallback=1`)
    .then(res => {
      this.setState({
        moutainPhotos: res.data.photos.photo,
        isLoading: false,
      });
    })
    .catch(err => {
      console.log('Error fetching and parsing data', err);
    });

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=campfire&per_page=24&format=json&nojsoncallback=1`)
    .then(res => {
      this.setState({
        campfirePhotos: res.data.photos.photo,
        isLoading: false
      });
    })
    .catch(err => {
      console.log('Error fetching and parsing data', err);
    });
    
    
}

/*
Main search feature of the app, sets up the query and this function is wired into our search bar
*/
getPhotos = (query = 'Moutains') => {
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
  .then(response => {
    this.setState({
      photos: response.data.photos.photo,
      query: query,
      isLoading: false
    });
  })
  .catch (error => {
    console.log('Error with the api request', error)
  });
  
}

/*
This turns the loading state of the application back on, and is passed into the search bar as well so that the loading indicator again becomes active until the promise is complete

*/
reconfigureLoading = () => {
  this.setState({
    isLoading: true
  })
}


/*
Main rendering of the app main screen, it only displays the loading message if the app is in the loading state. Otherwise it renders the home path, which on mounting is fed moutain pictures
Then renders the searc/query/ path that the user is redirected to during in the search feature
Then the 3 navigation buttons have the pictures loaded upon the creation of the app and their data is passed into the app. 
Finally, if the user enters a route that is progammically included they correct reach the 404 component
*/

  render() {
  if (this.state.isLoading) {
    return (
      <h2>Please wait..loading..</h2>
    )
  } else {
  return (
    <BrowserRouter>
      <div className="App">
        <SearchBar onSearch={this.getPhotos} reconfigureLoading={this.reconfigureLoading}/>
        <Navigation />
        <Switch>
          <Route exact path ="/" render = {() => <PhotoContainer data={this.state.moutainPhotos} query='Moutains'/>} />
          <Route path ="/search" render ={ () => <PhotoContainer data ={this.state.photos} onSearch={this.getPhotos} query={this.state.query} /> } />
          <Route exact path="/oceans" render={ () => <PhotoContainer data={this.state.oceanPhotos} query='Oceans' /> }/>
          <Route exact path="/moutains" render={ () => <PhotoContainer data={this.state.moutainPhotos} query='Moutains' /> }/>
          <Route exact path="/campfires" render={ () => <PhotoContainer data={this.state.campfirePhotos} query='Campfires'/> }/>
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    </BrowserRouter>

    
  );
  }
}
}


export default App;
