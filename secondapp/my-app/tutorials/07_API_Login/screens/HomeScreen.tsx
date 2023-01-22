import { useMemo, useState } from "react";
import { List, IconButton, Text, Surface } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DrawerNavHomeProps } from "../datas/navTypes";
import { IUserProp } from "../datas/userTypes";

import { fetchUsers } from "../axios/regres";

import { StackNavParamList } from "../datas/navTypes";
const Stack = createNativeStackNavigator<StackNavParamList>();

import UserListScreen from "./UserListScreen";
import UserDetailsScreen from './UserDetailsScreen';

export default function HomeScreen(props: DrawerNavHomeProps) {

  const { navigation } = props;

  return (
    <Stack.Navigator initialRouteName="UserList">
      <Stack.Screen name="UserList" component={UserListScreen} />
      <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
    </Stack.Navigator>
  )
}
