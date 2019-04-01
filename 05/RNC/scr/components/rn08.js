import React, { Component } from 'react';
import {Text, View, FlatList, Image } from 'react-native';

export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [], page: 1, seed: 1, error: null
      };      
    }

    componentDidMount(){
        this.makeRemoteRequest();
    }
  
    makeRemoteRequest = () => {
      const { page, seed } = this.state;
      const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
      fetch(url)
        .then(res => res.json())
        .then(res => {
          this.setState({
            data: page === 1 ? res.results : [...this.state.data, ...res.results],
            error: res.error || null
          });
        })
        .catch(error => {
          this.setState({ error });
        });
    };

    render() {
      return (
        
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <FlatList 
        data={this.state.data}
        renderItem={({item}) =>
          <View>
          <Image
          style={{width: 50, height: 50}}
          source={{uri: item.picture.thumbnail}}/>
            <Text>{`${item.name.first} ${item.name.last}`}</Text>
            <Text>{item.email}</Text>
          </View>}
        keyExtractor={item => item.email}
        />
        
        </View>
      );
    }  
  }