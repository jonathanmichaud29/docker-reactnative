import { NavigationContainer } from "@react-navigation/native";

import DrawerNav from './navs/DrawerNav';

export default function ColorThemes() {
  return(
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  )
}