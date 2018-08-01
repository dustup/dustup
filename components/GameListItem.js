import React from 'react';
import {Image} from 'react-native';
import {
  Card,
  CardItem,
  ListItem,
  Text,
} from 'native-base';

export default class GameListItem extends React.Component {
  render() {
    const {
      game,
      navigation
    } = this.props;

    return (
      <ListItem onPress={() => navigation.navigate('CharacterListScreen', {game: game})}>
        <Card transparent>
          <CardItem cardBody>
            <Image source={game.images.logo} style={{flex: 1, resizeMode: 'contain', height: 150}}/>
          </CardItem>
          <CardItem>
            <Text style={{textAlign: 'center', width: '100%'}}>{game.name}</Text>
          </CardItem>
        </Card>
      </ListItem>
    );
  }
}
