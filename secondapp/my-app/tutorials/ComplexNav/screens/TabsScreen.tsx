import { Button, View, Text } from "react-native";
import { ComplexNavTabsProps } from "../datas/types";
import TabNav from "../navs/TabNav";

export default function TabsScreen(props: ComplexNavTabsProps) {

  const { navigation } = props;

  return (
    <TabNav />
  );
}