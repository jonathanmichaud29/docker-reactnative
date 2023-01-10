import { ExpoConfig } from 'expo/config';

// In SDK 46 and lower, use the following import instead:
// import { ExpoConfig } from '@expo/config-types';

const config: ExpoConfig = {
  name: 'my-app',
  slug: 'my-app',
  icon: "./assets/icon.png",
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/icon.png",
      backgroundColor: "#FFFFFF"
    }
  },
  androidStatusBar: {
    translucent: false,
    backgroundColor: "#fff",
  },
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#25292e"
  },
  userInterfaceStyle: "automatic",
};

export default config;