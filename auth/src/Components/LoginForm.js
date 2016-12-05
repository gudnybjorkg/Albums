import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './Common';

class LoginForm extends Component {
  state = { email: '', password: '' };

  //Athenticate the user using fireabse
  onButtonPress() {
    const { email, password } = this.state;

    //clear out error message if the user tries to log in again.
    this.setState({ error: '' });

    //Try to login if fails then try to create a new user
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        console.log('sign In failed');
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(() => {
          console.log('crate user failed');
          //If createing an user fails then return error message to the screen
          this.setState({ error: 'Authentication Failed.' });
        });
    });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeHolder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeHolder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
