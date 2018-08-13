import React from 'react';
import {List} from 'native-base';

import {
    Mechanics,
    MoveSection,
} from 'dustup/components';

export default class MoveList extends React.Component {
  render() {
    const {
      movelists,
      mechanics,
      inputCategories,
      navigation,
    } = this.props;

    const renderedSections = movelists.map((movelist, index) => (
      <MoveSection
        movelist={movelist}
        sectionTitle={inputCategories[index]}
        key={JSON.stringify(movelist)}/>
    ));

    const renderedMechanics = !!mechanics && <Mechanics mechanics={mechanics}/>

    return (
      <List>
        {renderedSections}
        {renderedMechanics}
      </List>
    );
  }
}
