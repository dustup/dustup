import React from 'react';
import {
  Image,
  View,
} from 'react-native';

import {
  ListItem,
  Text,
} from 'native-base';

export default class SimpleMoveListItem extends React.Component {
  render() {
    const {
      move,
      image,
    } = this.props;

    const renderedImage = !!image &&
      <Image
        source={image}
        style={{flex: 1, resizeMode: 'contain', height: 150}}
      />

    return (
      <ListItem>
        <View style={{flex: 1, flexDirection: 'column'}}>
          {renderedImage}
          <Text>{move}</Text>
        </View>
      </ListItem>
    );
  }
}
