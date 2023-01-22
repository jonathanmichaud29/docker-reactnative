import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { DrawerScreenProps } from '@react-navigation/drawer'
import type { NavigatorScreenParams, CompositeScreenProps } from '@react-navigation/native';

export type DrawerNavParamList = {
  Home: NavigatorScreenParams<StackNavParamList>;
  Login: undefined;
}

export type DrawerNavHomeProps = DrawerScreenProps<DrawerNavParamList, 'Home'>;
export type DrawerNavLoginProps = DrawerScreenProps<DrawerNavParamList, 'Login'>;

export type StackNavParamList = {
  UserList: undefined;
  UserDetails: {id:string};
}
export type UserListProps = NativeStackScreenProps<StackNavParamList, 'UserList'>;
export type UserDetailsProps = NativeStackScreenProps<StackNavParamList, 'UserDetails'>;
