import { AppProvider } from './store/StoreContext';
import ConsummerWrap from './ConsummerWrap';

export default function ReactPaper(){

  return(
    <AppProvider>
      <ConsummerWrap />
    </AppProvider>
  )
}