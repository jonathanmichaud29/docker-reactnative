import { 
  Provider as PaperProvider,
  MD3LightTheme as DefaultTheme,
  MD3DarkTheme as DarkTheme,
  useTheme,
} from 'react-native-paper';

import MyAppBar from './components/MyAppBar'

export default function ReactPaper(){
  const theme = useTheme(DarkTheme);
  return(
    <PaperProvider theme={{...DarkTheme}}>
      <MyAppBar />
    </PaperProvider>
  )
}