import React from 'react';

import {
  ListItem,
  Card,
  CardItem,
  Body,
  Text,
} from 'native-base';

export default class MoveSectionItem extends React.Component {
  render() {
    const {move} = this.props;

    return (
      <ListItem key={move.name}>
        <Card transparent>
          <CardItem header>
            <Text>{move.name}</Text>
          </CardItem>
          <CardItem>
            <Body>
              // TODO: don't forget about follow-ups
              <Text style={{fontFamily: 'SourceCodePro'}}>{JSON.stringify(move.inputs, null, 2)}</Text>
            </Body>
          </CardItem>
        </Card>
      </ListItem>
    );
  }
}
