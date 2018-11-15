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
            console.log(this.state.barCodeNumber) 
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'ResultsScreen' })
              ],
            }))
          }}
          />
      </View>
      
    )
  }
}

export default InputManual;

