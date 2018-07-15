import React from 'react';
import {
  Body,
  Card,
  CardItem,
  List,
  ListItem,
  Separator,
  Text,
} from 'native-base';

export default class MoveList extends React.Component {
  render() {
    const {
      moves,
      navigation,
    } = this.props;

    const normals = moves.normals.map((move) => (
      <ListItem key={move.toString()}>
        <Text>{move}</Text>
      </ListItem>
    ));

    const specials = moves.specials.map((move) => (
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
    ));

    const overdrives = moves.overdrives.map((move) => (
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
    ));

    const instantKills = moves.instant_kills.map((move) => (
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
