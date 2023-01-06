import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ComplexStackParamList } from "../datas/types";

import StackListingScreen from '../screens/StackListingScreen';
import StackItemScreen from '../screens/StackItemScreen';

const Stack = createNativeStackNavigator<ComplexStackParamList>();

export default function StackNav() {
  return (
    <Stack.Navigator initialRouteName="StackListing">
      <Stack.Screen name="StackListing" component={StackListingScreen} />
      <Stack.Screen name="ListItem" component={StackItemScreen} />
    </Stack.Navigator>
  )
}