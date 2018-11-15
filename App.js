import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import Results from './components/Results';

export default class App extends React.Component {

  // let url = 'https://world.openfoodfacts.org/api/v0/product/' + barcode + '.json'

 render() {
   return(
     <Results />
   )

 }

}
