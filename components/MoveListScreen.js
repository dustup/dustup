import React from 'react';
import {
  Text
} from 'react-native';

export class MoveListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'CHARACTER')
    };
  };

  render() {
    return (
      <Text>stuff goes here</Text>
    );
  }
}
