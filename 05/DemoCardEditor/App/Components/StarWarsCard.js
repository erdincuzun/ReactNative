import React from 'react';
import { StyleSheet, Text, View, Image, Button, ActivityIndicator, TextInput } from 'react-native';
import { Images, Colors, Metrics } from '../Themes';

/*
  Displays a Jedi ID Card
*/
export default class StarWarsCard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: "",
      gender: "",
      year: "",
      height: "",
      weight: ""
    }
    //See what props our StarWarsCard renders with
    console.log(JSON.stringify(props));
  }

  render() {

    return (
      <View style={styles.card}>

        <View style={styles.pictureView}>
          <Image style={styles.picture}
           source={Images.jedi1}/>

          <View style={styles.pictureDetails}>
            {!this.props.readOnly && (
              <View>
                <TextInput
                  value={this.state.name}
                  style={styles.textInput}
                  onChangeText={(text) => this.setState({name: text})}
                  placeholder="Name"
                />
                <TextInput
                  value={this.state.gender}
                  style={styles.textInput}
                  onChangeText={(text) => this.setState({gender: text})}
                  placeholder="Gender"
                />
              </View>
            )}
            {this.props.readOnly && (
              <View>
                <Text>{this.state.name}</Text>
                <Text>{this.state.gender}</Text>
              </View>
            )}
          </View>
        </View>

        <View style={styles.jediRowItem}>
          <Text style={ { fontWeight: 'bold' } }>Birth Year</Text>
          <Text style={ { fontWeight: 'bold' } }>Height</Text>
          <Text style={ { fontWeight: 'bold' } }>Weight</Text>
        </View>
        {!this.props.readOnly && (
          <View style={[styles.jediRowItem, { marginTop: 0 }]}>
            <TextInput
              value={this.state.year}
              style={styles.textInput}
              onChangeText={(text) => this.setState({year: text})}
              keyboardType="numeric"
              placeholder="Year"
            />
            <TextInput
              value={this.state.height}
              style={styles.textInput}
              onChangeText={(text) => this.setState({height: text})}
              placeholder="Height"
              keyboardType="numeric"
            />
            <TextInput
              value={this.state.weight}
              style={styles.textInput}
              onChangeText={(text) => this.setState({weight: text})}
              placeholder="Weight"
              keyboardType="numeric"
            />
          </View>
        )}
        {this.props.readOnly && (
          <View style={[styles.jediRowItem, { marginTop: 0 }]}>
            <Text>{this.state.year}</Text>
            <Text>{this.state.height}</Text>
            <Text>{this.state.weight}</Text>
          </View>
        )}

        {// <View style={styles.jediRowItem}>
        //   <Text style={ { fontWeight: 'bold' } }>Hair Color</Text>
        //   <Text style={ { fontWeight: 'bold' } }>Eye Color</Text>
        //   <Text style={ { fontWeight: 'bold' } }>Skin Color</Text>
        // </View>
        // <View style={[styles.jediRowItem, { marginTop: 0 }]}>
        //   <TextInput style={styles.textInput}/>
        //   <TextInput style={styles.textInput}/>
        //   <TextInput style={styles.textInput}/>
        // </View>
      }
      </View>
    );
  }

}

const styles = StyleSheet.create({
  card: {
    padding: Metrics.doubleBaseMargin,
    width: Metrics.screenWidth * .9,
    borderWidth: Metrics.borderWidth,
    borderRadius: Metrics.buttonRadius
  },
  pictureView: {
    marginLeft: Metrics.marginHorizontal,
    marginRight: Metrics.marginHorizontal,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  picture: {
    height: Metrics.images.large,
    width: Metrics.images.large,
    borderRadius: Metrics.images.large * 0.5
  },
  pictureDetails: {
    flexDirection: 'column',
    marginLeft: Metrics.marginHorizontal,
    marginRight: Metrics.marginHorizontal,
  },
  jediRowItem: {
    marginTop: Metrics.marginVertical,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textInput: {
    borderBottomWidth: 1,
    width: 50
  }
});
