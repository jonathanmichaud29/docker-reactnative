import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import { ComplexNavTabsProps, ComplexTabsParamList } from "../datas/types";
import { tabAssetNames, fallbackAsset } from '../datas/assets';

import ScreenTabA from "../screens/ScreenTabA";
import ScreenTabB from "../screens/ScreenTabB";
import ScreenTabC from "../screens/ScreenTabC";

const Tab = createBottomTabNavigator<ComplexTabsParamList>();

export default function TabNav(props: ComplexNavTabsProps) {
  
  const { navigation } = props;

  return (
    <Tab.Navigator 
      backBehavior='history'
      initialRouteName='TabA'
      screenOptions={({ route, navigation }) => ({
        tabBarLabel: (tabAssetNames.find((asset) => asset.name === route.name) || fallbackAsset).label,
        tabBarIcon: ({ color, size, focused }) => {
          const myAsset = tabAssetNames.find((asset) => asset.name === route.name) || fallbackAsset;
          return <Ionicons name={myAsset.icon} size={size} color={color}   />
        },
      })}
    >
      <Tab.Screen name="TabA" component={ScreenTabA} />
      <Tab.Screen name="TabB" component={ScreenTabB} />
      <Tab.Screen name="TabC" component={ScreenTabC} />
    </Tab.Navigator>
  )
}