import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Feather';

export default class Results extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }

  componentDidMount(){
    return fetch('https://world.openfoodfacts.org/api/v0/product/737628064502.json')
    .then( (response) => response.json() )
    .then ( (responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson,
      })
      console.log(responseJson.status_verbose)
    })

    .catch((error) => {
      console.log(error)
    })

  }

  render() {

    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    } else {

      if (this.state.dataSource.status_verbose == "product not found") {
        return(
          <View style={styles.container}>
            <Text>No product found</Text>
          </View>
        );
      } else {
          if(this.state.dataSource.product.ingredients_from_palm_oil_n == 0){
          return(
          <View style={styles.container}>
            <Text> {this.state.dataSource.product.product_name} </Text>
            <Text> There are {this.state.dataSource.product.ingredients_from_palm_oil_n} ingredient from Palm oil in this </Text>
            <Animatable.Text animation="zoomInUp"><Icon name="thumbs-up" size={150} color="#444"/></Animatable.Text>
          </View>
          );
          } else {
            return(
              <View style={styles.container}>
                <Text> {this.state.dataSource.product.product_name} </Text>
                <Text> There are {this.state.dataSource.product.ingredients_from_palm_oil_n} ingredient from Palm oil in this </Text>
                <Animatable.Text animation="zoomInUp"><Icon name="thumbs-down" size={150} color="#444"/></Animatable.Text>
              </View>
              );
          }
      }
    }
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
