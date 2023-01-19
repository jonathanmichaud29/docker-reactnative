import Ionicons from '@expo/vector-icons/Ionicons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type TutorialNavParamList = {
  Home: undefined;
  About: undefined;
  Contact: undefined;
}
export type TutorialNavHomeProps = NativeStackScreenProps<TutorialNavParamList, 'Home'>;
export type ScreenTutorialNavHomeProps = NativeStackScreenProps<TutorialNavParamList, 'About'>;
export type ScreenTutorialNavContactProps = NativeStackScreenProps<TutorialNavParamList, 'Contact'>;


type NavAssetProps = {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
}

export const fallbackAsset: NavAssetProps = {
  name:'Default', 
  icon:'apps', 
  label:'Default Page'
};

export const assetNames: Array<NavAssetProps> = [
  {name:'Home', icon:'home', label:'Home Page'},
  {name:'About', icon:'list', label:'About Page'},
  {name:'Contact', icon:'albums-outline', label:'Contact Page'},
];
