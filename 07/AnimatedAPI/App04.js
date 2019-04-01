import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View, Easing} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.animasyonDegeri = new Animated.Value(0);
  }

  componentDidMount() {
    this.oynat()
  }

  oynat() {
    this.animasyonDegeri.setValue(0)
    Animated.timing(
      this.animasyonDegeri,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    ).start(() => this.oynat())
  }

  render() {
    const marginLeft = this.animasyonDegeri.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300]
    })

    const opacity = this.animasyonDegeri.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    })

    const movingMargin = this.animasyonDegeri.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 300, 0]
    })

    const textSize = this.animasyonDegeri.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [18, 32, 18]
    })

    const rotateX = this.animasyonDegeri.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '180deg', '0deg']
    })

    return (
      <View style={{flex: 1, marginTop: 100}}>
        <Animated.View style={{ marginLeft, height: 30, width: 40, backgroundColor: 'red'}} />
        <Animated.View style={{ opacity,marginTop: 10, height: 30, width: 40, backgroundColor: 'blue'}} />
        <Animated.View style={{ marginLeft: movingMargin, marginTop: 10, height: 30, width: 40, backgroundColor: 'orange'}} />
        <Animated.Text style={{ fontSize: textSize, marginTop: 10, color: 'green'}} > Animasyonlu yazı </Animated.Text>
        <Animated.View style={{ transform: [{rotateX}], marginTop: 50, height: 50, width: 140, backgroundColor: 'black'}}>
        <Text style={{color: 'white'}}>Bu TransformX kullanıyor</Text>
        </Animated.View>
      </View>
    )
  }
}

