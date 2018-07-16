import React from 'react';

import {
  ListItem,
  Text,
} from 'native-base';

export default class SimpleMoveListItem extends React.Component {
  render() {
    const {move} = this.props;
    return (
      <ListItem>
        <Text>{move}</Text>
      </ListItem>
    );
  }
}
