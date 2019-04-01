import React, { Component } from 'react';
import {Text, Picker, View } from 'react-native';
import * as globalStyles from '../styles/global';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'java',
    };
  }

  render() {    
    return (
      <View style={globalStyles.styles.container}>
        <Picker selectedValue={this.state.language}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="C#" value="cs" />
        <Picker.Item label="Python" value="py" />
        </Picker>
        <Text>Seçilen değer: {this.state.language}</Text>
      </View>
    );
  }
}