import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  componentWillMount() {
    //console.log('componentWillMount in AlbumList');
    //debugger; þarf að sækja einhvern package til að nota í crome.
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => console.log(response));
  }

  render() {
    return (
      <View>
        <Text> AlbumList!!!!</Text>
      </View>
    );
  }
}

export default AlbumList;
