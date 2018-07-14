import React from 'react';
import {
  Button,
  ListItem,
  Text,
} from 'native-base';

export default class GameListItem extends React.Component {
  render() {
    return (
      <ListItem onPress={ () => this.props.navigation.navigate('CharacterList', { game: this.props.game, title: this.props.game.name }) }>
        <Text>
          { this.props.game.name }
        </Text>
      </ListItem>
    );
  }
}
