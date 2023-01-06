import { Button, View, Text } from "react-native";
import { ComplexTabCScreenProps } from "../datas/types";

export default function ScreenTabC(props: ComplexTabCScreenProps) {

  const { navigation } = props;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tab C</Text>
      <Button
        title="Go Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}