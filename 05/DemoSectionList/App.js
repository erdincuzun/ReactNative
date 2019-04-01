import React from 'react';
import { StyleSheet, Text, View, Image, Button, ActivityIndicator, SectionList, SafeAreaView, Dimensions } from 'react-native';
import { Images, Colors, Metrics } from './App/Themes';
import StarWarsCard from './App/Components/StarWarsCard'

const {width, height} = Dimensions.get('window');
/*
  Displays information about Jedi
*/
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      jedisSectioned: [{title: 'Jedis', data:[]}],
      buttonText: 'Show me your ID Card!',
      loading: false,
      refreshing: false,
    }
    //see what props App.js is constructed with:
    console.log(JSON.stringify(props));
  }

  //async/await - ES6
  async getJedi(jediNum, jedisList) {
    try {

      // let randomNumber = Math.floor(Math.random() * 88) + 1; //Range 1 - 89
      let response = await fetch(`https://swapi.co/api/people/${jediNum}`);
      let responseJson = await response.json();

      //console.log(responseJson);

      //cleaning up our response...
      let cleanObject = {
        name: responseJson.name,
        gender: responseJson.gender,
        birthYear: responseJson.birth_year,
        height: responseJson.height,
        weight: responseJson.mass,
        hairColor: responseJson.hair_color,
        eyeColor: responseJson.eye_color,
        skinColor: responseJson.skin_color,
      }


      console.log(cleanObject);
      jedisList.push(cleanObject);
      // this.setState({jedis: [cleanObject]});

    } catch (error) {
      console.error(error);
    }
  }

  async appendJedis(count, start) {
    var jedisList = this.state.jedisSectioned[0].data.slice();
    this.setState({loading: true});
    for(i=start; i < count+start; i++) {
      await this.getJedi(i, jedisList);
    }
    this.setState({loading: false, refreshing: false, jedisSectioned: [{title: 'Jedis', data:jedisList}]});
  }

  componentDidMount() {
    this.appendJedis(3,1);
    // console.log(this.state.jedis);
  }

  listItemRenderer(item) {
    return (
      <StarWarsCard jedi={item} />
    );
  }

  async loadMore(count, start) {
    if (start > 1 && !this.state.refreshing && !this.state.loading) {
      this.setState({loading: true});
      console.log(start);
      await this.appendJedis(count,start);
    }
  }

  _keyExtractor = (item, index) => index;


  resetList = () => {
    this.setState({refreshing: true, jedisSectioned: [{title: 'Jedis', data:[]}]});
    this.appendJedis(3,1);
  }

  render() {

    return (
      <View style={styles.container}>
        <SectionList
          sections={this.state.jedisSectioned}
          onEndReached={() => this.loadMore(3,this.state.jedisSectioned[0].data.length+1)}
          renderItem={({item}) => this.listItemRenderer(item)}
          ItemSeparatorComponent = {() => (<View style={{height: 10}}/>)}
          keyExtractor={this._keyExtractor}
          contentContainerStyle = {{alignItems: 'center'}}
          renderSectionHeader={({section}) =>
            <View style={styles.header}>
              <Text style={styles.title}>{section.title}</Text>
            </View>
          }
          onRefresh = {() => this.resetList()}
          refreshing = {this.state.refreshing}
          removeClippedSubviews = {true}
          ListFooterComponent = {<ActivityIndicator />}
        />
      </View>
    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: Colors.snow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 60,
    width: width,
    backgroundColor: "#ff8080",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  title: {
    color: 'white',
    fontSize: 24
  }
});
