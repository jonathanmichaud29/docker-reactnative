import { createDrawerNavigator, DrawerToggleButton } from "@react-navigation/drawer";
import Ionicons from '@expo/vector-icons/Ionicons';

import { TutorialNavParamList, NavAssetNames } from "./types";

import AboutScreen from "./AboutScreen";
import HomeScreen from "./HomeScreen";
import ContactScreen from './ContactScreen';

const Drawer = createDrawerNavigator<TutorialNavParamList>();

export default function DrawerNav() {
  return (
    <Drawer.Navigator initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        drawerIcon: ({ color, size, focused }) => { //set the icon:
          return ( //the icon will be an image
            <Ionicons name={NavAssetNames[route.name].icon} size={32} color="green" />
          );
        },
        drawerActiveTintColor: '#e91e63',
        drawerPosition: 'right',
        // headerLeft: () => '',
        // headerTitle: () => '',
        headerRight: () => (
          <DrawerToggleButton
            tintColor="blue"
          ></DrawerToggleButton>
        )
      })}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
    </Drawer.Navigator>
  )
}