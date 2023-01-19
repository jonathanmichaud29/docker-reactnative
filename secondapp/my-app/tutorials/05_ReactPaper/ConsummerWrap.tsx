import { useContext } from 'react';
import {StyleSheet, View} from 'react-native';

import { 
  Provider as PaperProvider,
  Surface,
} from 'react-native-paper';

import { AppContext } from './store/StoreContext';

import MyAppBar from './components/MyAppBar'

import SettingScreen from './screens/SettingScreen'

import { getReactPaperThemeStyles } from './datas/themeStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default function ConsummerWrap() {

  const { state } = useContext(AppContext);

  const myTheme = getReactPaperThemeStyles(state)

  return (
    <View style={styles.container}>
      <PaperProvider theme={myTheme}>
        <Surface>
          <MyAppBar />
          <SettingScreen />
        </Surface>
      </PaperProvider>
    </View>
  );
}
