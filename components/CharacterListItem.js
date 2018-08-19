import React from 'react';
import {
  ListItem,
  Text,
} from 'native-base';

export default class CharacterListItem extends React.Component {
  render() {
    const {
      character,
      images,
      inputCategories,
      navigation,
    } = this.props;

    return (
      <ListItem onPress={() => navigation.navigate('MoveListScreen', {character: character, images: images, inputCategories: inputCategories})}>
        <Text>{character.name}</Text>
      </ListItem>
    );
  }
}
