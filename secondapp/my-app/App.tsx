import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenEmpty from './screens/ScreenEmpty';
import ScreenFirebase from './screens/ScreenFirebase';
import ScreenTutorial from './screens/ScreenTutorial';

import { RootStackParamList } from './data-structure/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Empty'>
        <Stack.Screen name="Empty" component={ScreenEmpty}
          options={{ title: 'Root Page' }} 
          />
        <Stack.Screen name="Home" component={ScreenTutorial} />
        <Stack.Screen name="Firebase" component={ScreenFirebase}
          options={{ title: 'Firebase Title' }} 
          />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
