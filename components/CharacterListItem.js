import React from 'react';
import {
  Text
} from 'react-native';

import { styles } from 'dustup/styles';

export class CharacterListItem extends React.Component {
  render() {
    return (
      <Text
        style={ styles.listItem }
        onPress={ () => this.props.navigation.navigate('Character') }
      >{ this.props.character.name }</Text>
    );
  }
}
