import React from 'react';
import {
  Text
} from 'react-native';

import { styles } from 'dustup/styles';

export default class CharacterListItem extends React.Component {
  render() {
    return (
      <Text
        style={ styles.listItem }
        onPress={ () => this.props.navigation.navigate('MoveList', { character: this.props.character, title: this.props.character.name }) }
      >{ this.props.character.name }</Text>
    );
  }
}
