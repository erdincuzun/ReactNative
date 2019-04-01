import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

type Props = {};
export default class Ekran3 extends Component<Props> {

  render() {
    const {navigation} = this.props;
    const itemId = navigation.getParam('itemId', 'Geçerli-ID-Yok');
    const digerParam = navigation.getParam('digerParam', 'Geçerli değer, Değer gelmezse diye');

    return (
      <View>
        <Text>3. ekran...</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(digerParam)}</Text>
        <Button
          title="Tekrar Ekran 3 git... ama yeni bir itemID ile..."
          onPress={() =>
            this.props.navigation.push('Ekran3', {
              itemId: Math.floor(Math.random() * 100),
            })}
        />
        <Button
          title="Home sayfasına git"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Bir önceki sayfaya git"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}