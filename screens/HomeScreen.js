import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { ImageBackground } from 'react-native';



class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <ImageBackground
          source={require('../assets/images/homeBackground.jpg')}
          style={styles.homeBackground}>
          <Text>Home Screen</Text>
      </ImageBackground>
        <Button
        title="Scan"
        onPress={ () => {
          this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'InputScreen' })
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
    // backgroundColor: '#fff',
    // background: 'url(./assets/images/homeBackground.jpg)'
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  }
});

export default HomeScreen;
