import React from 'react';
import {List} from 'native-base';

import {MoveSection} from 'dustup/components';

export default class MoveList extends React.Component {
  render() {
    const {
      movelists,
      inputCategories,
      navigation,
    } = this.props;

    const renderedSections = movelists.map((movelist, index) => (
      <MoveSection
        movelist={movelist}
        sectionTitle={inputCategories[index]}
        key={JSON.stringify(movelist)}/>
    ));

    return (
      <List>
        {renderedSections}
      </List>
    );
  }
}
