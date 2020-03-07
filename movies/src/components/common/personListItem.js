import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class PersonListItem extends React.Component {
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
  getCoverArtUri() {
    return 'http://image.tmdb.org/t/p/w185' + this.props.person.profile_path;
  }

  render() {
    console.log('props keys', Object.keys(this.props.person));
    return (
      <TouchableOpacity
        style={this.styles.container}
        onPress={() => {
          this.props.navigation.navigate('Person Info', {
            person: this.props.person,
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
          <Text style={this.styles.movieTitle}>{this.props.person.name}</Text>
          <Text>Gender: {this.props.person.gender}</Text>
          <Text>Popularity: {this.props.person.popularity}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
