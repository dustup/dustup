import React from 'react';

import {
  ListItem,
  Card,
  CardItem,
  Body,
  Text,
} from 'native-base';

import {SimpleMoveListItem} from 'dustup/components';

export default class MoveSectionItem extends React.Component {
  render() {
    const {move} = this.props;

    if (!move.hasOwnProperty('name')) {
      return <SimpleMoveListItem move={move}/>;
    }

    const inputs = move.inputs.map((input) => (
      <CardItem bordered
        key={input}>
        <Body>
          // TODO: don't forget about follow-ups
          <Text style={{fontFamily: 'SourceCodePro'}}>{input}</Text>
        </Body>
      </CardItem>
    ));

    return (
      <Card>
        <CardItem header bordered>
          <Text>{move.name}</Text>
        </CardItem>
        {inputs}
      </Card>
    );
  }
}
