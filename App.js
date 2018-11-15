import React from 'react';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import InputScreen from './screens/InputScreen';
import ResultsScreen from './screens/ResultsScreen';
import InputManual from './components/InputManual';


export default createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
  InputScreen: {
    screen: InputScreen,
  },
  ResultsScreen: {
    screen: ResultsScreen,
  }
}, {
  initialRouteName: 'HomeScreen',
});
