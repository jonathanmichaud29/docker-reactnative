import { Button, View, Text } from "react-native";
import { ComplexTabBScreenProps } from "../datas/types";

export default function ScreenTabB(props: ComplexTabBScreenProps) {

  const { navigation } = props;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tab B</Text>
      <Button
        title="Go Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}