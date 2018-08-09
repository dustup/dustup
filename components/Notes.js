import React from 'react';
import {
  Body,
  Card,
  CardItem,
  Separator,
  Text,
} from 'native-base';

export default class Notes extends React.Component {
  render() {
    const {
      notesTitle,
      notes,
    } = this.props;

    return (
      <React.Fragment>
        <Separator bordered>
          <Text>{notesTitle}</Text>
        </Separator>
        <Card>
          <CardItem>
            <Body>
              <Text style={{fontFamily: 'SourceCodePro'}}>{notes}</Text>
            </Body>
          </CardItem>
        </Card>
      </React.Fragment>
    );
  }
}
