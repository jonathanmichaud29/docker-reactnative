import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Ionicons from '@expo/vector-icons/Ionicons';

import { TutorialNavParamList, NavAssetNames } from "./types";

import AboutScreen from "./AboutScreen";
import HomeScreen from "./HomeScreen";
import ContactScreen from './ContactScreen';

const Stack = createNativeStackNavigator<TutorialNavParamList>();

export default function StackNav() {
  return (
    <Stack.Navigator initialRouteName="Home"
      /* screenOptions={({ route, navigation }) => ({
        tabBarLabel: NavAssetNames[route.name].label,
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons name={NavAssetNames[route.name].icon} size={36} color="black"   />
        ),
      })} */
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
    </Stack.Navigator>
  )
}