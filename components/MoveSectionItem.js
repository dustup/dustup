import React from 'react';
import {Image} from 'react-native';

import {
  Card,
  CardItem,
  Body,
  Text,
} from 'native-base';

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

    const inputs = move.inputs.map((input) => (
      <CardItem
        key={input}>
        <Body>
          <Text style={{fontFamily: 'SourceCodePro'}}>{input}</Text>
        </Body>
      </CardItem>
    ));

    const renderedName = !!move.name &&
      <CardItem header bordered>
        <Text>{move.name}</Text>
      </CardItem>

    const renderedImage = !!image && image.imageId &&
      <CardItem>
        <Image
          source={image.image}
          style={{flex: 1, resizeMode: 'contain', height: 150}}
        />
      </CardItem>

    return (
      <Card>
        {renderedImage}
        {renderedName}
        {inputs}
        {move.hasOwnProperty('conditions') ? this.renderConditions(move) : null}
        {move.hasOwnProperty('followUps') ? this.renderFollowUps(move) : null}
      </Card>
    );
  }
}
