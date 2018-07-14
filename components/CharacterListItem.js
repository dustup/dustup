import React from 'react';
import {
  ListItem,
  Text,
} from 'native-base';

export default class CharacterListItem extends React.Component {
  render() {
    const {
      character,
      navigation,
    } = this.props;

    return (
      <ListItem onPress={() => navigation.navigate('MoveList', {character: character})}>
        <Text>{character.name}</Text>
      </ListItem>
    );
  }
}
