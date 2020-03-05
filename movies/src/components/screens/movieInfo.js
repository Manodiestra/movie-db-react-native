import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

export default class MovieInfo extends React.Component {
  styles=StyleSheet.create({
    coverImage: {
      width: Dimensions.get('window').width,
      height: 300,
    },
    infoContainer: {
      padding: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  getCoverArtUri() {
    return (
      'http://image.tmdb.org/t/p/w342' +
      this.props.route.params.movie.backdrop_path
    );
  }
  render() {
    return (
      <>
        <View>
          <Image
            source={{
              uri: this.getCoverArtUri(),
            }}
            style={this.styles.coverImage}
          />
        </View>
        <View style={this.styles.infoContainer}>
          <Text style={this.styles.title}>{this.props.route.params.movie.title}</Text>
          <Text>Released: {this.props.route.params.movie.release_date}</Text>
          <Text>
            Rating: {this.props.route.params.movie.vote_average}/10 
            ({this.props.route.params.movie.vote_count})
          </Text>
          <Text>Overview: {this.props.route.params.movie.overview}</Text>
        </View>
      </>
    );
  }
}
