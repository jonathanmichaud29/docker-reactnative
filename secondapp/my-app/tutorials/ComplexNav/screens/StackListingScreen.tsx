import { View, Text, Button, TouchableOpacity } from 'react-native';
import { ItemProp, items } from '../datas/items';

import { ComplexStackListingScreenProps } from '../datas/types';

import { CommonActions } from '@react-navigation/native';


export default function StackListingScreen(props: ComplexStackListingScreenProps){

  const {navigation } = props;

  const renderItem = (item: ItemProp) => {
    return (
      <Button 
        key={`item-${item.id}`}
        title={item.name}
        onPress={() => navigation.navigate('ListItem', {id:item.id} )}
      />
    )
  }
  
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Listing Screen</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.dispatch( CommonActions.goBack() )}
      />
      <View>
        { items.map(renderItem) }
      </View>
    </View>
  )
}