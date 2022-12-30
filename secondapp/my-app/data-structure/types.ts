import type { NativeStackScreenProps } from '@react-navigation/native-stack';
/* 
export type UnusedStackParamList = {
  Feed: undefined;
  Message: undefined;
};

export type ScreenMessageProps = NativeStackScreenProps<UnusedStackParamList, 'Message'>;
export type ScreenFeedProps = NativeStackScreenProps<UnusedStackParamList, 'Feed'>;
 */

export type BottomStackParamList = {
  Login: undefined;
  Info: undefined;
};

export type ScreenLoginProps = NativeStackScreenProps<BottomStackParamList, 'Login'>;
export type ScreenInfoProps = NativeStackScreenProps<BottomStackParamList, 'Info'>;


export type DrawerStackParamList = {
  Home: undefined;
  TutorialExpo: undefined;
  Public: undefined;
  Private: undefined;
};

export type ScreenHomeProps = NativeStackScreenProps<DrawerStackParamList, 'Home'>;
export type ScreenTutorialExpoProps = NativeStackScreenProps<DrawerStackParamList, 'TutorialExpo'>;
export type ScreenPublicProps = NativeStackScreenProps<DrawerStackParamList, 'Public'>;
export type ScreenPrivateProps = NativeStackScreenProps<DrawerStackParamList, 'Private'>;
