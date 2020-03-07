import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MovieInfo from '../screens/movieInfo';
import GenreList from '../screens/genreList';
import Home from '../screens/home';
const Stack = createStackNavigator();

export default class BrowseNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Browse" component={Home} />
        <Stack.Screen name="Genre List" component={GenreList} />
        <Stack.Screen name="Movie Info" component={MovieInfo} />
      </Stack.Navigator>
    );
  }
}
