import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
// This is how you get flex grid with native base
// import { Col, Row, Grid } from 'react-native-easy-grid';
import {Container, Text, ListItem} from 'native-base';

export default class FruitsPage extends React.Component {
  state = {
    movies: [
      'Dinosaur',
      'el gordo',
      'swis family robinsons',
      'kdiown oiwd',
      'Star Wars',
      'Avengers',
      'Tarzan',
    ],
  };

  componentDidMount() {
    
  }

  render() {
    return (
      <Container>
        <FlatList
          data={this.state.movies}
          renderItem={itemData => {
            return (
              <ListItem
                button
                onPress={() => {
                  this.props.navigation.navigate('Fruit', {
                    fruit: itemData.item,
                  });
                }}>
                <Text>{itemData.item}</Text>
              </ListItem>
            );
          }}
          keyExtractor={fruit => fruit}
        />
      </Container>
    );
  }
}
