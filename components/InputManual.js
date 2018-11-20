import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Alert, TouchableHighlight, Button } from 'react-native';


class InputManual extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      barcode: ''
    }
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.textBox}
          placeholder = "Manually enter barcode"
          onChangeText = {(barcode) => {
            this.setState({barcode}, () => {this.props.callBackFromParent(this.state.barcode)})
            }
          }
        />

         <TouchableHighlight
          // style={styles.buttonText}
          onPress = { () => {
            this.props.navigateToResult();
          }}>
          <Text style={styles.buttonText}>Submit barcode</Text>
          </TouchableHighlight>

          <TouchableHighlight
           // style={styles.buttonText}
           onPress = { () => {
             this.props.navigateToResult();
           }}>
           <Text style={styles.buttonText}>Home</Text>
           </TouchableHighlight>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  textBox: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    borderRadius: 10,
    width: 250,
    height: 55,
    marginBottom: 150,
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

export default InputManual;
