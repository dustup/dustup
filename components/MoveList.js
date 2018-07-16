import React from 'react';
import {
  List,
  ListItem,
  Separator,
  Text,
} from 'native-base';

import {MoveSectionItem} from 'dustup/components';

export default class MoveList extends React.Component {
  render() {
    const {
      moves,
      navigation,
    } = this.props;

    const normals = moves.normals.map((move) => (
      <MoveSectionItem
        move={move}
        key={JSON.stringify(move)}/>
    ));

    const specials = moves.specials.map((move) => (
      <MoveSectionItem
        move={move}
        key={JSON.stringify(move)}/>
    ));

    const overdrives = moves.overdrives.map((move) => (
      <MoveSectionItem
        move={move}
        key={JSON.stringify(move)}/>
    ));

    const instantKills = moves.instant_kills.map((move) => (
      <MoveSectionItem
        move={move}
        key={JSON.stringify(move)}/>
    ));

    return (
      <List>
        <Separator bordered>
          <Text>NORMALS</Text>
        </Separator>
        {normals}
        <Separator bordered>
          <Text>SPECIALS</Text>
        </Separator>
        {specials}
        <Separator bordered>
          <Text>OVERDRIVES</Text>
        </Separator>
        {overdrives}
        <Separator bordered>
          <Text>INSTANT KILLS</Text>
        </Separator>
        {instantKills}
      </List>
    );
  }
}
