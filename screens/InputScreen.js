import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

import InputScanner from '../components/InputScanner';
import InputManual from '../components/InputManual';

class InputScreen extends React.Component {
  static navigationOptions = {
    header: null,
    };

  constructor(props){
    super(props);
    this.state = {
      barcode: 'default'
    }
  }

  myCallback = (dataFromChild) => {
    this.setState({barcode: dataFromChild});
  }

  render() {
    return (
      <View style={styles.container}>
        <InputManual
        navigateToResult={() => this.props.navigation.navigate('ResultsScreen', {barcode: this.state.barcode})}
        navigateToHome={() => this.props.navigation.navigate('HomeScreen')}
        callBackFromParent={this.myCallback}
        />

        <InputScanner
        navigateToResult={() => this.props.navigation.navigate('ResultsScreen', {barcode: this.state.barcode})}
        callBackFromParent={this.myCallback}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#C1D1DD',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default InputScreen;
