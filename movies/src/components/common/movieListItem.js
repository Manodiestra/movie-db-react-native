import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

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
    coverImage: {
      width: 130,
      height: 130,
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
    return someWords.substring(0, 80) + '...';
  }
  getCoverArtUri() {
    return 'http://image.tmdb.org/t/p/w185' + this.props.movie.backdrop_path;
  }

  render() {
    return (
      <TouchableOpacity
        style={this.styles.container}
        onPress={() => {
          this.props.navigation.navigate('Movie Info', {
            movie: this.props.movie,
          });
        }}>
        <View style={this.styles.coverArt}>
          <Image
            source={{
              uri: this.getCoverArtUri(),
            }}
            style={this.styles.coverImage}
          />
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
      </TouchableOpacity>
    );
  }
}
