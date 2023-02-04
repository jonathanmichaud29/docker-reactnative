import Ionicons from '@expo/vector-icons/Ionicons';
import { createDrawerNavigator, DrawerToggleButton } from "@react-navigation/drawer";

import { drawerAssets, fallbackAsset } from '../datas/assets';
import { DrawerNavPublicList } from "../datas/navTypes";
import { combinedTheme } from '../datas/theme'

import LoginScreen from '../screens/public/LoginScreen';
import ForgetPasswordScreen from '../screens/public/ForgetPasswordScreen';
import SignupScreen from '../screens/public/SignupScreen';
import TestNotificationScreen from '../screens/public/TestNotificationScreen';

const Drawer = createDrawerNavigator<DrawerNavPublicList>();

export default function AuthStack(){

  return (
    <Drawer.Navigator 
      initialRouteName="Login"
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
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="TestNotification" component={TestNotificationScreen} />
      <Drawer.Screen name="ForgetPassword" component={ForgetPasswordScreen} 
        options={{
          drawerItemStyle: { height: 0 }
        }}
      />
      <Drawer.Screen name="Signup" component={SignupScreen} 
        options={{
          drawerItemStyle: { height: 0 }
        }}
      />
    </Drawer.Navigator>
  )
}


