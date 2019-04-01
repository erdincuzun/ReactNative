/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import * as globalStyles from '../styles/global';

const instructions = Platform.select({
  ios: 'CMD+R ile güncelleyebilirsiniz,\n' + 'Geliştirme menüsü için Cmd+D veya salla',
  android:
    'Tekrar yüklemek için ardarda iki R\'ye bas.\n' +
    'CTRL+M ile geliştirme menüsüne geçiş yapabilirsiniz.',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={globalStyles.styles.container}>
        <Text style={styles.welcome}>Merhaba RN Components!</Text>
        <Text style={styles.instructions}>Daha sistematik bir düzene geçiyoruz!!!</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
