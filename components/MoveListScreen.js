import React from 'react';
import {
  Text
} from 'react-native';

export default class MoveListScreen extends React.Component {
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
