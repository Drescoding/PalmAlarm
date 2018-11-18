import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Alert, TouchableOpacity, Button } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

class InputManual extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      barcode: ''
    }
  }

  componentWillMount(){

  }

  render() {
    return (
      <View>
        <TextInput
          placeholder = "Manually enter barcode"
          onChangeText = {(barcode) => {
            this.setState({barcode})
            }
          }
        />

         <Button
          title="Submit number!"
          onPress = { () => {
            console.log('Manual' + this.state.barcode) ;
            this.props.navigateToResult();
            this.props.callBackFromParent(this.state.barcode);
          }}
          />
      </View>
    )
  }

}

export default InputManual;
