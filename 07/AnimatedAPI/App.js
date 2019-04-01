import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
 
export default class App extends Component<{}>
{
    constructor(){
        super();
 
        this.state = { 
          flex_Direction_Value: 'row' 
        }
 
        if (Platform.OS === 'android')
          UIManager.setLayoutAnimationEnabledExperimental(true)
    }
 
    Toggle_Change_Layout = () =>
    {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
 
        if( this.state.flex_Direction_Value == 'row' )
            this.setState({ flex_Direction_Value: 'column' });
        else
            this.setState({ flex_Direction_Value: 'row' });
    }
 
    render()
    {
        return(
            <View style = {[ styles.MainContainer, { flexDirection: this.state.flex_Direction_Value }]}>
                <View style = { styles.Block1 }>
                    <Text style = { styles.TextStyle }>Kutu 1</Text>
                </View>
                <View style = { styles.Block2 }>
                  <Text style = { styles.TextStyle }>Kutu 2</Text>
                </View>
                <TouchableOpacity 
                style = {[ styles.TouchableOpacityStyle, { bottom: 0 }]}
                onPress = { this.Toggle_Change_Layout } 
                activeOpacity = { 0.5 } >
                    <Text style = { styles.TextStyle }>Flex Direction Değiştir!!!</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
 
const styles = StyleSheet.create(
  {
    MainContainer:
      {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: (Platform.OS === 'ios') ? 20 : 0
      },
      Block1:
      {
          width: 140,
          height: 140,
          backgroundColor: '#00BCD4',
          alignItems: 'center',
          justifyContent: 'center'
      },
      Block2:
      {
          width: 140,
          height: 140,
          backgroundColor: '#4CAF50',
          alignItems: 'center',
          justifyContent: 'center'
      },
      TextStyle:
      {
          color: 'white',
          fontSize: 18,
          textAlign: 'center'
      },
      TouchableOpacityStyle:
      {
          position: 'absolute',
          left: 0,
          right: 0,
          backgroundColor: '#607D8B',
          padding: 10,
          marginBottom:1
      }
  
  });