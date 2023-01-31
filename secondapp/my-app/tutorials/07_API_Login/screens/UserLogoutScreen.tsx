import { useEffect } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { signOut } from 'firebase/auth/react-native';

import { useAuthentication } from '../datas/hooks/useFirebaseAuth';
import { firebaseAuth } from '../datas/firebaseConfig';
import { styles } from '../datas/styles';
import { DrawerNavUserLogoutProps } from '../datas/navTypes';
import { CommonActions } from '@react-navigation/native';


export default function UserLogoutScreen(props: DrawerNavUserLogoutProps){
  
  const { navigation } = props;

  useEffect(() => { 
    signOut(firebaseAuth);
    navigation.navigate('Login')
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Text>Log out in process</Text>
    </View>
  );
}