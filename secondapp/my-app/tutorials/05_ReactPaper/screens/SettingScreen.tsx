import { useContext } from 'react';
import { View } from "react-native";
import { Button, Subheading, Switch } from "react-native-paper";

import { AppContext } from "../store/StoreContext";
import { ThemeModeActionTypes } from '../store/storeReducers'

import { styles } from '../datas/styles';

export default function SettingScreen(){
  const { state, dispatch } = useContext(AppContext);
  
  const handleThemeToggle = () => dispatch({
    type: ThemeModeActionTypes.Toggle,
    payload: !state.isDarkMode,
  })
  const handleThemeForceDark = () => dispatch({
    type: ThemeModeActionTypes.Dark,
    payload: true
  })
  const handleThemeForceLight = () => dispatch({
    type: ThemeModeActionTypes.Light,
    payload: false
  })

  return (
    <>
      <View style={styles.rowToggle}>
        <Subheading>Dark Mode</Subheading>
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
    </>
  )
}

