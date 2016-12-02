import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './Components/Common';
import LoginForm from './Components/LoginForm';

class App extends Component {
  // kallast automatískt í það ef það er skilgreint hér.
  componentWillMount() {
    firebase.initializeApp({
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
          <LoginForm />
        </View>
    );
  }
}

export default App;
