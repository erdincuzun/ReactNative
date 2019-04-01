import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

type Props = {};
export default class Ekran7 extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Ekran 7',
      headerRight: (
        <Button
          onPress={navigation.getParam('increaseCount')}
          title="+1"
          color="#000"
        />
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <View>
        <Text>{this.state.count}</Text>
      </View>
    );
  }
}