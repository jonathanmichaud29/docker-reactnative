import Ionicons from '@expo/vector-icons/Ionicons';
import { createDrawerNavigator, DrawerToggleButton } from "@react-navigation/drawer";

import { drawerPrivateAssets, fallbackAsset } from '../datas/assets';
import { DrawerNavLoggedUser } from "../datas/navTypes";
import { combinedTheme } from '../datas/theme'

import UserHomeScreen from "../screens/private/UserHomeScreen";
import UserLogoutScreen from "../screens/private/UserLogoutScreen";

const Drawer = createDrawerNavigator<DrawerNavLoggedUser>();

export default function UserStack() {

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
        headerLeft: () => null,
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
