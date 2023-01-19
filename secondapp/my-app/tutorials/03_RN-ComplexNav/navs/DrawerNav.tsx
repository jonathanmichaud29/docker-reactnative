import { createDrawerNavigator, DrawerToggleButton } from "@react-navigation/drawer";
import Ionicons from '@expo/vector-icons/Ionicons';

import { ComplexNavParamList } from "../datas/types";
import { drawerAssets, fallbackAsset } from '../datas/assets';

import HomeScreen from "../screens/HomeScreen";
import ListingScreen from "../screens/ListingScreen";
import TabsScreen from "../screens/TabsScreen";

const Drawer = createDrawerNavigator<ComplexNavParamList>();

export default function DrawerNav() {
  return (
    <Drawer.Navigator 
      initialRouteName="Home"
      backBehavior="history"
      screenOptions={({ route, navigation }) => ({
        drawerIcon: ({ color, size, focused }) => { //set the icon:
          const myAsset = drawerAssets.find((asset) => asset.name === route.name) || fallbackAsset;
          return <Ionicons name={myAsset.icon} size={size} color={color} />
        },
        drawerActiveTintColor: '#e91e63',
        drawerPosition: 'right',
        headerLeft: () => '',
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