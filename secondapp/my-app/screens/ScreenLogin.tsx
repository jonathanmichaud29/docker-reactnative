import { View, Text } from 'react-native';

import { ScreenLoginProps } from '../data-structure/types';

export default function ScreenLogin(props: ScreenLoginProps) {
  const { route, navigation } = props;
  
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color:'black'}}>Login Page</Text>
    </View>
  );
}
