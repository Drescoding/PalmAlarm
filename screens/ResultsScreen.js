import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import Results from '../components/Results'

class ResultsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        < Results />
        <Text>Results Screen</Text>
        <Button
        title="Scan"
        onPress={ () => {
          this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'InputScreen' })
            ],
          }))
        }}
        />
        <Button
        title="Home"
        onPress={ () => {
          this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'HomeScreen' })
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

export default ResultsScreen;
