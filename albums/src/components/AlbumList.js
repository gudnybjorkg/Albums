import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  // (1) Setup default initial state (empty state)
  state = { albums: [] };

  componentWillMount() {
    //console.log('componentWillMount in AlbumList');
    //debugger; þarf að sækja einhvern package til að nota í crome.

    // Get the data
    // axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => console.log(response));
    // Make sure the data has been returned before rendering. Using component level state
    // Using state = { albums: [ {name: 'Taylor Swift'}, ...] }.
    // 1. setup default state 2. tell comonent to update 3. make sure that the state is used

    //(2)
    // setstate: til í öllum class based components og rerenderar fyrir mann.
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  //(3) Helper function sem býr til lista af albums
  renderAlbums() {
    //map er array helper þar sem albums er array
    //reference í js variable þá nota {}
    //key sem react notar sem segir til um hvaða item er verið að uppfæra, þ.e. id fyrir hlutinn.
    //album er nafnið á propinu sem er sent sem á AlbumDetail.
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    //renderar fyrst tóma og svo með gögnum vegna setState uppfærði í millitíðinni
    console.log(this.state);

    //(3) kallar í hjálpar fallið sem skrifar út
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
