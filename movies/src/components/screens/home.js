import React from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
// This is how you get flex grid with native base
// import { Col, Row, Grid } from 'react-native-easy-grid';
import {Container, Text, ListItem} from 'native-base';
import GenreService from '../../services/genres';

export default class FruitsPage extends React.Component {
  state = {
    genres: [],
  };

  styles = StyleSheet.create({
    genreName: {
      fontSize: 24,
    },
  });

  async getMovies() {
    try {
      let genres = await GenreService.getGenres();
      this.setState({genres});
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <Container>
        <FlatList
          data={this.state.genres}
          renderItem={itemData => {
            return (
              <ListItem
                button
                onPress={() => {
                  this.props.navigation.navigate('Genre List', {
                    genre: itemData.item,
                  });
                }}>
                <Text style={this.styles.genreName}>{itemData.item.name}</Text>
              </ListItem>
            );
          }}
          keyExtractor={item => item.id + '' + item.name}
        />
      </Container>
    );
  }
}
