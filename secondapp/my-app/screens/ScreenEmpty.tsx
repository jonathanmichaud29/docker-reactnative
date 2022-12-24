import { View, Text, Button } from 'react-native';

import { ScreenEmptyProps } from '../data-structure/types';

export default function ScreenEmpty(props: ScreenEmptyProps) {

  const { route, navigation } = props;

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Empty Screen</Text>

      <Button title="Go back" onPress={() => navigation.goBack()} />
      
      <Button
        title="Go Tutorial!"
        onPress={() => navigation.navigate('Home')}
      />
      
      <Button
        title="Go Firebase!"
        onPress={() => navigation.navigate('Firebase')}
      />
    </View>
  );
}