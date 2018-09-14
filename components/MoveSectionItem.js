import React from 'react';
import {Image} from 'react-native';

import {
  Card,
  CardItem,
  Body,
  Text,
} from 'native-base';

export default class MoveSectionItem extends React.Component {
  renderFollowUps(move, images) {
    const renderedFollowUps = move.followUps.map((followUp) => {
      const parentName = move.shortName || move.name;
      followUp.inputs = followUp.inputs.map((input) => `${parentName} -> ${input}`);

      return (
        <CardItem
          key={JSON.stringify(followUp)}>
          <MoveSectionItem move={followUp} images={images}/>
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
      images,
    } = this.props;

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

    const renderedImage = !!move.imageId &&
      <CardItem>
        <Image
          source={images.find((i) => (
            i.imageId == move['imageId']
          )).image}
          style={{flex: 1, resizeMode: 'contain', height: 150}}
        />
      </CardItem>

    return (
      <Card>
        {renderedImage}
        {renderedName}
        {inputs}
        {move.hasOwnProperty('conditions') ? this.renderConditions(move) : null}
        {move.hasOwnProperty('followUps') ? this.renderFollowUps(move, images) : null}
      </Card>
    );
  }
}
