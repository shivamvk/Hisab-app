import React, { Component } from 'react';
import { View, Text } from 'react-native';

class HomeScreen extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <View>
            <Text style={{
                color: 'black',
                fontSize: 14
            }}>Home screen</Text>
        </View>
    }
}

export default HomeScreen;