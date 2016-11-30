import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

//Þar sem þetta er bara presentational component þá þarf hann ekki að vera með state
//hann þarf því ekki að vera class og er því functional component
const AlbumDetail = (props) => {
  return (
    <Card>
      <Text>{props.album.title}</Text>
    </Card>
  );
};

export default AlbumDetail;
