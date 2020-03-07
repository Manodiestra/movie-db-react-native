import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

export default class PersonInfo extends React.Component {
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
      this.props.route.params.person.profile_path
    );
  }
  render() {
    console.log('person keys', Object.keys(this.props.route.params.person));
    return (
      <>
        <View>
          <Text>Person Info Page</Text>
          <Image
            source={{
              uri: this.getCoverArtUri(),
            }}
            style={this.styles.coverImage}
          />
        </View>
        <View style={this.styles.infoContainer}>
          <Text style={this.styles.title}>{this.props.route.params.person.name}</Text>
          <Text>Gender: {this.props.route.params.person.gender}</Text>
          <Text>Popularity: {this.props.route.params.person.popularity}</Text>
          <Text>Stared In: {this.props.route.params.person.known_for[0].title}</Text>
        </View>
      </>
    );
  }
}
