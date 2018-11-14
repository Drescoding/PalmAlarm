import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class Results extends React.Component {
  state = {
    data: ''
  }

  componentDidMount() {
   fetch("https://world.openfoodfacts.org/api/v0/product/737628064502.json", {method: 'GET'})
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(responseJson => {
      this.setState([{ data: responseJson }]);
    })
  }

  render(){
    return (
      <View>
      <Text>"Hello"</Text>
      <FlatList
        data ={this.state.data}
        renderItem={({item}) =>
        <View>
        <Text>{item.product} {item.ingredients_from_palm_oil_n}</Text>
        </View>
      }
      keyExtractor={(item, index) => index.toString()}
      />
      </View>
    );
  }
}
