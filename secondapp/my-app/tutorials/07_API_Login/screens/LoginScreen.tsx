import { Surface, Text } from "react-native-paper";

import { DrawerNavLoginProps } from "../datas/navTypes";

import { makeUserSignIn, makeUserSignUp } from '../datas/firebaseConfig'

export default function LoginScreen(props: DrawerNavLoginProps) {

  const { navigation } = props;

  return (
    <Surface>
      <Text variant="titleLarge">Login Area</Text>
    </Surface>
  )
}
