import React from 'react';

import {
  Separator,
  Text,
} from 'native-base';

import {MoveSectionItem} from 'dustup/components';

export default class MoveSection extends React.Component {
  render() {
    const {
      moves,
      sectionTitle,
    } = this.props;

    const renderedMoves = moves.map((move) => (
      <MoveSectionItem
        move={move}
        key={JSON.stringify(move)}/>
    ));

    return(
      <React.Fragment>
        <Separator bordered>
          <Text>{sectionTitle}</Text>
        </Separator>
        {renderedMoves}
      </React.Fragment>
    );
  }
}