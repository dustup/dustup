import React from 'react';
import {
  Alert,
  Text
} from 'react-native';

import { styles } from 'dustup/styles';

export class GameListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: props.game
    }
  }

  render() {
    return (
      <Text
        style={ styles.gameListItem }
        onPress={ () => Alert.alert(`You tapped [ ${this.state.game.name} ]`) }
      >
        { this.state.game.name }
      </Text>
    );
  }
}
