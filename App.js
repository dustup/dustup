import {
  createStackNavigator
} from 'react-navigation';

import {
  GameListScreen
} from 'dustup/components/GameListScreen';

export default createStackNavigator({
  GameList: {
    screen: GameListScreen
  }
});
