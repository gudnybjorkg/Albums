import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './Components/Common';
import LoginForm from './Components/LoginForm';

class App extends Component {
  state = { loggedIn: null }; //vitum ekki hvort viðkomandi er logged in.

  // kallast automatískt í það ef það er skilgreint hér.
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAZIDxuXhvo3bvDplQVErcYYTJd42AUtxA',
      authDomain: 'authentication-13509.firebaseapp.com',
      databaseURL: 'https://authentication-13509.firebaseio.com',
      storageBucket: 'authentication-13509.appspot.com',
      messagingSenderId: '599250066361'
    });

    //ath hvort að user sé innskráður eða ekki  með eventhandler frá firebase.
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View>
            <Text>You are now logged in! :) </Text>
            <Button onPress={() => firebase.auth().signOut()} style={{ height: 45 }}>
               Log Out
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.authenticationSpinnerStyle}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
        <View>
          <Header headerText="Authentication" />
          {this.renderContent()}
        </View>
    );
  }
}

const styles = {
  authenticationSpinnerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  }
};

export default App;
