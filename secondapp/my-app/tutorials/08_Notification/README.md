# Tutorial : Create App Notification

Simulate Android notifications with Firebase Cloud Messaging (FCM)


## NPM Librairies

```bash
npx expo install expo-notifications expo-device
npm install -g eas-cli

```

## Extras

[Expo Notifications overview](https://docs.expo.dev/push-notifications/overview/)

[Expo Push Notifications Setup](https://docs.expo.dev/push-notifications/push-notifications-setup/)

[Expo Notifications Tool](https://expo.dev/notifications)

[Missing Subscription Type](https://github.com/expo/expo/issues/11783)


## Test EAS

```bash
npm install -g eas-cli
npx expo install expo-updates
eas login
eas update:configure
eas build:configure
npm install expo-dev-client


```