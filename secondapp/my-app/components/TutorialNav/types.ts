import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type TutorialNavParamList = {
  Home: undefined;
  About: undefined;
  Contact: undefined;
}
export type TutorialNavHomeProps = NativeStackScreenProps<TutorialNavParamList, 'Home'>;
export type ScreenTutorialNavHomeProps = NativeStackScreenProps<TutorialNavParamList, 'About'>;
export type ScreenTutorialNavContactProps = NativeStackScreenProps<TutorialNavParamList, 'Contact'>;

export const NavAssetNames = {
  Home: { 
    icon: "log-in",
    label: 'Home'
  },
  About: { 
    icon: "information",
    label: 'About'
  },
  Contact: { 
    icon: "warning-outline",
    label: 'Contact'
  },
};