import { View, Text } from 'react-native';

import { ScreenPublicProps } from '../data-structure/types';
import NavBottom from '../navs/NavBottom';

export default function ScreenPublic(props: ScreenPublicProps) {
  const { route, navigation } = props;
  
  return(
    <>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color:'black'}}>Public Page</Text>
      
    </View>
    <NavBottom />
    </>
  );
}
