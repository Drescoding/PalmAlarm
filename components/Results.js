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
      barcode: 737628064502,
    }
  }

  componentDidMount(){
    let url = 'https://world.openfoodfacts.org/api/v0/product/' + this.state.barcode +'.json'
    return fetch(url)
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
            <Text style={styles.text}> {this.state.dataSource.product.product_name} </Text>
            <Text style={styles.text}> There are {this.state.dataSource.product.ingredients_from_palm_oil_n} ingredient from Palm oil in this </Text>
            <Animatable.Text animation="zoomInUp"><Icon name="thumbs-up" size={150} color="#ffff"/></Animatable.Text>
          </View>
          );
          } else {
            return(
              <View style={styles.container}>
                <Text style={styles.text}> {this.state.dataSource.product.product_name} </Text>
                <Text style={styles.text}> There are {this.state.dataSource.product.ingredients_from_palm_oil_n} ingredient from Palm oil in this </Text>
                <Animatable.Text animation="zoomInUp"><Icon name="thumbs-down" size={150} color="#ffff"/></Animatable.Text>
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
    backgroundColor: '#829D96',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 30,
    fontFamily: 'Argana new'
  }
});
