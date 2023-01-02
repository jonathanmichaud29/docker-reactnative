import { View, Text } from 'react-native';

import { ScreenTestProps } from '../data-structure/types';
import HeaderDrawer from '../navs/HeaderDrawer';

export default function ScreenTest(props: ScreenTestProps) {
  const { route, navigation } = props;
  
  return(
  <>
    <HeaderDrawer />
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color:'black'}}>Test Page</Text>
    </View>
    </>
  );
}
