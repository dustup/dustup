import React from 'react';
import {List} from 'native-base';

import {MoveSection} from 'dustup/components';

export default class MoveList extends React.Component {
  render() {
    const {
      moves,
      navigation,
    } = this.props;

    const renderedSections = Object.keys(moves).map((section) => (
      <MoveSection
        moves={moves[section]}
        sectionTitle={section}
        key={section}/>
    ));

    return (
      <List>
        {renderedSections}
      </List>
    );
  }
}
