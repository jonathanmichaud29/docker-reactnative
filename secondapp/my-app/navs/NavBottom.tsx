
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomStackParamList } from '../data-structure/types';
import { BottomNavAssetNames } from '../data-structure/navs';

import ScreenInfo from '../screens/ScreenInfo';
import ScreenLogin from '../screens/ScreenLogin';

const BottomTab = createBottomTabNavigator<BottomStackParamList>();

export default function NavBottom() {

  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: BottomNavAssetNames[route.name].label,
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons name={BottomNavAssetNames[route.name].icon} size={36} color="black"   />
        )
      })}
    >
      <BottomTab.Screen name="Info" component={ScreenInfo} options={{tabBarLabel:"Info"}}/>
      <BottomTab.Screen name="Login" component={ScreenLogin} options={{tabBarLabel:"Log in"}} />
    </BottomTab.Navigator>
  );
}