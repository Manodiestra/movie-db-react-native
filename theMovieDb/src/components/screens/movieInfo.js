import React from 'react';
import {SafeAreaView, Text} from 'react-native';

export default class MovieInfo extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Hello, I am a {this.props.route.params.movie}</Text>
      </SafeAreaView>
    );
  }
}
