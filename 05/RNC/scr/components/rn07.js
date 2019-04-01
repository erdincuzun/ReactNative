import React, { Component } from 'react';
import {Text, View, FlatList, SectionList, StyleSheet } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "users": 
      [{
        "name": "Proxima Midnight",
        "email": "proxima@appdividend.com"},
      {
        "name": "Ebony Maw",
        "email": "ebony@appdividend.com"},
      {
        "name": "Black Dwarf",
        "email": "dwarf@appdividend.com"}]
    };
  }

  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.h2text}>
          Kullanıcılar
        </Text>
          <FlatList
          data={this.state.users}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View style={styles.flatview}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
          </View>
          }
          keyExtractor={item => item.email}
        />

      <SectionList
        renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
        renderSectionHeader={({section: {title}}) => (
          <Text style={{fontWeight: 'bold'}}>{title}</Text>
        )}
        sections={[
          {title: 'Title1', data: ['item1', 'item2']},
          {title: 'Title2', data: ['item3', 'item4']},
          {title: 'Title3', data: ['item5', 'item6', 'item7', 'item8']},
        ]}
        keyExtractor={(item, index) => item + index}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  marginTop: 50, justifyContent: 'center',
    alignItems: 'center', backgroundColor: '#F5FCFF',
  },
  h2text: {   marginTop: 10, fontFamily: 'Helvetica',  fontSize: 36, fontWeight: 'bold',
  },
  flatview: { justifyContent: 'center', paddingTop: 30,  borderRadius: 2,
  },
  name: {  fontFamily: 'Verdana',  fontSize: 18
  },
  email: {  color: 'red' }
});