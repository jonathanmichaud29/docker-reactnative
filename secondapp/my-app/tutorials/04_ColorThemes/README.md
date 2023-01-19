# Tutorial : Theme styling with Styled-Components

This tutorial aims to manage multiple Theme for an application, like the Dark mode and Light mode switch.

There are many techniques on how to manages the visual of an application, like inline style, Component Styling and UI Libraries.

This tutorial uses the Component Styling technique with one of the largely used library : [Styled-Components](https://styled-components.com/docs/basics)

From the previous navigation tutorial, we include a new drawer screen "Theme". This screen display a Title, a List of items (title + description) and a button that toggles between the light/dark theme mode.

You can read more about [Expo and Styled-components](https://docs.expo.dev/guides/using-styled-components/)

## NPM Librairies
npx expo install styled-components
npx expo install @types/styled-components @types/styled-components-react-native -- --save-dev

### Pros and cons

You mostly have to create new component to inherith the behavior 