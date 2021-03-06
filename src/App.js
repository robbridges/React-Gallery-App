
import './css/index.css';
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';
import SearchBar from './components/SearchBar';
import Navigation from './components/Navigation';
import PhotoContainer from './components/PhotoContainer';
import PageNotFound from './components/PageNotFound';



class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      oceanPhotos: [],
      moutainPhotos: [],
      campfirePhotos: []

    };
  }
  
componentDidMount() {
  this.getPhotos();

  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=ocean&per_page=24&format=json&nojsoncallback=1`)
    .then(res => {
      this.setState({
        oceanPhotos: res.data.photos.photo
      });
    })
    .catch(err => {
      console.log('Error fetching and parsing data', err);
    });

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=moutain&per_page=24&format=json&nojsoncallback=1`)
    .then(res => {
      this.setState({
        moutainPhotos: res.data.photos.photo
      });
    })
    .catch(err => {
      console.log('Error fetching and parsing data', err);
    });

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=campfire&per_page=24&format=json&nojsoncallback=1`)
    .then(res => {
      this.setState({
        campfirePhotos: res.data.photos.photo
      });
    })
    .catch(err => {
      console.log('Error fetching and parsing data', err);
    });
    
    
}


getPhotos = (query = 'moutains') => {
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
  .then(response => {
    this.setState({
      photos: response.data.photos.photo,
      query: query
    });
  })
  .catch (error => {
    console.log('Error with the api request', error)
  });
}



  render() {
  return (
    <BrowserRouter>
      <div className="App">
        <SearchBar onSearch={this.getPhotos}/>
        <Navigation />
        <Switch>
          <Route exact path ="/" render = {() => <PhotoContainer data={this.state.photos} />} />
          <Route path ="/search" render ={ () => <PhotoContainer data ={this.state.photos} onSearch={this.getPhotos} /> } />
          <Route exact path="/oceans" render={ () => <PhotoContainer data={this.state.oceanPhotos} /> }/>
          <Route exact path="/moutains" render={ () => <PhotoContainer data={this.state.moutainPhotos}  /> }/>
          <Route exact path="/campfires" render={ () => <PhotoContainer data={this.state.campfirePhotos} /> }/>
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    </BrowserRouter>

    
  );
  }
  
}


export default App;
