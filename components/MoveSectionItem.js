import React from 'react';
import {Image} from 'react-native';

import {
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
      followUp.inputs = followUp.inputs.map((input) => `${parentName} -> ${input}`);

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
    const {
      move,
      image,
    } = this.props;

    // variables can't start with numbers, so 5A is invalid
    // maybe just make the image data an array, expecting the order to match the movelist?

    if (!move.hasOwnProperty('name')) {
      return <SimpleMoveListItem move={move} image={image}/>;
    }

    const inputs = move.inputs.map((input) => (
      <CardItem
        key={input}>
        <Body>
          <Text style={{fontFamily: 'SourceCodePro'}}>{input}</Text>
        </Body>
      </CardItem>
    ));

    const renderedImage = !!image &&
      <Image
        source={image}
        style={{flex: 1, resizeMode: 'contain', height: 150}}
      />

    return (
      <Card>
        <CardItem>
          {renderedImage}
        </CardItem>
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
