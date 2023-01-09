import { Button, View, Text } from "react-native";
import NavButton from "../components/NavButton";
import { ComplexTabBScreenProps } from "../datas/types";

export default function ScreenTabB(props: ComplexTabBScreenProps) {

  const { navigation } = props;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tab B</Text>
      <NavButton navigation={navigation} />
    </View>
  );
}