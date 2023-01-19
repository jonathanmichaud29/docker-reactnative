# Tutorial : Nested Navigation of React-Navigation

This tutorials aims to to create a deep nested navigation using [Nesting navigators](https://reactnavigation.org/docs/nesting-navigators) from React-Navigation.

By reusing the previous tutorial navigations, we want to create the application structure as the following:
- Home (default page)
- Items List
  - Item Details
- Tabs
  - Tab Alpha (default entrypoint when the user click on the drawer "Tabs")
  - Tab Beta
  - Tab Charlie

Each navigation has its role:
- Drawer : Act as the main navigation. 
-- The Homepage is the default drawer route and it includes links to a specific stack or tab screen.
- Stack : This navigation is accessible from the "Listing" entrypoint of the drawer. 
-- It displays a list of items, each of them link to a deeper level of the stack. By reaching one deeper level, it is possible to go back at the Listing screen by using the appropriate icon, next to the Item Title.
-- An excellent usage of this type of navigation is to quicly go back and forth betweens a list of items and the details of an item.
- Bottom : This navigation is accessible from the "Tabs" entrypoint of the drawer.
-- An excellent usage of this type of navigation is to act as a secondary navigation

### Tutorial particularities

Each screen contains black buttons. "Go Back" and "Pop to top" can throw application errors, mostly from the homepage. This is intented to better understand their behavior and limitations. You can read more about them in [React Navigation Documentation](https://reactnavigation.org/docs/navigating)
- Go Home : Navigate directly to the homepage
- Go Back : The Drawer and Tabs navigations defines the button behavior using the history, instead of going back to the initial route
- Pop to Top : Go back to the first screen in the stack

## NPM Libraries

```bash
npx expo install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs @react-navigation/drawer
```