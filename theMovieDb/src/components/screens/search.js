import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
// This is how you get flex grid with native base
// import { Col, Row, Grid } from 'react-native-easy-grid';
import {Container, Text, ListItem} from 'native-base';

export default class Search extends React.Component {
  state = {
    movies: [
      'test movie 1',
      'test movie 1',
      'kjopinwe noew',
      'the blindside',
      'Avengers',
      'The Maze Runner',
    ],
  };

  render() {
    return (
      <Container>
        <Text>This is the Search Page</Text>
        <FlatList
          data={this.state.fruits}
          renderItem={itemData => {
            return (
              <ListItem
                button
                onPress={() => {
                  this.props.navigation.navigate('MovieInfo', {
                    movie: itemData.item,
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
