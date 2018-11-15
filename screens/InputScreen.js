import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

import InputScanner from '../components/InputScanner';


class InputScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <InputScanner />
        <Text>Input Screen</Text>
        <Button
        title="Submit text"
        onPress={ () => {
          this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'ResultsScreen' })
            ],
          }))
        }}
        />
        <Button
        title="Scan"
        onPress={ () => {
          this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'ResultsScreen' })
            ],
          }))
        }}
        />
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
