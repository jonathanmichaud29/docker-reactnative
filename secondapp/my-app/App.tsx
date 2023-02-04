import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import EntryTutorial from './tutorials/02_RN-TutorialNav/EntryTutorial';
import ComplexNav from './tutorials/03_RN-ComplexNav/ComplexNav';
import ColorThemes from './tutorials/04_ColorThemes/ColorThemes';
import ReactPaper from './tutorials/05_ReactPaper/ReactPaper';
import Api from './tutorials/06_API/Api';
import ApiLogin from './tutorials/07_API_Login/ApiLogin';
import Notification from './tutorials/08_Notification/Notification';

export default function App() {
  return (
    <SafeAreaProvider>
      <Notification />
    </SafeAreaProvider>
  );
}

