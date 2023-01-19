import { NavigationContainer } from "@react-navigation/native";

import DrawerNav from './navs/DrawerNav';

export default function ComplexNav() {
  return(
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  )
}