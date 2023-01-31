import { MD3DarkTheme, adaptNavigationTheme } from 'react-native-paper';
import { DarkTheme as NavigationDarkTheme } from "@react-navigation/native";

import merge from 'deepmerge';

// Create theme compatibility between React-Native-Paper and React-Navigation
const { DarkTheme } = adaptNavigationTheme({
  reactNavigationDark: NavigationDarkTheme,
});
export const combinedTheme = merge(MD3DarkTheme, DarkTheme);