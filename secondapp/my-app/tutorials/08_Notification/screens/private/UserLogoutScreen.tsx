import { useEffect } from 'react';
import { Surface, Text } from 'react-native-paper';
import { signOut } from 'firebase/auth/react-native';

import { firebaseAuth } from '../../datas/firebaseConfig';
import { styles } from '../../datas/styles';
import { DrawerNavUserLogoutProps } from '../../datas/navTypes';


export default function UserLogoutScreen(props: DrawerNavUserLogoutProps){
  
  const { navigation } = props;

  useEffect(() => { 
    signOut(firebaseAuth);
  }, []);

  return (
    <Surface style={styles.mainContainer}>
      <Text>Log out in process</Text>
    </Surface>
  );
}