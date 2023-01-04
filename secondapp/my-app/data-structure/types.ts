import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type BottomStackParamList = {
  Login: undefined;
  Info: undefined;
  Test: undefined;
};

export type ScreenLoginProps = NativeStackScreenProps<BottomStackParamList, 'Login'>;
export type ScreenInfoProps = NativeStackScreenProps<BottomStackParamList, 'Info'>;
export type ScreenTestProps = NativeStackScreenProps<BottomStackParamList, 'Test'>;


export type DrawerStackParamList = {
  Home: undefined;
  TutorialExpo: undefined;
  Public: undefined;
  Private: undefined;
  CustomNavigation: undefined;
};

export type ScreenHomeProps = NativeStackScreenProps<DrawerStackParamList, 'Home'>;
export type ScreenTutorialExpoProps = NativeStackScreenProps<DrawerStackParamList, 'TutorialExpo'>;
export type ScreenPublicProps = NativeStackScreenProps<DrawerStackParamList, 'Public'>;
export type ScreenPrivateProps = NativeStackScreenProps<DrawerStackParamList, 'Private'>;
export type ScreenCustomNavigation = NativeStackScreenProps<DrawerStackParamList, 'CustomNavigation'>;
