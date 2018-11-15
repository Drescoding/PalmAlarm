import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

import InputScanner from '../components/InputScanner';
import InputManual from '../components/InputManual';

class InputScreen extends React.Component {


  navigate = () => {
    this.props.navigation.dispatch(StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'ResultsScreen' })
      ],
    }))
  }

  render() {
    return (
      <View style={styles.container}>
        <InputScanner />
        <Text>Input Screen</Text>
          <InputManual 
            navigateToResult={() => this.navigate()}
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
