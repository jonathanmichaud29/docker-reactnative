# Tutorial : Basic usage of React-Navigation

This tutorials aims to separate the different types of navigations available by [React-Navigation](https://reactnavigation.org/docs/getting-started/)

These are the navigations types used
- Drawer (default)
- Stack
- Bottom

## Default navigation type
To change the navigation types between Drawer/Stack/Tab, edit the `EntryTutorial.tsx` file.

Change the component within NavigationContainer for one of the following. All modules are already imported in this file. 
- DrawerNav
- StackNav
- TabNav

### DrawerNav particularities

You will find two hamburgers icons:
- The icon on the left (black color) is the default position from react-navigation. 
- The icon on the right (blue color) reuse the same component DrawerToggleButton.

You should not use both icons in production. I keep both for the sake of this tutorial


## NPM Libraries

```bash
npx expo install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs @react-navigation/drawer

npx expo install react-native-screens react-native-safe-area-context
npx expo install react-native-gesture-handler react-native-reanimated
```