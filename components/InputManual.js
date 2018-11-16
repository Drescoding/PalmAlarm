import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Alert, TouchableOpacity, Button } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

class InputManual extends React.Component {
  state = {
    barCodeNumber: ""
  };

  handleBarCode = (text) => {
    this.setState({barCodeNumber: text})
  }

  _hello = () => {
    return 3700211234221;
  }
  render() {

    return (
      <View>
        <TextInput
          placeholder = "Manually enter barcode"
          onChangeText = {this.handleBarCode}
        />

         <Button
          title="Submit number!"
          onPress = { () => {
            console.log(this.state.barCodeNumber) ;
            this.props.navigateToResult();
          }}
          />
      </View>
    )
  }
}

export default InputManual;
