import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { signOut } from 'firebase/auth/react-native';

import { useAuthentication } from '../datas/hooks/useFirebaseAuth';
import { firebaseAuth } from '../datas/firebaseConfig';
import { styles } from '../datas/styles';
import { DrawerNavUserWelcomeProps } from '../datas/navTypes';


export default function UserHomeScreen(props: DrawerNavUserWelcomeProps){

  const { user } = useAuthentication();

  const triggerSignOut = async() =>{
    await signOut(firebaseAuth).then(()=>{
      /* props.navigation.navigate("Login") */
    });
    /* props.navigation.navigate("Login") */
  }
  
  return (
    <View style={styles.mainContainer}>
      <Text variant="titleLarge">Welcome {user?.email}!</Text>
      <Button 
        mode="contained" 
        onPress={triggerSignOut}
      >Log out</Button>
    </View>
  );
}