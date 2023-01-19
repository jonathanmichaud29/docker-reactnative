import { NavigationContainer } from "@react-navigation/native";

import DrawerNav from './DrawerNav';
import TabNav from './TabNav';
import StackNav from './StackNav';

export default function EntryTutorial(){
  return(
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  )
}