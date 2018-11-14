import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Results from './components/Results';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          "Hello from the App"
        </Text>
        <Results />
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
