import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import {
  Container,
  Content,
  Spinner,
  StyleProvider,
} from 'native-base';
import {Font} from 'expo';

import getTheme from 'dustup/native-base-theme/components';
import platform from 'dustup/native-base-theme/variables/platform';
import {
  GameListScreen,
  CharacterListScreen,
  MoveListScreen,
} from 'dustup/components';

const RootStack = createStackNavigator(
  {
    GameList: {screen: GameListScreen},
    CharacterList: {screen: CharacterListScreen},
    MoveList: {screen: MoveListScreen},
  },
  {
    initialRouteName: 'GameList',
    headerMode: 'none',
  },
);

const spinnerStyle = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
      SourceCodePro: require('dustup/fonts/SourceCodePro-Regular.ttf'),
    });
    this.setState({isReady:true});
  }

  render() {
    if (!this.state.isReady) {
      return (
        <Container>
          <Content contentContainerStyle={spinnerStyle.spinnerStyle}>
            <Spinner color='blue'/>
          </Content>
        </Container>
      );
    }
    return (
      <StyleProvider style={getTheme(platform)}>
        <RootStack/>
      </StyleProvider>
    );
  }
}
