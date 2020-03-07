import React from 'react';
import _ from 'lodash';
import {SafeAreaView, Text, FlatList, ScrollView, StyleSheet, TextInput} from 'react-native';
import {Picker, Form} from 'native-base';
import MoviesService from './../../services/movie';
import MovieListItem from './../common/movieListItem';

export default class SearchPage extends React.Component {
  state = {
    currentPage: 1,
    movies: [],
    people: [],
    loading: true,
    allLoaded: false,
    searchTerm: '',
    selected: 'movies',
  };

  styles = StyleSheet.create({
    picker: {
      width: 120,
    },
    container: {
      flex: 1,
    },
    textInput: {
      margin: 16,
      borderBottomWidth: 1,
    },
  });

  constructor() {
    super();
    // .debounce() is a lowdash function that will wait the specified amount of
    // idle time to pass before the function passed to it runs again
    this.getMoviesFromSearchQuery = _.debounce(
      this.getMoviesFromSearchQuery,
      1000,
    );
  }

  getMoviesFromSearchQuery = async () => {
    if (this.state.selected === 'movies') {
      try {
        const movies = await MoviesService.search(this.state.searchTerm, 1);
        this.setState({movies, loading: false, currentPage: 1});
      } catch (e) {
        console.log(e);
      }
    }
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm === this.state.searchTerm) {
      return;
    }
    this.getMoviesFromSearchQuery();
  }

  loadMoreMovies = () => {
    if (this.state.loading) {
      return;
    }
    if (this.state.allLoaded) {
      return;
    }

    this.setState({loading: true}, async () => {
      try {
        const newMovies = await MoviesService.search(
          this.state.searchTerm,
          this.state.currentPage + 1,
        );
        this.setState(state => {
          const newState = {...state};
          newState.movies = [...state.movies, ...newMovies];
          newState.currentPage = state.currentPage + 1;
          newState.loading = false;
          if (newMovies.length === 0) {
            newState.allLoaded = true;
          }
          return newState;
        });
      } catch (e) {
        console.log(e);
      }
    });
  };

  onValueChange(value) {
    this.setState({
      currentPage: 1,
      movies: [],
      people: [],
      loading: true,
      allLoaded: false,
      searchTerm: '',
      selected: value,
    });
  }

  render() {
    return (
      <SafeAreaView style={this.styles.container}>
        <Form>
          <Picker
            note
            mode="dropdown"
            style={this.styles.picker}
            selectedValue={this.state.selected}
            onValueChange={this.onValueChange.bind(this)}>
            <Picker.Item label="Movies" value="movies" />
            <Picker.Item label="People" value="people" />
          </Picker>
          <TextInput
            value={this.state.searchTerm}
            style={this.styles.textInput}
            onChangeText={newText =>
              this.setState({searchTerm: newText, movies: []})
            }
          />
        </Form>
        <FlatList
          data={this.state.movies}
          renderItem={dataEntry => {
            return (
              <MovieListItem
                movie={dataEntry.item}
                navigation={this.props.navigation}
              />
            );
          }}
          onEndReached={this.loadMoreMovies}
          keyExtractor={movie => `movie_${movie.id}`}
        />
      </SafeAreaView>
    );
  }
}
