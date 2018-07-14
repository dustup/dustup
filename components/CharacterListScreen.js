import React from 'react';
import {
  FlatList,
  ScrollView,
  Text
} from 'react-native';

import { styles } from 'dustup/styles';

export class CharacterListScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const game = navigation.getParam('game', 'NO GAME');

    return (
        <FlatList
          style={ styles.container }
          data={ game.characters }
          renderItem={ ({ item }) => <Text style={ styles.listItem }>{ item.name }</Text> }
          keyExtractor={ (item) => item.name }
        />
    );
  }
}
