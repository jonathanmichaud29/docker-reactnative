import { View, Text, Button } from 'react-native';

import { ScreenFirebaseProps } from '../data-structure/types';

export default function ScreenFirebase(props: ScreenFirebaseProps) {
  const { route, navigation } = props;
  
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Firebase Screen</Text>
      <Button
        title="Go to empty page"
        onPress={() => navigation.navigate('Empty')}
      />
    </View>
  );
}