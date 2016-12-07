import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './Common';
import * as action from '../Actions';

class ListItem extends Component {
  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
    console.log(this.props);

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

//firsta argumentið er mapStateToProps en við erum ekki með það því erum við með
//null sem fyrra argumentið í fyrri () og seinn argumetntið þa fara öll actionin
//og parsar þau sem prop til componentsins
//seinna er til að bind actioncreators við það component
export default connect(null, action)(ListItem);
