import { useContext } from 'react';
import { View } from "react-native";
import { Button, Text, Switch } from "react-native-paper";

import { AppContext } from "../store/StoreContext";
import { ThemeModeActionTypes } from '../store/storeReducers'

import { styles } from '../datas/styles';

export default function SettingScreen(){
  const { state, dispatch } = useContext(AppContext);
  
  const handleThemeToggle = () => dispatch({
    type: ThemeModeActionTypes.ThemeToggle,
    payload: !state.isDarkMode,
  })
  const handleThemeForceDark = () => dispatch({
    type: ThemeModeActionTypes.ThemeDark,
    payload: true
  })
  const handleThemeForceLight = () => dispatch({
    type: ThemeModeActionTypes.ThemeLight,
    payload: false
  })

  const handleLargerFontToggle = () => dispatch({
    type: ThemeModeActionTypes.FontToggleSize,
    payload: !state.isLargeFont
  })

  

  return (
    <>
      <View style={styles.rowToggle}>
        <Text>Dark Mode</Text>
        <Switch value={state.isDarkMode} onValueChange={handleThemeToggle} />
      </View>
      <View style={styles.rowToggle}>
        <Button onPress={handleThemeForceLight} mode="contained-tonal" disabled={!state.isDarkMode}>
          Force Light Mode
        </Button>
        <Button onPress={handleThemeForceDark} mode="contained" disabled={state.isDarkMode}>
          Force Dark Mode
        </Button>
      </View>
      <View style={styles.rowToggle}>
        <Text>Larger Font Size</Text>
        <Switch value={state.isLargeFont} onValueChange={handleLargerFontToggle} />
      </View>
    </>
  )
}

