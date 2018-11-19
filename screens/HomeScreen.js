import React from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, Platform} from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { AppLoading, Font } from 'expo';

class HomeScreen extends React.Component {
  state = {
    loaded: false,
  }

  componentWillMount() {
    this._loadFontsAsync();
  }
   _loadFontsAsync = async () => {
    await Font.loadAsync({'argana': require('../assets/fonts/Argana.ttf')});
    this.setState({loaded: true});
  }

  render() {
    if (!this.state.loaded) {
      return <AppLoading />;
    }
    return (
      <View style={styles.container}>
      <ImageBackground
          source={require('../assets/images/homeBackground.jpg')}
          style={styles.homeBackground}>
            <View style={styles.headertext}>
              <Text style={styles.text}>PalmAlarm</Text>
            </View>
            <View>
              <Button
                style={styles.buttonStyle}
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
      </ImageBackground>
        <Button
        title="Scan"
        onPress={() => this.props.navigation.navigate('InputScreen')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: '38%',
  },
  text: {
    fontFamily: 'argana',
    fontSize: 65,
    color: 'gray'
  },
  buttonStyle: {
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  }
});

export default HomeScreen;
