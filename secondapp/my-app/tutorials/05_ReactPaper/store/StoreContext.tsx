import { ReactNode, Dispatch, createContext, useReducer } from 'react';

import { ThemeModeAction, themeModeReducer, ThemeModeState } from './storeReducers';

const initialState: ThemeModeState = {
  isDarkMode: true
}

const AppContext = createContext<{
  state: ThemeModeState,
  dispatch: Dispatch<ThemeModeAction>
}>({
  state: initialState,
  dispatch: () => null,
});

interface AppProviderProps {
  children: ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(themeModeReducer, initialState);
  
  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider };
