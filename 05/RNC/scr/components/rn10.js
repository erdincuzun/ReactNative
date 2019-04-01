import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as globalStyles from '../styles/global';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      things: [],
      key: 0
    }
  }

  add = () => {       
    const k = this.state.key + 1
    const newThing = (<Text key={k}>Yeni Metin {k}</Text>);
    this.state.things.push(newThing)
    this.setState({
        key: k
    });    
  }

  render() {
    const Arr = this.state.things.map((a, i) => {
        return <View key={i}>{ a }</View>                            
      })

    return (
      <View style={globalStyles.styles.container}>
      { Arr }
        {/* <Text>{this.state.key}</Text>
        <Text>{this.state.things.length}</Text> */}
        <Button onPress={this.add} title='Metin Ekle'/>
      </View>
    );
  }
}