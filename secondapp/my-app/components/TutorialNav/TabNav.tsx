import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import { TutorialNavParamList, NavAssetNames } from "./types";

import AboutScreen from "./AboutScreen";
import HomeScreen from "./HomeScreen";
import ContactScreen from './ContactScreen';

const Tab = createBottomTabNavigator<TutorialNavParamList>();

export default function TabNav() {
  return (
    <Tab.Navigator initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        tabBarLabel: NavAssetNames[route.name].label,
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons name={NavAssetNames[route.name].icon} size={36} color="black"   />
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  )
}