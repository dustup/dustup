import React from 'react';
import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Title,
} from 'native-base';

export default class MoveListScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    const character = navigation.getParam('character', 'NO CHARACTER');

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back"/>
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>{character.name}</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <Text>MOVE LIST</Text>
        </Content>
      </Container>
    );
  }
}
