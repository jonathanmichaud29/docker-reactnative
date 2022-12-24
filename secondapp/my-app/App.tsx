import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenTutorial from './screens/ScreenTutorial';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={ScreenTutorial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
