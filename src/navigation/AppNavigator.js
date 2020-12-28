import React from 'react';
import { BottomTabBar, createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../modules/home/HomeScreen';
import { createStackNavigator } from 'react-navigation-stack';
import TabBarComponent from './components/TabBarComponent';
import SettingsScreen from '../modules/settings/SettingsScreen';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import AddNewEntryScreen from '../modules/entry/AddNewEntryScreen';

const AppBottomTabNavigator = createBottomTabNavigator(
    {
        Home: { screen: HomeScreen },
        Add: {screen: AddNewEntryScreen},
        Settings: {screen: SettingsScreen},
    },
    {
        initialRouteName: 'Home',
        tabBarComponent: (props) => <TabBarComponent {...props}/>,
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({focused, horizontal, tintcolor}) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = focused? 'home': 'home-outline'
                } else if (routeName === 'Settings') {
                    iconName = focused? 'cog': 'cog-outline';
                } else if(routeName === 'Add') {
                    iconName = 'add'
                }
                return <Icon name={iconName} size={25} color={focused? 'tomato': 'grey'} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'grey'
        }
    }
)

const AppStack = createStackNavigator(
    {
        HomeScreen: {
            screen: AppBottomTabNavigator,
            navigationOptions: ({navigation}) => ({
                headerShown: false,
                gestureDirection: 'horizontal'
            })
        }
    }
)

const AppContainer = createAppContainer(AppStack)

export default AppContainer;