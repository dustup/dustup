import React from 'react';

import Text from 'native-base';

export default class Notes extends React.Component {
  render() {
    const {notes} = this.props;
    return (
      <Text>{notes}</Text>
    )
  }
}
