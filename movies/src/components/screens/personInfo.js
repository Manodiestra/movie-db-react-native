import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions, ScrollView, FlatList} from 'react-native';
import PersonDetails from '../../services/personDetails';

export default class PersonInfo extends React.Component {
  state = {
    person: null,
  };
  styles = StyleSheet.create({
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
    movieTitle: {
      fontSize: 24,
    }
  });
  getPortrait() {
    return (
      'http://image.tmdb.org/t/p/w342' +
      this.props.route.params.person.profile_path
    );
  }
  getCoverArtUri(path) {
    return 'http://image.tmdb.org/t/p/w342' + path;
  }
  getGender(gender) {
    switch (gender) {
      case 1:
        return 'Female';
      case 2:
        return 'Male';
    }
  }
  async loadPersonDetails() {
    try {
      const person = await PersonDetails.query(this.props.route.params.person.id);
      this.setState({person});
    } catch (e) {
      console.log(e);
    }
  }
  getDeathDay(death) {
    if (death == null) {
      return null;
    }
    return (
      <Text>Deathday: {this.state.person.deathday}</Text>
    )
  }
  componentDidMount() {
    this.loadPersonDetails();
  }
  render() {
    if (this.state.person === null) {
      return <Text>Loading Person Details</Text>;
    }
    console.log('person', this.state.person);
    console.log('person keys', Object.keys(this.state.person));
    return (
      <ScrollView>
        <View>
          <Image
            source={{
              uri: this.getPortrait(),
            }}
            style={this.styles.coverImage}
          />
        </View>
        <View style={this.styles.infoContainer}>
          <Text style={this.styles.title}>{this.state.person.name}</Text>
          <Text>Gender: {this.getGender(this.state.person.gender)}</Text>
          <Text>Popularity: {this.state.person.popularity}</Text>
          <Text>Birthday: {this.state.person.birthday}</Text>
          <Text>Place of Birth: {this.state.person.place_of_birth}</Text>
          {this.getDeathDay(this.state.person.deathday)}
          <Text>Biography: {this.state.person.biography}</Text>
          <Text style={this.styles.title}>Starred In:</Text>
          <FlatList
            data={this.props.route.params.person.known_for}
            renderItem={item => {
              console.log(item);
              return (
                <View>
                  <Text style={this.styles.movieTitle}>{item.item.title}</Text>
                  <Text>{item.item.release_date}</Text>
                  <Image
                    source={{
                      uri: this.getCoverArtUri(item.item.backdrop_path),
                    }}
                    style={this.styles.coverImage}
                  />
                </View>
              );
            }}
            keyExtractor={item => `movie_${item.title}`}
          />
        </View>
      </ScrollView>
    );
  }
}
