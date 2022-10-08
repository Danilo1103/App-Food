import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../components/Home";
import Menu from "../components/Menu";
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconn from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator();

export const BottomTab = () => {
    return (
        <Tab.Navigator
        screenOptions={ ({route}) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName = '';
                switch (route.name){
                    case 'Home':
                        iconName = focused ? 'home-sharp' : 'home-outline';
                        break;
                    case 'Menu':
                        iconName = focused ? 'ios-fast-food' : 'fast-food-outline';
                        break;
                }
                return <Icon name={iconName} size={size} color={color} />
                ,<Iconn name={iconName} size={size} color={color} />
            }
        })}>
            <Tab.Screen name="Home" component={ Home }/>
            <Tab.Screen name="Menu" component={ Menu }/>
        </Tab.Navigator>
    )
}