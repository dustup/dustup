import React from 'react';
import {
  FlatList,
  ScrollView,
  Text
} from 'react-native';

import { styles } from 'dustup/styles';
import { CharacterListItem } from 'dustup/components';

export default class CharacterListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', "GAME")
    };
  };

  render() {
    const game = this.props.navigation.getParam('game', 'NO GAME');

    return (
        <FlatList
          style={ styles.container }
          data={ game.characters }
          renderItem={ ({ item }) => <CharacterListItem character={ item } navigation={ this.props.navigation } /> }
          keyExtractor={ (item) => item.name }
        />
    );
  }
}
