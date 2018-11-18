import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import Results from '../components/Results'

class ResultsScreen extends React.Component {
  render() {
    const barcode = this.props.navigation.getParam('barcode', 'Default: No barcode');
    return (
      <View style={styles.container}>
        <Results barcode={barcode}/>
        <Text>The barcode is: {JSON.stringify(barcode)}</Text>
        <Text>Results Screen</Text>
        <Button
        title="Scan"
        onPress={() => this.props.navigation.navigate('InputScreen')}
        />
        <Button
        title="Home"
        onPress={() => this.props.navigation.navigate('HomeScreen')}
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
