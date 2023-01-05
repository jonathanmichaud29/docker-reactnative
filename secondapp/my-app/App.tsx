import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import EntryTutorial from './tutorials/TutorialNav/EntryTutorial';
import ComplexNav from './tutorials/ComplexNav/ComplexNav';

export default function App() {
  return (
    <SafeAreaProvider>
      <ComplexNav />
    </SafeAreaProvider>
  );
}

