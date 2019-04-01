import React, { Component } from 'react';
import { AppRegistry, View, TextInput, Text } from 'react-native';

class UselessTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
        maxLength = {40}
      />
    );
  }
}

export default class UselessTextInputMultiline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'React Native: TextInput',
    };
  }

  // If you type something in the text box that is a color, the background will change to that
  // color.
  render() {
    return (
     <View style={{
       backgroundColor: this.state.text}}>
       <UselessTextInput
         multiline = {true}
         numberOfLines = {4}
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
         style={{
            borderBottomColor: '#000000',
            borderBottomWidth: 1}}/>
         <Text>Merhaba {this.state.text} </Text>
        <Text> Kalan: {this.state.text.length} </Text>
        <Text> Kullanılan: {40-this.state.text.length} </Text>
     </View>
    );
  }
}