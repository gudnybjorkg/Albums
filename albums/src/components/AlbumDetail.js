import React from 'react';
import { Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

//Þar sem þetta er bara presentational component þá þarf hann ekki að vera með state
//hann þarf því ekki að vera class og er því functional component
const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
