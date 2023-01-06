import { View, Text, Button } from 'react-native';
import { ItemProp, items } from '../datas/items';
import { CommonActions } from '@react-navigation/native';

import { ComplexStackListItemScreenProps } from '../datas/types';

export default function StackItemScreen(props: ComplexStackListItemScreenProps){

  const {navigation, route } = props;

  const selectedItem = items.find((item: ItemProp) => item.id === route.params.id);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      { selectedItem && (
        <Text>Screen Specific Item #{selectedItem.id} with label '{selectedItem.name}'</Text>
      )}
      
      <Button
        title="Go Back to previous screen"
        onPress={() => navigation.dispatch( CommonActions.goBack() )}
      />
    </View>
  )
}