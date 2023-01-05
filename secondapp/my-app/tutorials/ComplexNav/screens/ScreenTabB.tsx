// Homescreen.js
import { Button, View, Text } from "react-native";
import { ComplexNavTabsProps } from "../datas/types";

export default function ScreenTabB(props: ComplexNavTabsProps) {

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