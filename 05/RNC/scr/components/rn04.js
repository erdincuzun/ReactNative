import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';
import * as globalStyles from '../styles/global';

export default class App extends Component {
  _onPressButton() {
    Alert.alert('Button\'a tıkladınız!!!')
  }

  render() {
    return (
      <View style={globalStyles.styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Tıkla 01"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Tıkla 02"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button 
            onPress={this._onPressButton}
            title="Tıkla 03!"
          />
          <Button
            onPress={this._onPressButton}
            title="Tamam!"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});