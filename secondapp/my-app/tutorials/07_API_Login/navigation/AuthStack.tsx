import Ionicons from '@expo/vector-icons/Ionicons';
import { createDrawerNavigator, DrawerToggleButton } from "@react-navigation/drawer";

import { drawerAssets, fallbackAsset } from '../datas/assets';
import { DrawerNavPublicList } from "../datas/navTypes";
import { combinedTheme } from '../datas/theme'

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from '../screens/LoginScreen';

const Drawer = createDrawerNavigator<DrawerNavPublicList>();



export default function AuthStack(){

  console.warn("AUTH STACK")

  return (
    <>
    <Drawer.Navigator 
      initialRouteName="Login"
      backBehavior="history"
      screenOptions={({ route, navigation }) => ({
        drawerIcon: ({ color, size, focused }) => { //set the icon:
          const myAsset = drawerAssets.find((asset) => asset.name === route.name) || fallbackAsset;
          return <Ionicons name={myAsset.icon} size={size} color={color} />
        },
        drawerPosition: 'right',
        headerLeft: () => null,
        // headerTitle: () => '',
        headerRight: () => (
          <DrawerToggleButton
            tintColor={combinedTheme.colors.primary}
          ></DrawerToggleButton>
        )
      })}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
    </>
  )
}


