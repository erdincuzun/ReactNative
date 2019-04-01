import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

class LogoTitle extends React.Component {
    render() {
      return (
        <Image
          source={require('./spiro.png')}
          style={{ width: 30, height: 30 }}
        />
      );
    }
  }
  
type Props = {};
export default class Ekran5 extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
        title: navigation.getParam('digerParam', 'Geçerli Değer, Değer Gelmezse'),
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
        },
    };
  };

  render() {
    return (
      <View>
        <Text>5. ekran...</Text>        
      </View>
    );
  }
}