import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Feather';
import InputManual from './InputManual';

export default class Results extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }

  componentDidMount(){
    barcode = this.props.barcode
    console.log(barcode)
    let url = 'https://world.openfoodfacts.org/api/v0/product/' + barcode +'.json'
    return fetch(url)
    .then( (response) => response.json() )
    .then ( (responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson,
      })
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
            <Text>Product not found</Text>
          </View>
        );
      } else {
        const palm_ingredients_total = this.state.dataSource.product.ingredients_from_palm_oil_n;
        const palm_ingredients_list = this.state.dataSource.product.ingredients_from_palm_oil_tags;
        const maybe_total = this.state.dataSource.product.ingredients_that_may_be_from_palm_oil_n;
        const maybe_list = this.state.dataSource.product.ingredients_that_may_be_from_palm_oil_tags;
        const product_name = this.state.dataSource.product.product_name

          if (palm_ingredients_total > 0 || (palm_ingredients_list != undefined && palm_ingredients_list.length > 0)) {
          return(
          <View style={styles.container}>
            <Text style={styles.text}> {product_name} </Text>
            <Text style={styles.text}> There are {palm_ingredients_total} ingredient from Palm oil in this </Text>
            <Animatable.Text animation="zoomInUp"><Icon name="thumbs-down" size={150} color="#ffff"/></Animatable.Text>
          </View>
          );
          } else if (maybe_total > 0 ||
            //I think these aren't used because that's where the typo was.
            ( maybe_list != undefined && maybe_list.length > 0 ) ) {

            return(
              <View style={styles.container}>
                <Text style={styles.text}> {product_name} </Text>
                <Text style={styles.text}> These ingredients: {maybe_list} may involve the use of palm oil </Text>
                <Animatable.Text animation="zoomInUp"><Icon name="thumbs-down" size={150} color="#ffff"/></Animatable.Text>
              </View>
              );
          } else if (palm_ingredients_total === 0 && (palm_ingredients_list == undefined ||
            palm_ingredients_list.length == 0) && maybe_total === 0
            && (maybe_list == undefined || maybe_list.length == 0)
            ) {
          console.log("NOOO PALM OIL")
          return(
            <View style={styles.container}>
              <Text style={styles.text}> {product_name} </Text>
              <Text style={styles.text}> No palm oil!</Text>
              <Animatable.Text animation="zoomInUp"><Icon name="thumbs-up" size={150} color="#ffff"/></Animatable.Text>
            </View>
            );
          } else {
          return(
            <View style={styles.container}>
              <Text style={styles.text}> {product_name} </Text>
              <Text style={styles.text}> No information regarding presence of palm oil for this product</Text>
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
    // fontFamily: 'Argana new'
  }
});
