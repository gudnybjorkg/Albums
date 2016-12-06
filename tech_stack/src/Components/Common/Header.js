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
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make component availabele to other parts of the app

//Til þess að endurnýta þennan klasa án þess að þurfa að importa henni alltaf sérstaklega
//þá er hún frekar exportuð í staðin og því þarf þetta að vera svona
//má líka vera key value en þar sem heitið er það sama þá má stytta þetta svona
//      export { Header: Header };
//export default Header;
export { Header };
