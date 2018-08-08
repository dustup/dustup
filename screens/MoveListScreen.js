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

import {MoveList} from 'dustup/components';

export default class MoveListScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    const character = navigation.getParam('character', 'NO CHARACTER');
    const inputCategories = navigation.getParam('inputCategories', 'NO INPUT CATEGORIES');

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
          <MoveList movelists={character.movelists} notes={character.notes} inputCategories={inputCategories} navigation={navigation}/>
        </Content>
      </Container>
    );
  }
}
