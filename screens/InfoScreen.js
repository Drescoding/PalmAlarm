import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, FlatList} from 'react-native';
import { AppLoading, Font } from 'expo';


class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
    };

  render() {
    return (
      <View style={styles.container}>

              <View style={styles.headerContainer}>
                <Text style={styles.text}>InfoPage</Text>

                <FlatList
                data={[
                  {key:'Up to 300 football fields of forest are cleared every HOUR to make room for palm plantations.'},
                  {key:'In the past 10 years, the orangutan population has decreased by 50 percent as the result of habitat loss from forest clearing for palm plantations.'},
                  {key:'Palm oil ranks among the U.S. Department of Labor’s top four worst industries for forced and child labor. An article by Benjamin Skinner, illustrates the deep seeds of human rights abuses prevalent in the palm industry.'},
                  {key:'Given the rate of deforestation in the past years, new estimates suggest that 98% of Indonesian and Malaysian rainforests may be completely destroyed by 2022.'},
                  {key:'There are only 6,300 Sumatran orangutans left. It is estimated that 1,000 orangutans are killed a year, a major factor in these deaths being forest clearing for palm production.'}
                ]}
                 renderItem={({item}) => <Text style={styles.infotext}>{item.key}</Text>}
                 />
              </View>

              <View>
                <TouchableHighlight style={styles.buttonContainer}
                onPress={() => this.props.navigation.navigate('HomeScreen')}>
                <Text style={styles.buttonText}>Home</Text>
                </TouchableHighlight>
              </View>

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
    width: '100%',
    height: '100%',
    backgroundColor: '#4A7051',
    resizeMode: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // marginTop: 60
    // container: {
      // flex: 1,
      // backgroundColor: '#4A7051',
      // alignItems: 'center',
      // justifyContent: 'space-evenly',
      // marginTop:60
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 60
  },
  text: {
    fontFamily: 'amatic',
    fontSize: 80,
    color: '#E4DFC1',
    marginTop: '15%',
    marginBottom:'3%'
  },
  infotext:{
    color: '#E4DFC1',
    fontSize: 20,
    padding: 10
  },
  buttonContainer: {
    borderRadius: 10,
    width: 250,
    height: 55,
    marginBottom: 100,
    backgroundColor: '#E4DFC1'
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
