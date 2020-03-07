import React from 'react';
import _ from 'lodash';
import {SafeAreaView, Text, FlatList, ScrollView, StyleSheet, TextInput} from 'react-native';
import MoviesService from './../../services/movie';
import MovieListItem from './../common/movieListItem';

export default class SearchPage extends React.Component {
  state = {
    currentPage: 1,
    movies: [],
    loading: true,
    allLoaded: false,
    searchTerm: '',
  };

  styles = StyleSheet.create({
    container: {
      flex: 1,
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
    try {
      const movies = await MoviesService.search(this.state.searchTerm, 1);
      this.setState({movies, loading: false, currentPage: 1});
    } catch (e) {
      console.log(e);
    }
  };

  async componentDidMount() {
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

  getListData() {
    return (
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
    );
  }

  render() {
    return (
      <SafeAreaView style={this.styles.container}>
        <Text>{this.props.route.params.genre.name}</Text>
        {this.getListData()}
      </SafeAreaView>
    );
  }
}
