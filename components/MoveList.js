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
    ));

    const renderedNotes = !!notes && <Notes notesTitle="Notes" notes={notes}/>

    return (
      <List>
        {renderedNotes}
        {renderedSections}
      </List>
    );
  }
}
