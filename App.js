import React from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { ggxrd } from './src/data/games';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { games: [ ggxrd ] };
  }

  render() {
    return (
      <View style={ styles.container }>
        <FlatList
          data={ this.state.games }
          renderItem={ ({ item }) => (
            <Text
              style={ styles.item }
              onPress={ () => Alert.alert(`You tapped [ ${item.name} ]`) }
            >
              { item.name }
            </Text>
          )}
          keyExtractor={ (item) => item.name }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
});
