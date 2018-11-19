import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';
import Results from './Results';

class InputScanner extends React.Component {
  state = {
    hasCameraPermission: null,
    barcode: null,
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted'
    });
  };

  _handleBarCodeRead = async (data) => {
    const { code } = await data
    this.setState({barcode: data}, () => {this.props.callBackFromParent(this.state.barcode.data)})
    console.log(this.state.barcode.data)
    this.props.navigateToResult();
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.hasCameraPermission === null ?
          <Text>Requesting for camera permission</Text> :
        this.state.hasCameraPermission === false ?
          <Text>Camera permission is not granted</Text> :
          <BarCodeScanner
              onBarCodeRead={this._handleBarCodeRead}
              style={{ height: '100%', width: 500 }}
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'transparent',
  }
});

export default InputScanner;
