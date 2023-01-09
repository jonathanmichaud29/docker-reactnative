import { View, Text, Button } from 'react-native';

import { ItemProp, items } from '../datas/items';
import { ComplexStackListingScreenProps } from '../datas/types';

import NavButton from '../components/NavButton';


export default function StackListingScreen(props: ComplexStackListingScreenProps){

  const {navigation } = props;

  const renderItem = (item: ItemProp) => {
    return (
      <Button 
        key={`item-${item.id}`}
        title={item.name}
        onPress={() => navigation.navigate('ListItem' , {id:item.id} )}
      />
    )
  }
  
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Listing Screen</Text>
      <View >
        { items.map(renderItem) }
      </View>
      <NavButton navigation={navigation}/>
    </View>
  )
}