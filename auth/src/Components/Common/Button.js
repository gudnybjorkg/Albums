import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// onPress er parsað áfram í stað props sem kemur frá parentinu og er það sem er
//sent áfram í touchableOpacity takkann.
//Hann fattar hvað children þýðir.
const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  //Getur því tekið hvaða texta sem er sem lætur hann fá texta. Button verður því
  //alveg abstract og því hægt að nota hvar sem með þessu útliti óháð hvað stendur
  //og hvert skal fara við það að ýta á hann.
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

//Til þess að endurnýta þennan klasa án þess að þurfa að importa henni alltaf sérstaklega
//þá er hún frekar exportuð í staðin og því þarf þetta að vera svona
//má líka vera key value en þar sem heitið er það sama þá má stytta þetta svona
//      export { Button: Button };
//export default Button;
export { Button };
