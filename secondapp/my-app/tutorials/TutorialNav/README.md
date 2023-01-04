# How to switch between navigation types

To change the navigation behavior between Stack/Tab/Drawer, edit the EntryTutorial.tsx file.

Change the component within NavigationContainer for one of the following. All modules are already imported in this file. 
- DrawerNav (default)
- StackNav
- TabNav

# DrawerNav particularities

You will find two hamburgers icons:
- The icon on the left (black color) is the default position from react-navigation. 
- The icon on the right (blue color) reuse the same component DrawerToggleButton.

You should not use both icons 