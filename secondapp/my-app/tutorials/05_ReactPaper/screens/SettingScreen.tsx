import { View } from "react-native";
import { Subheading, Switch } from "react-native-paper";
import { useStateValue } from "../store/Store";

import { styles } from '../datas/styles';

export default function SettingScreen(){
  const [state, dispatch] = useStateValue();
  const { isDarkModeOn } = state;
  const handleThemeChange = () => dispatch({
    type: 'TOGGLE_THEME',
    payload: !isDarkModeOn,
  })

  return (
    <View style={styles.rowSpace}>
      <Subheading>Dark Mode</Subheading>
      <Switch value={isDarkModeOn} onValueChange={handleThemeChange} />
    </View>
  )
}

