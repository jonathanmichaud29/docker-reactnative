
import ScreenPublic from '../screens/ScreenPublic';
import ScreenPrivate from '../screens/ScreenPrivate';
import ScreenHome from '../screens/ScreenHome';
import ScreenTutorial from '../screens/ScreenTutorial';

import { DrawerStackParamList } from '../data-structure/types';
import CustomNav from './custom-modules/CustomNav';
import NavBottom from './NavBottom';

const My = CustomNav<DrawerStackParamList>();

export default function HeaderDrawer() {
  return (
    <>
      <My.Navigator initialRouteName='Home'>
        <My.Screen name="Home" component={ScreenHome} />
        <My.Screen name="TutorialExpo" component={ScreenTutorial} />
        <My.Screen name="Public" component={ScreenPublic} />
        <My.Screen name="Private" component={ScreenPrivate} />
      </My.Navigator>
    </>
  )
}