import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import Results from './components/Results';


export default class App extends React.Component {
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
      console.log(responseJson.product.product_name)
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

      return (

        <View style={styles.container}>
          <Text>Hi there!</Text>
          <Text> {this.state.dataSource.product.product_name} </Text>
          <Text> There are {this.state.dataSource.product.ingredients_from_palm_oil_n} ingredients from Palm oil in this </Text>
        </View>

      );
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
