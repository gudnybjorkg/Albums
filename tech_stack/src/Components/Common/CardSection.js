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

//Til þess að endurnýta þennan klasa án þess að þurfa að importa henni alltaf sérstaklega
//þá er hún frekar exportuð í staðin og því þarf þetta að vera svona
//má líka vera key value en þar sem heitið er það sama þá má stytta þetta svona
//      export { CardSection: CardSection };
//export default CardSection;
export { CardSection };
