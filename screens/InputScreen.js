import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

import InputScanner from '../components/InputScanner';
import InputManual from '../components/InputManual';

class InputScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <InputScanner navigateToResult={() => this.props.navigation.navigate('ResultsScreen')}/>
        <Text>Input Screen</Text>
        <InputManual navigateToResult={() => this.props.navigation.navigate('ResultsScreen')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default InputScreen;
