import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";

import DrawerNav from './navs/DrawerNav';

export default function ComplexNav() {
  return(
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  )
}