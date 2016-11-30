import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

//Þar sem þetta er bara presentational component þá þarf hann ekki að vera með state
//hann þarf því ekki að vera class og er því functional component
//í stað þess að vera bara með prop þá er hægt að destructura með því að
//sækja beint það sem verið að nota, þá er hægt að gera const breytu og pikka út það
//sem þarf til að nota hverju sinni í stað þess að skrifa alla gommuna
//props.album.title og kalla því beint í title.
const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image } = album;

  return (
    <Card>
      <CardSection>
        <View style={styles.headerContentStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>

        <View>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
};

export default AlbumDetail;
