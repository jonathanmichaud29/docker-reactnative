import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

import { RootStackParamList, ScreenHomeProps } from '../data-structure/types';

const Tab = createNativeStackNavigator<RootStackParamList>();

import ScreenFeed from './ScreenFeed';
import ScreenMessage from './ScreenMessage';

export default function ScreenHome(props: ScreenHomeProps) {
  const { route, navigation } = props;
  
  return(
    <View style={{ height:'100%'}}/* style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} */>
      <Text>Welcome Home</Text>
    </View>
  );
}