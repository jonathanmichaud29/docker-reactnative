import { useContext } from 'react';
import {StyleSheet, View} from 'react-native';

import { 
  Provider as PaperProvider,
  MD3LightTheme as DefaultTheme,
  MD3DarkTheme as DarkTheme,
  Surface,
} from 'react-native-paper';

import { AppContext } from './store/StoreContext';

import MyAppBar from './components/MyAppBar'

import SettingScreen from './screens/SettingScreen'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default function ConsummerWrap() {

  const { state } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <PaperProvider theme={state.isDarkMode ? DarkTheme : DefaultTheme}>
        <Surface>
          <MyAppBar />
          <SettingScreen />
        </Surface>
      </PaperProvider>
    </View>
  );
}