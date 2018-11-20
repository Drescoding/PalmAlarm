import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableHighlight } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import Results from '../components/Results'

class ResultsScreen extends React.Component {
  static navigationOptions = {
    header: null,
    };

  render() {
    const barcode = this.props.navigation.getParam('barcode', 'Default: No barcode');
    return (
      <View style={styles.container}>
        <Results barcode={barcode}/>
        <TouchableHighlight
        style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('InputScreen')}>
        <Text style={styles.buttonText}>Scan</Text>
        </TouchableHighlight>
        <TouchableHighlight
        style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('HomeScreen')}>
        <Text style={styles.buttonText}>Home</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A7051',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    borderRadius: 8,
    width: 225,
    height: 40,
    marginBottom: 10,
    backgroundColor: "#E4DFC1"
  },
  buttonText: {
    backgroundColor: "transparent",
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    color: 'gray'
  }
});

export default ResultsScreen;
