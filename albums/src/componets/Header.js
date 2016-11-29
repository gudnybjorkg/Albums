// Import libraries for making a Component
import React from 'react';
import { View, Text } from 'react-native';

//Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle : {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',

  },
  textStyle : {

  }
}
