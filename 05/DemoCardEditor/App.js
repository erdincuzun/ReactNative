import React from 'react';
import { StyleSheet, Text, View, Image, Button, ActivityIndicator } from 'react-native';
import { Images, Colors, Metrics } from './App/Themes';
import StarWarsCard from './App/Components/StarWarsCard'

/*
  Displays information about Jedi
*/
export default class App extends React.Component {

  constructor(props) {
    super(props);
    //see what props App.js is constructed with:
    console.log(JSON.stringify(props));
  }

  //this is our default state
  state = {
    readOnly: false
  }

  render() {

    return (
      <View style={styles.container}>
         <StarWarsCard readOnly={this.state.readOnly} />
         <Button title="Save Values!" onPress={() => this.setState({readOnly: true})}/>
      </View>
    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.snow,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
