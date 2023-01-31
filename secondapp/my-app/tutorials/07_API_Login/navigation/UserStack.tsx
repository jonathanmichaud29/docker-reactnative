import Ionicons from '@expo/vector-icons/Ionicons';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList, DrawerToggleButton } from "@react-navigation/drawer";
import { signOut } from 'firebase/auth/react-native';
import { View } from 'react-native';

import { drawerPrivateAssets, fallbackAsset } from '../datas/assets';
import { firebaseAuth } from '../datas/firebaseConfig';
import { useAuthentication } from '../datas/hooks/useFirebaseAuth';
import { DrawerNavLoggedUser } from "../datas/navTypes";
import { combinedTheme } from '../datas/theme'

import UserHomeScreen from "../screens/UserHomeScreen";
import UserLogoutScreen from "../screens/UserLogoutScreen";

const Drawer = createDrawerNavigator<DrawerNavLoggedUser>();

/* import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserHomeScreen from '../screens/UserHomeScreen';
const Stack = createNativeStackNavigator(); */

export default function UserStack() {

  const { user } = useAuthentication();
  console.warn("USER STACK")
  if( ! user ){
    console.info("great stuff")
  }
  return (
    <Drawer.Navigator 
      initialRouteName="Welcome"
      backBehavior="history"
      screenOptions={({ route, navigation }) => ({
        drawerIcon: ({ color, size, focused }) => { //set the icon:
          const myAsset = drawerPrivateAssets.find((asset) => asset.name === route.name) || fallbackAsset;
          return <Ionicons name={myAsset.icon} size={size} color={color} />
        },
        drawerPosition: 'right',
        headerLeft: () => '',
        headerRight: () => (
          <DrawerToggleButton
            tintColor={combinedTheme.colors.primary}
          ></DrawerToggleButton>
        )
      })}
    >
      <Drawer.Screen name="Welcome" component={UserHomeScreen} />
      <Drawer.Screen name="Logout" component={UserLogoutScreen} />
    </Drawer.Navigator>
  );
}
