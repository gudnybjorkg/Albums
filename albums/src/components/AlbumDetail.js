import React from 'react';
import { View, Text } from 'react-native';

//Þar sem þetta er bara presentational component þá þarf hann ekki að vera með state
//hann þarf því ekki að vera class og er því functional component
const AlbumDetail = (props) => {
  return (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  );
};

export default AlbumDetail;
