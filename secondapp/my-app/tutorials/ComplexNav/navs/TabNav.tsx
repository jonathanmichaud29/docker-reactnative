import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import { ComplexTabsParamList } from "../datas/types";
import { tabAssetNames, fallbackAsset } from '../datas/assets';

import ScreenTabA from "../screens/ScreenTabA";
import ScreenTabB from "../screens/ScreenTabB";
import ScreenTabC from "../screens/ScreenTabC";

const Tab = createBottomTabNavigator<ComplexTabsParamList>();

export default function TabNav() {
  return (
    <Tab.Navigator 
      screenOptions={({ route, navigation }) => ({
        tabBarLabel({focused, children, color, position}) {
          const myAsset = tabAssetNames.find((asset) => asset.name === route.name) || fallbackAsset;
          return myAsset.label;
        },
        tabBarIcon: ({ color, size, focused }) => {
          const myAsset = tabAssetNames.find((asset) => asset.name === route.name) || fallbackAsset;
          return <Ionicons name={myAsset.icon} size={36} color="black"   />
        },
      })}
    >
      <Tab.Screen name="TabA" component={ScreenTabA} />
      <Tab.Screen name="TabB" component={ScreenTabB} />
      <Tab.Screen name="TabC" component={ScreenTabC} />
    </Tab.Navigator>
  )
}