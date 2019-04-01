import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

type Props = {};
export default class Ekran2 extends Component<Props> {
  render() {
    return (
      <View>
        <Text>2. ekran...</Text>
        <Button
          title="Ana ekrana git..."
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
      </View>
    );
  }
}