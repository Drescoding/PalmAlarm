import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableHighlight } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import YouTube from 'react-native-youtube';


class InfoPageScreen extends React.Component {

  static navigationOptions = {
    header: null,
    };

  render() {
    return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.text}>
            PalmAlarm
          </Text>
        </View>

        <YouTube
            videoId="LSumTLrJzdU"   // The YouTube video ID
            play={true}             // control playback of video with true/false
            fullscreen={false}       // control whether the video should play in fullscreen or inline
            loop={false}             // control whether the video should loop when ended

            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}

            style={{ alignSelf: 'stretch', height: 300 }}
        />

        <Text style={styles.text}>
            "The palm oil and timber industries are guilty of truly horrific ecological atrocities, one of which is the systematic genocide of orangutans. When the forest is cleared, adult orangutans are generally shot on sight. 
            In the absence of bullets they are beaten, burned, tortured, mutilated and often eaten as bushmeat."
        </Text>

        <Text style={{color: 'blue'}}
            onPress={() => LinkingIOS.openURL('https://redapes.org/')}>
            Help the Orangutans.
        </Text>
        
        <Text style={{color: 'blue'}}
            onPress={() => LinkingIOS.openURL('https://blog.ted.com/orangutans_and/')}>
            Sources
        </Text>

        <View>
            <TouchableHighlight style={styles.buttonContainer}
                onPress={() => this.props.navigation.navigate('InputScreen')}>
                <Text style={styles.buttonText}>Scan</Text>
            </TouchableHighlight>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4A7051',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      borderRadius: 8,
      width: 225,
      height: 40,
      marginBottom: 10,
      backgroundColor: "#E4DFC1"
    },
    buttonText: {
      backgroundColor: "transparent",
      fontSize: 20,
      textAlign: 'center',
      padding: 10,
      color: 'gray'
    }
  });

export default InfoPageScreen;
