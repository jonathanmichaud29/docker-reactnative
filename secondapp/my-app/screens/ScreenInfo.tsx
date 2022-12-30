import { View, Text } from 'react-native';

import { ScreenInfoProps } from '../data-structure/types';

export default function ScreenInfo(props: ScreenInfoProps) {
  const { route, navigation } = props;
  
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Information</Text>
    </View>
  );
}