import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Alert, TouchableOpacity, Button } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

class InputManual extends React.Component {
   

  render() {

    return (
      <View>
        <TextInput
          placeholder = "Manually enter barcode"
          onChangeText = {this.handleBarCode}
        />
          
      
      </View>
      
    )
  }
}

export default InputManual;

