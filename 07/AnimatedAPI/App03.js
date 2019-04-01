import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View, Image, Easing, TouchableHighlight, ScrollView} from 'react-native';

export default class App extends Component {
  constructor () {
  	super()
    this.animatedValue = new Animated.Value(0)
  }

  animate (easing) {
    this.animatedValue.setValue(0)
      Animated.timing(
        this.animatedValue,
        {
          toValue: 1,
          duration: 1000,
          easing
        }
    ).start()
  }

  render () {
    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 260]
    })

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.block, {marginLeft} ]} />
        <ScrollView>
      	<Text style={{textAlign: 'center'}}>Daha fazla animasyon için scroll yapabilirsiniz.</Text>
      	<MyButton easing='Bounce' onPress={this.animate.bind(this, Easing.bounce)} />
    	  <MyButton easing='Cubic' onPress={this.animate.bind(this, Easing.cubic)} />
        <MyButton easing='Back' onPress={this.animate.bind(this, Easing.back(2))} />
        <MyButton easing='Elastic' onPress={this.animate.bind(this, Easing.elastic(2))} />
        <MyButton easing='Ease' onPress={this.animate.bind(this, Easing.ease)} />
        <MyButton easing='InOut' onPress={this.animate.bind(this, Easing.inOut(Easing.quad))} />
        <MyButton easing='In' onPress={this.animate.bind(this, Easing.in(Easing.quad))} />
        <MyButton easing='Out' onPress={this.animate.bind(this, Easing.out(Easing.quad))} />
        <MyButton easing='Sin' onPress={this.animate.bind(this, Easing.sin)} />
		    <MyButton easing='Linear' onPress={this.animate.bind(this, Easing.linear)} /> 
      	<MyButton easing='Quad' onPress={this.animate.bind(this, Easing.quad)} />
      	</ScrollView>
      </View>

    );
  }
}

const MyButton = ({onPress, easing}) => (
	<TouchableHighlight style={styles.MyButton}  onPress={onPress}>
    <Text>{easing}</Text>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60
  },
  MyButton: {
  	height: 60,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#ededed',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },

  block: {
  	width: 50,
    height: 50,
    backgroundColor: 'red'
  }
});