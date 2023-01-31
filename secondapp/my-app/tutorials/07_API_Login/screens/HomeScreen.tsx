import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DrawerNavHomeProps } from "../datas/navTypes";

import { StackNavParamList } from "../datas/navTypes";
const Stack = createNativeStackNavigator<StackNavParamList>();

import UserListScreen from "./UserListScreen";
import UserDetailsScreen from './UserDetailsScreen';

export default function HomeScreen(props: DrawerNavHomeProps) {
  console.warn("HOME SCREEN")
  const { navigation } = props;

  return (
    <Stack.Navigator initialRouteName="UserList">
      <Stack.Screen name="UserList" component={UserListScreen} />
      <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
    </Stack.Navigator>
  )
}
