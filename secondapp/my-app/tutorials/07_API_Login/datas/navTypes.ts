import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { DrawerScreenProps } from '@react-navigation/drawer'
import type { NavigatorScreenParams, CompositeScreenProps } from '@react-navigation/native';

/**
 * Public navigations
 */

export type DrawerNavPublicList = {
  Home: NavigatorScreenParams<StackNavParamList>;
  Login: undefined;
}

export type DrawerNavHomeProps = DrawerScreenProps<DrawerNavPublicList, 'Home'>;
export type DrawerNavLoginProps = DrawerScreenProps<DrawerNavPublicList, 'Login'>;

export type StackNavParamList = {
  UserList: undefined;
  UserDetails: {id:string};
}
export type UserListProps = NativeStackScreenProps<StackNavParamList, 'UserList'>;
export type UserDetailsProps = NativeStackScreenProps<StackNavParamList, 'UserDetails'>;

/**
 * Private navigations
 */

export type DrawerNavLoggedUser = {
  Welcome: undefined;
  Logout: undefined;
}
/* export type DrawerNavUserWelcomeProps = DrawerScreenProps<DrawerNavLoggedUser, 'Welcome'>; */
export type DrawerNavUserWelcomeProps = CompositeScreenProps<
  DrawerScreenProps<DrawerNavLoggedUser, 'Welcome'>,
  DrawerScreenProps<DrawerNavPublicList, 'Login'>
  >;
export type DrawerNavUserLogoutProps = DrawerScreenProps<DrawerNavLoggedUser, 'Logout'>;

/* export type DrawerNavUserLogoutProps = CompositeScreenProps<
  DrawerScreenProps<DrawerNavLoggedUser, 'Logout'>,
  DrawerScreenProps<DrawerNavPublicList, 'Login'>
  >; */