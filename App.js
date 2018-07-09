import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ggxrd } from './src/data/games';

export default class App extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text>{ ggxrd.name }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
