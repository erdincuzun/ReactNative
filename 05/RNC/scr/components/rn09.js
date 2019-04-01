import React, { Component } from 'react';
import {Text, View, Alert, Button } from 'react-native';
import * as globalStyles from '../styles/global';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sonuc: '"Alert kapatılsın mı?"',
          button_visible: true
        };      
    }

    _degistir01 = () => {
        this.setState({sonuc: '"Daha sonra sor" seçildi. "Alert kapatılsın mı?"'})
    }

    _onPressButton = () =>{
        Alert.alert(
            'Merhaba Alert',
            'Alert işlemini kabul ediyor musunuz!',
            [
              {text: 'Daha sonra sor', onPress: this._degistir01},
              {
                text: 'Vazgeç',
                onPress: () => this.setState({sonuc: 'Vazgeç" seçildi. "Alert kapatılsın mı?"'}),
                style: 'cancel',
              },
              {text: 'Tamam', onPress: () => this.setState({sonuc: 'Kapatıldı, R+R yapıp tekrar başlatın.', button_visible:false})},
            ],
            {cancelable: false},
        )
     }
    
    render() {
        if (this.state.button_visible){
            return (
                <View style={globalStyles.styles.container}>
                    <Button
                      onPress={this._onPressButton}
                      title="Alert Göster"
                    />
                    <Text>{this.state.sonuc}</Text>
                </View>
              );
        }
        else
        {
            return (
                <View style={globalStyles.styles.container}>
                    <Text>{this.state.sonuc}</Text>
                </View>
              );
        }
        
    }
}