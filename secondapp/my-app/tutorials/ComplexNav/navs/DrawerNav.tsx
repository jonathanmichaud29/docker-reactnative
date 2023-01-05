import { createDrawerNavigator, DrawerToggleButton } from "@react-navigation/drawer";
import Ionicons from '@expo/vector-icons/Ionicons';

import { ComplexNavParamList, DrawerNavAssetNames } from "../datas/types";

import HomeScreen from "../screens/HomeScreen";
import ListingScreen from "../screens/ListingScreen";
import TabsScreen from "../screens/TabsScreen";

const Drawer = createDrawerNavigator<ComplexNavParamList>();

export default function DrawerNav() {
  return (
    <Drawer.Navigator initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        drawerIcon: ({ color, size, focused }) => { //set the icon:
          return ( //the icon will be an image
            <Ionicons name={DrawerNavAssetNames[route.name].icon} size={32} color="green" />
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
      <Drawer.Screen name="Listing" component={ListingScreen} />
      <Drawer.Screen name="Tabs" component={TabsScreen} />
    </Drawer.Navigator>
  )
}