import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class MovieListItem extends React.Component {
  styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    coverArt: {
      flex: 1,
      padding: 16,
    },
    listItem: {
      flex: 2,
      padding: 16,
    },
    movieTitle: {
      fontSize: 24,
    },
  });
  getBeginningOfOverview(someWords) {
    return someWords.substring(0, 70) + '...';
  }

  render() {
    console.log('the movie prop', this.props.movie);
    return (
      <View style={this.styles.container}>
        <View style={this.styles.coverArt}>
          <Text>an image</Text>
        </View>
        <View style={this.styles.listItem}>
          <Text style={this.styles.movieTitle}>{this.props.movie.title}</Text>
          <Text>Released: {this.props.movie.release_date}</Text>
          <Text>
            Rating: {this.props.movie.vote_average}/10 
            ({this.props.movie.vote_count})
          </Text>
          <Text>
            Overview: {this.getBeginningOfOverview(this.props.movie.overview)}
          </Text>
        </View>
      </View>
    );
  }
}
