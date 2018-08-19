import React from 'react';

import {
  Separator,
  Text,
} from 'native-base';

import {MoveSectionItem} from 'dustup/components';

export default class MoveSection extends React.Component {
  render() {
    const {
      movelist,
      images,
      sectionTitle,
    } = this.props;

    const renderedMoves = movelist.map((move, index) => (
      <MoveSectionItem
        move={move}
        image={images[index]}
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
