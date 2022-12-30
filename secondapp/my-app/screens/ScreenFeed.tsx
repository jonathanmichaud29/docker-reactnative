import { View, Text, Button } from 'react-native';

import { ScreenFeedProps } from '../data-structure/types';

export default function ScreenFeed(props: ScreenFeedProps) {
  const { route, navigation } = props;
  console.log("ScreenFeed");
  return(
    <View style={{ height:'100%',flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color:'black'}}>Home Feed</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}