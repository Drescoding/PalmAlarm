import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

import InputScanner from '../components/InputScanner';
import InputManual from '../components/InputManual';

class InputScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      barcode: '123123123'
    }
  }

  myCallback(dataFromChild) {
    this.setState({barcode: dataFromChild});
    console.log('InpScreen'+ this.state.barcode)
  }

  render() {
    return (
      <View style={styles.container}>
        <InputScanner navigateToResult={() => this.props.navigation.navigate('ResultsScreen')}/>
        <Text>Input Screen</Text>
        <Text>{this.state.barcode}</Text>
        <InputManual
        callBackFromParent={this.myCallback.bind(this)}
        navigateToResult={() => this.props.navigation.navigate('ResultsScreen', {barcode: this.state.barcode})}

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
