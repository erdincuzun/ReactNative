import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

type Props = {};
export default class Home extends Component<Props> {
  render() {
    return (
      <View>
        <Text>Merhaba React Navigation!</Text>
        <Text>Bu ekran ana ekran...</Text>
        <Button
          title="Ekran 2'ye git..."
          onPress={() =>
            this.props.navigation.navigate('Ekran2')
          }
        />
        <Button
          title="Ekran 3'ye git..."
          onPress={() =>
            this.props.navigation.navigate('Ekran3', {
              itemId: 186,
              digerParam: 'İstediğiniz herhangi bir şey yazabilirsiniz.',
            })
          }
        />
        <Button
          title="Ekran 4'ye git..."
          onPress={() =>
            this.props.navigation.navigate('Ekran4')
          }
        />
        <Button
          title="Ekran 5'ye git..."
          onPress={() => 
            this.props.navigation.navigate('Ekran5', {
              digerParam: 'Başlık bilgisi: Params',
            })
          }
        />
        <Button
          title="Ekran 6'ye git..."
          onPress={() =>
            this.props.navigation.navigate('Ekran6')
          }
        />
        <Button
          title="Ekran 7'ye git..."
          onPress={() =>
            this.props.navigation.navigate('Ekran7')
          }
        />
      </View>
    );
  }
}