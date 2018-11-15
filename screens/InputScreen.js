import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

import InputScanner from '../components/InputScanner';
import InputManual from '../components/InputManual';

class InputScreen extends React.Component {
  state = {
    barCodeNumber: ""
  };

  handleBarCode = (text) => {
    this.setState({barCodeNumber: text})
  }

  render() {
  var that = this;
    return (
      <View style={styles.container}>
        <InputScanner />
        <Text>Input Screen</Text>
        

        <TextInput
          placeholder = "Manually enter barcode"
          onChangeText = {this.handleBarCode}
        />

         <Button
          title="Submit number!"
          onPress = { () => {
            console.log(that.state.barCodeNumber) ;
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'ResultsScreen' })
              ],
            }))
          }}
          />
    
        <Button
        title="Scan"
        onPress={ () => {
          this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'ResultsScreen' })
            ],
          }))
        }}
        />
        
      </View>
      
    );
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

export default InputScreen;
