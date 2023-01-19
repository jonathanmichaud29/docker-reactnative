# React-Native examples with Expo and Typescript, using Docker

This repos contains multiple tutorials for building React Native application for mobiles. 

The aim of those tutorials is to be able to publish a native application on Android and iOS with [Expo](https://expo.dev/). Each tutorial goals is defined later in this document.

TypeScript is a requirement for myself, as it helps to reach a better understanding and code. During my learning process, most documentations does not include its usage so I have to figure it out.

## First local installation with docker

Expo use [Metro](https://docs.expo.dev/guides/customizing-metro/) to bundle JavaScript and assets. When the application runs, Metro shows a QR code containing and URL. This URL should point to your computer IP address. To find you Ubuntu IP address, use this command line

```bash
hostname -I
```

It should display all IP addresses on your machine, pick the first one.

Edit the `docker-compose.yml` file and copy-paste your IP address on the environment variable `REACT_NATIVE_PACKAGER_HOSTNAME`.

### How did I build my docker image

Install NPM libraries expo-cli using node v16.15.0

I followed the [Expo doc](https://docs.expo.dev/guides/typescript/#starting-from-scratch-using-a-typescript-template) for TypeScript usage 

```bash
nvm use v16.15.0
npm install -g expo-cli

# Initialize the expo app with a blank TypeScript template
cd ./secondapp
npx -y create-expo-app -t expo-template-blank-typescript

# Add typescript configuration files
cd ./my-app
npm install ts-node typescript

# Add Expo dependencies to run this application on the web
npx expo install react-dom react-native-web @expo/webpack-config
```

### Other NPM libraries 

```bash

# Use Expo overhead for icon and camera usage
npx expo install @expo/vector-icons
npx expo install expo-image-picker
npx expo install react-native-view-shot expo-media-library

# Use Gesture Handlers
npx expo install react-native-screens react-native-safe-area-context
npx expo install react-native-gesture-handler react-native-reanimated
npm install -D @babel/plugin-proposal-export-namespace-from

# Save DOM element to an image, with TypeScript
npm install dom-to-image
npm i --save-dev @types/dom-to-image
```

Edit the file `babel.config.js` by adding this in the return: 

```bash
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      'react-native-reanimated/plugin',
      'react-native-paper/babel',
    ],
  };
};
```

#### Theming Libraries

```bash
npx expo install styled-components
npx expo install @types/styled-components @types/styled-components-react-native -- --save-dev
```

## Usage : Docker build and run the application

```bash
docker-compose up -d --build
```

Open a web browser and go to http://localhost:19006

Use your Android "Expo Go" app and scan the QR code, available in your docker container logs

