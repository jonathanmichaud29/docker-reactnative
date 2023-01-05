import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Ionicons from '@expo/vector-icons/Ionicons';

import { ComplexStackParamList } from "../datas/types";

import StackListingScreen from '../screens/StackListingScreen';
import StackItemScreen from '../screens/StackItemScreen';

const Stack = createNativeStackNavigator<ComplexStackParamList>();

export default function StackNav() {
  return (
    <Stack.Navigator initialRouteName="StackListing"
      /* screenOptions={({ route, navigation }) => ({
        tabBarLabel: NavAssetNames[route.name].label,
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons name={NavAssetNames[route.name].icon} size={36} color="black"   />
        ),
      })} */
    >
      <Stack.Screen name="StackListing" component={StackListingScreen} />
      <Stack.Screen name="ListItem" component={StackItemScreen} />
    </Stack.Navigator>
  )
}