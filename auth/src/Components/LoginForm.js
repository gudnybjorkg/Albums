import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './Common';

class LoginForm extends Component {
  state = { email: '', password: '' };

  //Athenticate the user using fireabse
  onButtonPress() {
    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password);
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

        <CardSection>
          <Button opPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
