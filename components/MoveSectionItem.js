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
    const renderedFollowUps = move.followUps.map((followUp) => {
      const parentName = move.shortName || move.name;
      followUp.inputs = followUp.inputs.map((input) => `${parentName} > ${input}`);

      return (
        <CardItem
          key={JSON.stringify(followUp)}>
          <MoveSectionItem move={followUp}/>
        </CardItem>
      );
    });

    return renderedFollowUps;
  }

  renderConditions(move) {
    return(
      <CardItem bordered>
        <Text>conditions: {move.conditions}</Text>
      </CardItem>
    );
  }

  render() {
    const {move} = this.props;

    if (!move.hasOwnProperty('name')) {
      return <SimpleMoveListItem move={move}/>;
    }

    const inputs = move.inputs.map((input) => (
      <CardItem
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
        {move.hasOwnProperty('conditions') ? this.renderConditions(move) : null}
        {move.hasOwnProperty('followUps') ? this.renderFollowUps(move) : null}
      </Card>
    );
  }
}
