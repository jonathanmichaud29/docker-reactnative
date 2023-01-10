# docker-reactnative

## Change the Metro IP address for mobile access to your computer

Detect your hostname IP address by using the CLI : hostname -I
  It should display all IP addresses on your machine, pick the first one
Edit docker-compose file to change the IP address of the environment variable REACT_NATIVE_PACKAGER_HOSTNAME.
  This address is used for the Metro URL

## Build the image and validate access to your app
docker-compose up -d --build

Open web browser and go to http://localhost:19006

Use your Android "Expo Go" app and scan the QR code, available in your docker container logs

## local npm installations libraries

npm install -g expo-cli

nvm use v16.15.0
cd secondapp
npx -y create-expo-app -t expo-template-blank-typescript

cd my-app
npm install ts-node typescript
npm install @expo/webpack-config

https://docs.expo.dev/guides/typescript/#starting-from-scratch-using-a-typescript-template

npx expo install react-dom react-native-web

npx expo install @expo/vector-icons
npx expo install expo-image-picker

npx expo install react-native-gesture-handler react-native-reanimated
npm install -D @babel/plugin-proposal-export-namespace-from

npx expo install react-native-view-shot expo-media-library

change babel.config.js by adding this in the return: 
  plugins: [
    "@babel/plugin-proposal-export-namespace-from",
    'react-native-reanimated/plugin'
  ],

npm install dom-to-image
npm i --save-dev @types/dom-to-image

## Navigation Libraries
npx expo install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs @react-navigation/drawer
npx expo install react-native-screens react-native-safe-area-context
npx expo install react-native-gesture-handler react-native-reanimated

## Theming Libraries
npx expo install styled-components
npx expo install @types/styled-components @types/styled-components-react-native -- --save-dev



