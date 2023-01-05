// Homescreen.js
import { Button, View, Text, TouchableOpacity } from "react-native";
import { ComplexNavListingProps } from "../datas/types";

import { items, ItemProp } from '../datas/items';
import StackNav from "../navs/StackNav";

export default function ListingScreen(props: ComplexNavListingProps) {

  const { navigation } = props;

  /* const renderItem = (item: ItemProp) => {
    <TouchableOpacity 
      key={`item-${item.id}`}
      onPress={() => navigation.navigate('ListItem')}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  } */

  return (
    <>
      <StackNav />
      {/* <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Listing Screen</Text>
        <Button
          title="Go Home"
          onPress={() => navigation.navigate("Home")}
        />
        { items.map(renderItem ) }
      </View> */}
    </>
  );
}