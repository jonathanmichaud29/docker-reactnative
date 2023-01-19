
export enum ThemeModeActionTypes {
  ThemeToggle     = "THEME_TOGGLE",
  ThemeLight      = "THEME_LIGHT",
  ThemeDark       = "THEME_DARK",
  FontToggleSize  = "FONT_TOGGLE_SIZE"
}

export interface ThemeModeAction {
  type: ThemeModeActionTypes,
  payload: boolean,
}

export interface ThemeModeState {
  isDarkMode: boolean,
  isLargeFont: boolean,
}

export function themeModeReducer(state: ThemeModeState, { type, payload }: ThemeModeAction) {
  switch(type){
    case ThemeModeActionTypes.ThemeToggle:
      return {
        ...state,
        isDarkMode: payload
      }
    case ThemeModeActionTypes.ThemeDark:
      return {
        ...state,
        isDarkMode: true
      }
    case ThemeModeActionTypes.ThemeLight:
      return {
        ...state,
        isDarkMode: false
      }
    case ThemeModeActionTypes.FontToggleSize:
      return {
        ...state,
        isLargeFont: !state.isLargeFont
      }
    default: 
      return state
  }
}
