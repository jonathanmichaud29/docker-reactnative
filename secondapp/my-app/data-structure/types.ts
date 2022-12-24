import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Firebase: undefined;
  Empty: undefined;
};

export type ScreenHomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type ScreenEmptyProps = NativeStackScreenProps<RootStackParamList, 'Empty'>;
export type ScreenFirebaseProps = NativeStackScreenProps<RootStackParamList, 'Firebase'>;
