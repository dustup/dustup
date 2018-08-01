import React from 'react';
import {
  Container,
  Content,
  Spinner,
} from 'native-base';

import dustupStyle from 'dustup/styles';

export default class FullScreenSpinner extends React.Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={dustupStyle.spinner}>
          <Spinner color='blue'/>
        </Content>
      </Container>
    );
  }
}
