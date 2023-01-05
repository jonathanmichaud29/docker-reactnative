import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import { ComplexNavTabsProps, TabsNavAssetNames } from "../datas/types";

import ScreenTabA from "../screens/ScreenTabA";
import ScreenTabB from "../screens/ScreenTabB";
import ScreenTabC from "../screens/ScreenTabC";

const Tab = createBottomTabNavigator<ComplexNavTabsProps>();

export default function TabNav() {
  return (
    <Tab.Navigator 
      screenOptions={({ route, navigation }) => ({
        tabBarLabel: TabsNavAssetNames[route.name].label,
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons name={TabsNavAssetNames[route.name].icon} size={36} color="black"   />
        ),
      })}
    >
      <Tab.Screen name="TabA" component={ScreenTabA} />
      <Tab.Screen name="TabB" component={ScreenTabB} />
      <Tab.Screen name="TabC" component={ScreenTabC} />
    </Tab.Navigator>
  )
}