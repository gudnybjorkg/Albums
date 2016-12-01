import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

//Þar sem þetta er bara presentational component þá þarf hann ekki að vera með state
//hann þarf því ekki að vera class og er því functional component
//í stað þess að vera bara með prop þá er hægt að destructura með því að
//sækja beint það sem verið að nota, þá er hægt að gera const breytu og pikka út það
//sem þarf til að nota hverju sinni í stað þess að skrifa alla gommuna
//props.album.title og kalla því beint í title.
//sama á við um styles
const AlbumDetail = ({ album }) => {
  //Props
  const {
    title,
    artist,
    thumbnail_image,
    image
  } = album;

  //Styles
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => console.log(title)} />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
