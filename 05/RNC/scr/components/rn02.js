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
import {Title} from './Title';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={globalStyles.styles.container}>
        <Title>Proje Başlığı!</Title>
      </View>
    );
  }
}
