import { View, Text, Button } from 'react-native';

import { ScreenMessageProps } from '../data-structure/types';

export default function ScreenMessage(props: ScreenMessageProps) {
  const { route, navigation } = props;
  console.log("ScreenMessage");
  return(
    <View style={{ /* flex: 1, alignItems: 'center', justifyContent: 'center' */ }}>
      <Text>Home messages</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}