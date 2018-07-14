import React from 'react';
import {
  FlatList,
  ScrollView
} from 'react-native';

import { GameListItem } from 'dustup/components/GameListItem';
import { ggxrd } from 'dustup/data/games';
import { styles } from 'dustup/styles';

export class GameListScreen extends React.Component {
  static navigationOptions = {
    title: 'Games'
  };

  render() {
    return (
        <FlatList
          style={ styles.container }
          data={ [ ggxrd ] }
          renderItem={ ({ item }) => <GameListItem game={ item } navigation={ this.props.navigation }/> }
          keyExtractor={ (item) => item.name }
        />
    )
  }
}
