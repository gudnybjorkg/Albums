import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

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

  render() {
    //renderar fyrst tóma og svo með gögnum vegna setState
    console.log(this.state);

    return (
      <View>
        <Text> AlbumList!!!!</Text>
      </View>
    );
  }
}

export default AlbumList;
