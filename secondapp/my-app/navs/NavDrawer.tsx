import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerStackParamList } from '../data-structure/types';

import ScreenPublic from '../screens/ScreenPublic';
import ScreenPrivate from '../screens/ScreenPrivate';
import ScreenHome from '../screens/ScreenHome';
import ScreenTutorial from '../screens/ScreenTutorial';

const DrawerTab = createDrawerNavigator<DrawerStackParamList>();

export default function NavDrawer() {

  return (
    <NavigationContainer>
      <DrawerTab.Navigator initialRouteName='Public'
        /* screenOptions={({ route }) => ({
          tabBarLabel: BottomNavAssetNames[route.name].label,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={BottomNavAssetNames[route.name].icon} size={24} color="black"   />
          )
        })} */
      >
        <DrawerTab.Screen name="Home" component={ScreenHome} />
        <DrawerTab.Screen name="TutorialExpo" component={ScreenTutorial} />
        <DrawerTab.Screen name="Public" component={ScreenPublic} />
        <DrawerTab.Screen name="Private" component={ScreenPrivate} />
      </DrawerTab.Navigator>
    </NavigationContainer>
  );
}