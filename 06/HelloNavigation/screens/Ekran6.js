import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./img/home.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

type Props = {};
export default class Ekran6 extends Component<Props> {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };

  render() {
    return (
      <View>
        <Text>6. ekran...</Text>
      </View>
    );
  }
}