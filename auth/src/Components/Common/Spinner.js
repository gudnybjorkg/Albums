import React from 'react';
import { View, ActivityIndicator } from 'react-native';

//Use the default spinner in react-native
const Spinner = ({ size }) => {
  //if the size is not specified then it will be large
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner };
