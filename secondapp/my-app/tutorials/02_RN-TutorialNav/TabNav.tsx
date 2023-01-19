import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import { TutorialNavParamList, assetNames, fallbackAsset } from "./types";

import AboutScreen from "./AboutScreen";
import HomeScreen from "./HomeScreen";
import ContactScreen from './ContactScreen';

const Tab = createBottomTabNavigator<TutorialNavParamList>();

export default function TabNav() {
  return (
    <Tab.Navigator initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        tabBarLabel: (assetNames.find((asset) => asset.name === route.name) || fallbackAsset).label,
        tabBarIcon: ({ color, size, focused }) => {
          const myAsset = assetNames.find((asset) => asset.name === route.name) || fallbackAsset;
          return <Ionicons name={myAsset.icon} size={size} color={color} />
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  )
}