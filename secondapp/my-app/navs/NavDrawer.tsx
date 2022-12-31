import { Button, useColorScheme } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { Theme, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator, DrawerNavigationOptions } from '@react-navigation/drawer';

import { DrawerStackParamList } from '../data-structure/types';
import { DrawerNavAssetNames } from '../data-structure/navs';

import ScreenPublic from '../screens/ScreenPublic';
import ScreenPrivate from '../screens/ScreenPrivate';
import ScreenHome from '../screens/ScreenHome';
import ScreenTutorial from '../screens/ScreenTutorial';

const DrawerTab = createDrawerNavigator<DrawerStackParamList>();

/**
 * https://reactnavigation.org/docs/drawer-navigator/#options
 */
const MyDrawerNavigationProps: DrawerNavigationOptions = {
  /* drawerPosition: 'right',
  headerStyle:{
    backgroundColor:'grey',
    
  },
  headerTitleAlign: 'center',
  headerRight: {

  },
  sceneContainerStyle:{
    backgroundColor:'#eee'
  } */
  /* headerTitleContainerStyle:{
    flexDirection:'row-reverse'
  } */
};

/* console.warn(DefaultTheme);
export const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
}; */

export default function NavDrawer() {
  
  /*/ 
  // Mobile user preference between light and dark theme 
  const userMobilePreference: Theme = useColorScheme() === 'dark' ? DarkTheme : DefaultTheme;
  /*/
  const userMobilePreference: Theme = DefaultTheme;
  /**/
  return (
    <NavigationContainer theme={userMobilePreference}>
      <DrawerTab.Navigator initialRouteName='Home'>
        <DrawerTab.Screen name="Home" component={ScreenHome} />
        <DrawerTab.Screen name="TutorialExpo" component={ScreenTutorial} />
        <DrawerTab.Screen name="Public" component={ScreenPublic} />
        <DrawerTab.Screen name="Private" component={ScreenPrivate} />
      </DrawerTab.Navigator>
    </NavigationContainer>
  );
}