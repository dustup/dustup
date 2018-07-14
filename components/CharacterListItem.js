import React from 'react';

export class CharacterListItem extends React.Component {
  render() {
    return (
      <Text>{ this.props.char.name }</Text>
    );
  }
}
