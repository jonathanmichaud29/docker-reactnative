import React from 'react';
import { SimpleNavRequiredValidation } from "../datas/navTypes";

import RequiredValidationScreen from "../screens/private/RequiredValidationScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<SimpleNavRequiredValidation>();

export default function RequiredValidationStack(){

  return (
    <Stack.Navigator>
      <Stack.Screen name="RequiredValidation" component={RequiredValidationScreen}  
        options={{
          headerTitle:"Email validation"
        }}
      />
    </Stack.Navigator>
  )
}


