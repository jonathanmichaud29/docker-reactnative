import { Button, View, Text } from "react-native";
import NavButton from "../components/NavButton";
import { ComplexTabCScreenProps } from "../datas/types";

export default function ScreenTabC(props: ComplexTabCScreenProps) {

  const { navigation } = props;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tab C</Text>
      <NavButton navigation={navigation} />
    </View>
  );
}