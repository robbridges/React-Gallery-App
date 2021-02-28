import logo from './logo.svg';
import './css/index.css';
import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';
import SearchBar from './components/SearchBar';
import Navigation from './components/Navigation';


class App extends Component {
  constructor() {
    super();
    this.state = {
      photos:[]
      

    };
  } 
getPhotos = (query) => {
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
  .then(response => {
    this.setState({
      photos: response.data.photos.photo,
      query:query
    })
  })
  .catch (error => {
    console.log('Error with the api request', error)
  });
}



  render() {
  return (
    <BrowserRouter>
      <div className="App">
      <SearchBar onSearch={this.performSearch}/>
      <Navigation />
      <Route path={`/oceans`}
        onSearch={this.getPhotos}
        photos={this.state.photos}  
        query={`ocean`} />
      </div>
    </BrowserRouter>

    
  );
  }
  
}


export default App;
