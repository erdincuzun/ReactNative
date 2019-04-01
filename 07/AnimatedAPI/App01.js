import React from 'react';
import { Animated, Text, View } from 'react-native';

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // opacity için giriş değeri: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate süresi
      this.state.fadeAnim,            // animate edilecek değişken
      {
        toValue: 1,                   // opacity son değer: 1 (opaque)
        duration: 10000,              // Süre ayarı
      }
    ).start();                        // Animasyon başlasın.
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Özel Animasyon View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // opacity değerini animated değerine bağla
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

// FadeInView bileşenini animasyon için kullanabilirsiniz. 
// FadeInView bileşeni içindeki çocuklar animasyona katılır.
export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FadeInView style={{width: 250, height: 55, backgroundColor: 'red'}}>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
        </FadeInView>
      </View>
    )
  }
}