import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import EntryTutorial from './components/TutorialNav/EntryTutorial';

export default function App() {
  return (
    <SafeAreaProvider>
      <EntryTutorial />
    </SafeAreaProvider>
  );
}

