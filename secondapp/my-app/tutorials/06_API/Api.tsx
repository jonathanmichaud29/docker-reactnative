import { Provider as PaperProvider, MD3DarkTheme, adaptNavigationTheme } from 'react-native-paper';
import { NavigationContainer, DarkTheme as NavigationDarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import merge from 'deepmerge';

import { StackNavParamList } from "./datas/navTypes";

import HomeScreen from "./screens/HomeScreen";
import UserScreen from './screens/UserScreen';

const Stack = createNativeStackNavigator<StackNavParamList>();

// Create theme compatibility between React-Native-Paper and React-Navigation
const { DarkTheme } = adaptNavigationTheme({
  reactNavigationDark: NavigationDarkTheme,
});
const CombinedTheme = merge(MD3DarkTheme, DarkTheme);


export default function Api(){
  
  return(
    <PaperProvider theme={CombinedTheme}>
      <NavigationContainer theme={CombinedTheme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="User" component={UserScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}