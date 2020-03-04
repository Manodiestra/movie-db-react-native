import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchPage from '../screens/search';
import MovieInfo from '../screens/movieInfo';
const Stack = createStackNavigator();

export default class SearchNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchPage} />
        {/* <Stack.Screen name="Movie" component={MovieInfo} /> */}
      </Stack.Navigator>
    );
  }
}
