import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MovieInfo from '../screens/movieInfo';
import SearchPage from '../screens/searchPage';
import PersonInfo from '../screens/personInfo';

const Stack = createStackNavigator();

export default class SearchNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchPage} />
        <Stack.Screen name="Movie Info" component={MovieInfo} />
        <Stack.Screen name="Person Info" component={PersonInfo} />
      </Stack.Navigator>
    );
  }
}
