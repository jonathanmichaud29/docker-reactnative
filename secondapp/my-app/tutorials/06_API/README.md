# Tutorial : Make API call to

This tutorial aims to make API calls using [axios](https://www.npmjs.com/package/axios), against the website [Regres](https://reqres.in/)

We will create a navigation stack with [React-Navigation](https://reactnavigation.org/docs/native-stack-navigator). The initial screen shows a list of users. Each user can display all his details by using its ID.

## NPM Librairies

```bash
npm install axios
```

## Extras

### Theme Compatiblity React-Native-Paper and React-Navigation

React-Native-Paper does not properly set the theme on React-Navigation. Don't worry, RNP gives a procedure to merge the default styles of React-Navigation and the choosen theme of RNP. Here is the [guideline](https://callstack.github.io/react-native-paper/theming-with-react-navigation.html)