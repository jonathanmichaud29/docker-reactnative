import { Provider as PaperProvider,  } from 'react-native-paper';
import { NavigationContainer } from "@react-navigation/native";

import { combinedTheme } from './datas/theme'
import { useAuthentication } from './datas/hooks/useFirebaseAuth';

import UserStack from './navigation/UserStack';
import AuthStack from './navigation/AuthStack';
import RequiredValidationStack from './navigation/RequiredValidationStack';


export default function ApiLogin(){
  const { user, verified } = useAuthentication();

  const showRootNav = () => {
    if( user === undefined ){
      return <AuthStack />;
    }
    if( ! verified ){
      return <RequiredValidationStack />
    }
    return <UserStack />
  }
  return(
    <PaperProvider theme={combinedTheme}>
      <NavigationContainer theme={combinedTheme}>
        { showRootNav() }
      </NavigationContainer>
    </PaperProvider>
  )
}
