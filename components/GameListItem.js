import React from 'react';
import {
  Button,
  ListItem,
  Text,
} from 'native-base';

export default class GameListItem extends React.Component {
  render() {
    const {
      game,
      navigation
    } = this.props;

    return (
      <ListItem onPress={() => navigation.navigate('CharacterList', {game: game, title: game.name})}>
        <Text>
          {game.name}
        </Text>
      </ListItem>
    );
  }
}
