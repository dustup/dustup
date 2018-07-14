import React from 'react';

import {
  Body,
  Container,
  Content,
  Header,
  Left,
  Right,
  Title,
} from 'native-base';

import { GameList } from 'dustup/components/GameList';
import { ggxrd } from 'dustup/data/games';

export class GameListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [
        ggxrd,
      ]
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            // back navigation
          </Left>
          <Body>
            <Title>Games</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <GameList games={ this.state.games } navigation={ this.props.navigation } />
        </Content>
      </Container>
    )
  }
}
