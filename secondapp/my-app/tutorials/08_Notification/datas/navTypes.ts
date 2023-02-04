import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { DrawerScreenProps } from '@react-navigation/drawer'

/**
 * Public navigations
 */

export type DrawerNavPublicList = {
  Login: undefined;
  ForgetPassword: undefined;
  Signup: undefined;
}

export type DrawerNavLoginProps = DrawerScreenProps<DrawerNavPublicList, 'Login'>;
export type DrawerNavForgetPasswordProps = DrawerScreenProps<DrawerNavPublicList, 'ForgetPassword'>;
export type DrawerNavSignupProps = DrawerScreenProps<DrawerNavPublicList, 'Signup'>;

export type StackNavParamList = {
  UserList: undefined;
  UserDetails: {id:string};
}
export type UserListProps = NativeStackScreenProps<StackNavParamList, 'UserList'>;
export type UserDetailsProps = NativeStackScreenProps<StackNavParamList, 'UserDetails'>;

/**
 * Private navigations
 */


export type SimpleNavRequiredValidation = {
  RequiredValidation: undefined;
}
export type SimpleNavRequiredValidationProps = NativeStackScreenProps<SimpleNavRequiredValidation, 'RequiredValidation'>;

export type DrawerNavLoggedUser = {
  Welcome: undefined;
  Logout: undefined;
}
export type DrawerNavUserWelcomeProps = DrawerScreenProps<DrawerNavLoggedUser, 'Welcome'>;
export type DrawerNavUserLogoutProps = DrawerScreenProps<DrawerNavLoggedUser, 'Logout'>;