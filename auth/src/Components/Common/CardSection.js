import React from 'react';
import { View } from 'react-native';

//ég vil ákveða on the fly hvað verður í þessu sectioni: haus, album mynd og button
//Það er því gott að nota props.children
const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default CardSection;
