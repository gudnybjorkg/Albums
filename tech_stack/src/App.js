import React from 'react';
import { View } from 'react-native';
// heldur utan um store-ið og sér um að translate-a það sem er í storeinu fyrir appið
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './Components/Common';
import LibraryList from './Components/LibraryList';
import reducers from './Reducers';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header headerText="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
