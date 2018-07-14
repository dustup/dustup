import React from 'react';
import {FlatList} from 'react-native';
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

import {CharacterListItem} from 'dustup/components';

export default class CharacterListScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    const game = navigation.getParam('game', 'NO GAME');

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon name='arrow-back'/>
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>{game.shortName || game.name}</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <FlatList
            data={ game.characters }
            renderItem={({item}) => <CharacterListItem character={item} navigation={navigation}/>}
            keyExtractor={(game) => game.name}/>
        </Content>
      </Container>
    );
  }
}
