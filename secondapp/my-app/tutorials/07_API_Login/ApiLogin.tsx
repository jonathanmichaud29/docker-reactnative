import { Provider as PaperProvider,  } from 'react-native-paper';
import { NavigationContainer } from "@react-navigation/native";

import { combinedTheme } from './datas/theme'

import { useAuthentication } from './datas/hooks/useFirebaseAuth';

import UserStack from './navigation/UserStack';
import AuthStack from './navigation/AuthStack';

export default function ApiLogin(){
  const { user } = useAuthentication();

  return(
    <PaperProvider theme={combinedTheme}>
      <NavigationContainer theme={combinedTheme}>
        { user ? <UserStack /> : <AuthStack /> }
      </NavigationContainer>
    </PaperProvider>
  )
}