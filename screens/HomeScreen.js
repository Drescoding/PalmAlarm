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
    await Font.loadAsync({'amatic': require('../assets/fonts/Amatic.ttf')});
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

              <View>
              <TouchableHighlight style={styles.buttonContainer}
                onPress={() => this.props.navigation.navigate('InfoPageScreen')}>
                <Text style={styles.buttonText}>Info</Text>
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
    fontFamily: 'amatic',
    fontSize: 80,
    color: 'gray',
    marginTop: 40
  },
  buttonContainer: {
    borderRadius: 10,
    width: 250,
    height: 55,
    marginBottom: 150,
    backgroundColor: "#E4DFC1"
  },

  buttonText: {
    backgroundColor: "transparent",
    fontSize: 30,
    textAlign: 'center',
    padding: 10,
    color: 'gray'
  }
});

export default HomeScreen;
