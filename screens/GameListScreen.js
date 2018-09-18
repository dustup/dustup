import React from 'react';
import {StatusBar} from 'react-native';
import {
  Body,
  Container,
  Content,
  Header,
  Left,
  Right,
  Title,
} from 'native-base';

import {GameList} from 'dustup/components';
import {
  ggxrd,
  unist,
} from 'dustup/data/games';

export default class GameListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [
        ggxrd,
        unist,
      ]
    };
  }

  render() {
    const {games} = this.state;
    const {navigation} = this.props;

    return (
      <Container>
        <StatusBar hidden/>
        <Header>
          <Left/>
          <Body>
            <Title>Games</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <GameList games={games} navigation={navigation}/>
        </Content>
      </Container>
    );
  }
}
