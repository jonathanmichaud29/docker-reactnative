
export enum ThemeModeActionTypes {
  Toggle = "TOGGLE",
  Light = "LIGHT",
  Dark = "Dark",
}

export interface ThemeModeAction {
  type: ThemeModeActionTypes,
  payload: boolean,
}

export interface ThemeModeState {
  isDarkMode: boolean,
}

export function themeModeReducer(state: ThemeModeState, { type, payload }: ThemeModeAction) {
  switch(type){
    case ThemeModeActionTypes.Toggle:
      return {
        ...state,
        isDarkMode: payload
      }
    case ThemeModeActionTypes.Dark:
      return {
        ...state,
        isDarkMode: true
      }
    case ThemeModeActionTypes.Light:
      return {
        ...state,
        isDarkMode: false
      }
    default: 
      return state
  }
}
