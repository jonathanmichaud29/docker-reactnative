import { signOut } from "firebase/auth/react-native";
import { Text, Surface, Button } from "react-native-paper";

import { SimpleNavRequiredValidationProps } from "../datas/navTypes";
import { firebaseAuth } from "../datas/firebaseConfig";
import { styles } from "../datas/styles";
import { useAuthentication } from "../datas/hooks/useFirebaseAuth";


export default function RequiredValidationScreen(props: SimpleNavRequiredValidationProps) {
  
  const { navigation } = props;

  const { user } = useAuthentication();

  const triggerSignOut = async() =>{
    await signOut(firebaseAuth);
  }

  return (
    <Surface style={styles.mainContainer}>
      <Text variant="titleLarge">Welcome {user?.email}!</Text>
      <Text variant="bodyLarge">Your email account has not been yet validated. Please confirm your email address ownership by clicking on the link within the email we just sent you.</Text>
      <Button 
        mode="contained" 
        onPress={triggerSignOut}
      >Log out</Button>
    </Surface>
  )
}
