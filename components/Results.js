import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Results extends React.Component {
  getData() {
  return fetch("https://world.openfoodfacts.org/api/v0/product/737628064502.json")
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(responseJson => {
      this.setState({ data: responseJson });
    })
  }

  render(){
    return (
      <View>
      <Text>
        {this.state.data}
      </Text>
      </View>
    )
  }
}
