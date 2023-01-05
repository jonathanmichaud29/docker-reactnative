import { Button, View, Text } from "react-native";
import { ComplexNavHomeProps } from "../datas/types";

export default function HomeScreen(props: ComplexNavHomeProps) {

  const { navigation } = props;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button 
        title="Go to item #3" 
        onPress={() => navigation.navigate('Listing',{
          screen: 'ListItem',
          params:{ id:3}
        })}
      />
    </View>
  );
}