import {StyleSheet, View} from 'react-native';

import { 
  Provider as PaperProvider,
  MD3LightTheme as DefaultTheme,
  MD3DarkTheme as DarkTheme,
  useTheme,
  Surface,
} from 'react-native-paper';

import { StoreProvider, Store } from './store/Store'
import MyAppBar from './components/MyAppBar'
import SettingScreen from './screens/SettingScreen'


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default function ReactPaper(){
  
  return(
    <View style={styles.container}>
      <StoreProvider>
        <Store.Consumer>
        { (value) => {
            const { isDarkModeOn } = value[0]
            return (
              <PaperProvider theme={isDarkModeOn ? DarkTheme : DefaultTheme}>
                <Surface>
                  <MyAppBar />
                  <SettingScreen />
                </Surface>
              </PaperProvider>
            )
          }}
        </Store.Consumer>
      </StoreProvider>
    </View>
    
  )
}