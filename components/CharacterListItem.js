import React from 'react';
import {
  ListItem,
  Text,
} from 'native-base';

export default class CharacterListItem extends React.Component {
  render() {
    const {
      character,
      inputCategories,
      navigation,
    } = this.props;

    return (
      <ListItem onPress={() => navigation.navigate('MoveListScreen', {character: character, inputCategories: inputCategories})}>
        <Text>{character.name}</Text>
      </ListItem>
    );
  }
}
