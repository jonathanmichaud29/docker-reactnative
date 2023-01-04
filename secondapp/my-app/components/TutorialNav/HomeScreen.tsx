// Homescreen.js
import React from "react";
import { Button, View, Text } from "react-native";
import { TutorialNavHomeProps } from "./types";

export default function HomeScreen(props: TutorialNavHomeProps) {

  const { navigation } = props;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
}