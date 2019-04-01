import React, { Component } from 'react';
import {  StyleSheet, Text, View, Animated} from 'react-native'

const dizi = []
for (let i = 0; i < 500; i++) {
  dizi.push(i)
}

export default class App extends Component {
  constructor () {
    super()
    this.animasyonDegeri = []
    dizi.forEach((value) => {
      this.animasyonDegeri[value] = new Animated.Value(0)
    })
  }

  componentDidMount () {
    this.animate()
  }

  animate () {
    const animasyonlar = dizi.map((item) => {
      return Animated.timing(
        this.animasyonDegeri[item],
        {
          toValue: 1,
          duration: 50
        }
      )
    })
    Animated.sequence(animasyonlar).start()
  }

  render () {
    const animasyonlar = dizi.map((a, i) => {
      return <Animated.View key={i} 
      style={{opacity: this.animasyonDegeri[a], height: 20, width: 20, backgroundColor: 'red', marginLeft: 3, marginTop: 3}} />
    })

    return (
      <View style={styles.container}>
        {animasyonlar}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})