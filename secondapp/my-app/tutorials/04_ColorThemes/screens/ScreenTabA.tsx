// Homescreen.js
import { Button, View, Text } from "react-native";
import NavButton from "../components/NavButton";
import { ComplexTabAScreenProps } from "../datas/types";

export default function ScreenTabA(props: ComplexTabAScreenProps) {

  const { navigation } = props;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tab A</Text>
      <NavButton navigation={navigation} />
    </View>
  );
}