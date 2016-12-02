import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './Components/Common';

class App extends Component {
  // kallast automatískt í það ef það er skilgreint hér.
  componentWillMount() {
    firebase.initislizeApp({
      apiKey: 'AIzaSyAZIDxuXhvo3bvDplQVErcYYTJd42AUtxA',
      authDomain: 'authentication-13509.firebaseapp.com',
      databaseURL: 'https://authentication-13509.firebaseio.com',
      storageBucket: 'authentication-13509.appspot.com',
      messagingSenderId: '599250066361'
    });
  }
  render() {
    return (
        <View>
          <Header headerText="Authentication" />
          <Text>An App!</Text>
        </View>
    );
  }
}

export default App;
