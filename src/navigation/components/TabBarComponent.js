import React from 'react';
import { View, Text } from 'react-native';
import { BottomTabBar } from 'react-navigation-tabs';

class TabBarComponent extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <BottomTabBar {...this.props} />
    }
}

export default TabBarComponent;