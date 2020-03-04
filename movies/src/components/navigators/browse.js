import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MovieInfo from '../screens/movieInfo';
import Home from '../screens/home';
const Stack = createStackNavigator();

export default class BrowseNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Fruits" component={Home} />
        <Stack.Screen name="Fruit" component={MovieInfo} />
      </Stack.Navigator>
    );
  }
}
