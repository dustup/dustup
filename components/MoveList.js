import React from 'react';
import {List} from 'native-base';

import {MoveSection} from 'dustup/components';
import {Notes} from 'dustup/components';

export default class MoveList extends React.Component {
  render() {
    const {
      movelists,
      notes,
      inputCategories,
      navigation,
    } = this.props;

    const renderedSections = movelists.map((movelist, index) => (
      <MoveSection
        movelist={movelist}
        sectionTitle={inputCategories[index]}
        key={JSON.stringify(movelist)}/>
    ).splice(-1, 0, 
      <Notes notes={notes}/>
    ));

    return (
      <List>
        {renderedSections}
      </List>
    );
  }
}
