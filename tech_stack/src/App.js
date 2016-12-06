import React from 'react';
import { View } from 'react-native';
// heldur utan um store-ið og sér um að translate-a það sem er í storeinu fyrir appið
import { Provider } from 'react-redux';
import { createStore } from 'redux'; // býr til storeið

const App = () => {
  return (
    <Provider store={createStore}>
      <View />
    </Provider>
  );
};

export default App;
