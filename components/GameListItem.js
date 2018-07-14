import React from 'react';
import {
  Text
} from 'react-native';

import { styles } from 'dustup/styles';

export default class GameListItem extends React.Component {
  render() {
    return (
      <Text
        style={ styles.listItem }
        onPress={ () => this.props.navigation.navigate('CharacterList', { game: this.props.game, title: this.props.game.name }) }
      >
        { this.props.game.name }
      </Text>
    );
  }
}
