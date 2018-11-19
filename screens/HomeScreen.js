import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight} from 'react-native';
import { AppLoading, Font } from 'expo';


class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
    };

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
            style={styles.container}
            >

              <View style={styles.headerContainer}>
                <Text style={styles.text}>PalmAlarm</Text>
              </View>

              <View>
              <TouchableHighlight style={styles.buttonContainer}
                onPress={() => this.props.navigation.navigate('InputScreen')}>
                <Text style={styles.buttonText}>Scan</Text>
                </TouchableHighlight>
              </View>

        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  headerContainer: {
    alignItems: 'center',
  },
  text: {
    fontFamily: 'argana',
    fontSize: 65,
    color: 'gray',
  },
  buttonContainer: {
    borderRadius: 10,
    width: 250,
    height: 55,
    backgroundColor: "white"
  },

  buttonText: {
    backgroundColor: "transparent",

    fontSize: 30,
    textAlign: 'center',
    padding: 10,
  }
});

export default HomeScreen;
