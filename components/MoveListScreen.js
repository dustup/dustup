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
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon name="arrow-back"/>
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>{character.shortName || character.name}</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <Text style={{fontFamily: 'SourceCodePro'}}>
            {JSON.stringify(character.moves, null, 2)}
          </Text>
        </Content>
      </Container>
    );
  }
}
