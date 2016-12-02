import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2, //Rounded corners
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2, //Rounded corners for the shadow
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

//Til þess að endurnýta þennan klasa án þess að þurfa að importa henni alltaf sérstaklega
//þá er hún frekar exportuð í staðin og því þarf þetta að vera svona
//má líka vera key value en þar sem heitið er það sama þá má stytta þetta svona
//      export { Card: Card };
//export default Card;
export { Card };
