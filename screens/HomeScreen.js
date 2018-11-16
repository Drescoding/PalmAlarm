import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, Platform} from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { font } from 'Expo';

class HomeScreen extends React.Component {

  componentDidMount() {
    Font.loadAsync({
      'Bungee': require('../assets/fonts/BungeeInline-Regular.ttf'),
    });
  }

  render() {
    return (
      <View style={styles.container}>
      <ImageBackground
          source={require('../assets/images/homeBackground.jpg')}
          style={styles.homeBackground}>
      <View style={styles.headertext}>
          <Text>PalmAlarm</Text>
      </View>
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
    resizeMode: 'stretch'
  },
  headertext: {
    color: 'white',
    flex: 1,
    alignItems: 'center',
    marginTop: '35%',
    fontFamily: 'Bungee'
  }
});

export default HomeScreen;
