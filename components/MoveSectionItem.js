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
  renderFollowUps(move) {
    const renderedFollowUps = move.follow_ups.map((followUp) => {
      const parentName = move.shortName || move.name;
      followUp.inputs = followUp.inputs.map((input) => `${parentName} > ${input}`);

      return (
        <CardItem bordered
          key={JSON.stringify(followUp)}>
          <MoveSectionItem move={followUp}/>
        </CardItem>
      );
    });

    return renderedFollowUps;
  }

  render() {
    const {move} = this.props;

    if (!move.hasOwnProperty('name')) {
      return <SimpleMoveListItem move={move}/>;
    }

    const inputs = move.inputs.map((input) => (
      <CardItem bordered
        key={input}>
        <Body>
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
        {move.hasOwnProperty('follow_ups') ? this.renderFollowUps(move) : null}
      </Card>
    );
  }
}
