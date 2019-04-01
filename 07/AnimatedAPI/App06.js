import React, { Component } from 'react';
import { Animated, Easing, View, Button} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.springDegeri = new Animated.Value(0);
  }

  springOynat () {
    this.springDegeri.setValue(0.3)
    Animated.spring(
      this.springDegeri,
      {
        toValue: 1,
        friction: 1
      }
    ).start()
  }

  render() {
    return (
      <View style={{flex: 1, marginTop: 100, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        onPress={this.springOynat.bind(this)}
        title="Spring Test"
        color="#841584"
      />
        <Animated.Image
          style={{ width: 227, height: 200, transform: [{scale: this.springDegeri}] }}
          source={require('./img/reactjs.png')}/>
      </View>
    )
  }
}