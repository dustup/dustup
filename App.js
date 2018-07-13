import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

import { ggxrd } from './src/data/games';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chars: ggxrd.characters };
  }

  render() {
    return (
      <View style={ styles.container }>
        <FlatList
          data={ this.state.chars }
          renderItem={ ({ item }) => <Text style={ styles.item }>{ item.name }</Text> }
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
    height: 44,
  },
});
