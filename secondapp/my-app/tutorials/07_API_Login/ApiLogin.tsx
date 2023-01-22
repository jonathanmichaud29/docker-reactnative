import { Provider as PaperProvider, MD3DarkTheme, adaptNavigationTheme } from 'react-native-paper';
import { NavigationContainer, DarkTheme as NavigationDarkTheme } from "@react-navigation/native";
import { createDrawerNavigator, DrawerToggleButton } from "@react-navigation/drawer";
import Ionicons from '@expo/vector-icons/Ionicons';
import merge from 'deepmerge';

import { drawerAssets, fallbackAsset } from './datas/assets';
import { DrawerNavParamList } from "./datas/navTypes";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from './screens/LoginScreen';

const Drawer = createDrawerNavigator<DrawerNavParamList>();

// Create theme compatibility between React-Native-Paper and React-Navigation
const { DarkTheme } = adaptNavigationTheme({
  reactNavigationDark: NavigationDarkTheme,
});
const CombinedTheme = merge(MD3DarkTheme, DarkTheme);

export default function ApiLogin(){
  
  return(
    <PaperProvider theme={CombinedTheme}>
      <NavigationContainer theme={CombinedTheme}>
        <Drawer.Navigator 
          initialRouteName="Home"
          backBehavior="history"
          screenOptions={({ route, navigation }) => ({
            drawerIcon: ({ color, size, focused }) => { //set the icon:
              const myAsset = drawerAssets.find((asset) => asset.name === route.name) || fallbackAsset;
              return <Ionicons name={myAsset.icon} size={size} color={color} />
            },
            drawerPosition: 'right',
            headerLeft: () => '',
            // headerTitle: () => '',
            headerRight: () => (
              <DrawerToggleButton
                tintColor={CombinedTheme.colors.primary}
              ></DrawerToggleButton>
            )
          })}
        >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Login" component={LoginScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}