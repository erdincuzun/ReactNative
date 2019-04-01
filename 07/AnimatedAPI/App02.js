import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View, Image, Easing} from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.donusDegeri = new Animated.Value(0);
    }

    componentDidMount() {
        this.dondur();
    }

    dondur() {
        this.donusDegeri.setValue(0)
        Animated.timing(
            this.donusDegeri,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => this.dondur())
    }

    render() {
        const don = this.donusDegeri.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Animated.Image
            style = {{ width: 140, height: 140, 
                        transform: [{
                        rotate: don
                    }] } }
            source={require('./img/reactjs.png')}
            />
            </View>    
        );
    }
}