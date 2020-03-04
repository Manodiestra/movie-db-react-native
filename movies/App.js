import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BrowseNavigator from './src/components/navigators/browse';
import Info from './src/components/screens/info';

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={BrowseNavigator} />
          <Tab.Screen name="Info" component={Info} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
