import React, { Component } from 'react';
import {Text, View, Switch, Slider } from 'react-native';
import * as globalStyles from '../styles/global';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switch_durum: true,
      slider_durum: 50
    };
  }

  degistir = (value) => {
    this.setState({switch_durum: value})
  }

  slider_degistir(value) {
    this.setState({slider_durum: parseFloat(value)})
  }

  render() {    
    return (
      <View style={globalStyles.styles.container}>
        <Text>Switch Örneği: </Text>
        <Switch value={this.state.switch_durum} onValueChange={this.degistir}/>
        <Text>{this.state.switch_durum ? "Açık": "Kapalı"}</Text>
        <Text>{String(this.state.slider_durum)}</Text>
        <Slider
          style = {{width: 300}}
          step={1}
          maximumValue={100}
          onValueChange={this.slider_degistir.bind(this)}
          value={this.state.slider_durum}
        />
      </View>
    );
  }
}