import React from 'react';

import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import InputScreen from './screens/InputScreen';
import ResultsScreen from './screens/ResultsScreen';
import InfoScreen from './screens/InfoScreen';

export default createStackNavigator(
  {
    HomeScreen: HomeScreen,
    InputScreen: InputScreen,
    ResultsScreen: ResultsScreen,
    InfoScreen: InfoScreen
  },
  {
    initialRouteName: 'HomeScreen',
  },
);
