import { View, Text } from 'react-native';

import { ScreenPrivateProps } from '../data-structure/types';
import NavBottom from '../navs/NavBottom';

export default function ScreenPrivate(props: ScreenPrivateProps) {
  const { route, navigation } = props;
  
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color:'black'}}>Private Page</Text>
    </View>
  );
}
