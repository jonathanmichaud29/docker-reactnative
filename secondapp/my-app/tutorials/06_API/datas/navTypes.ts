import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type StackNavParamList = {
  Home: undefined;
  User: {id:string};
}
export type HomeProps = NativeStackScreenProps<StackNavParamList, 'Home'>;
export type UserProps = NativeStackScreenProps<StackNavParamList, 'User'>;
