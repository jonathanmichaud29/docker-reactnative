import { 
  MD3LightTheme as DefaultTheme,
  MD3DarkTheme as DarkTheme,
  configureFonts,
} from 'react-native-paper';

import { ThemeModeState } from '../store/storeReducers';

export const getReactPaperThemeStyles = (state: ThemeModeState) => {
  
  const selectedTheme = state.isDarkMode ? DarkTheme : DefaultTheme;
  
  const fontConfig = state.isLargeFont ? largerFonts : defaultFonts;

  return {
    ...selectedTheme,
    fonts: configureFonts({config: fontConfig, isV3:true}),
  }
}


const defaultFonts = {
  bodyLarge: {
    fontSize: 16,
    lineHeight: 24,
  },
  bodyMedium: {
    fontSize: 14,
    lineHeight: 20,
  },
  bodySmall: {
    fontSize: 12,
    lineHeight: 16,
  },
  displayLarge: {
    fontSize: 57,
    lineHeight: 64,
  },
  displayMedium: {
    fontSize: 45,
    lineHeight: 52,
  },
  displaySmall: {
    fontSize: 36,
    lineHeight: 44,
  },
  headlineLarge: {
    fontSize: 32,
    lineHeight: 40,
  },
  headlineMedium: {
    fontSize: 28,
    lineHeight: 36,
  },
  headlineSmall: {
    fontSize: 24,
    lineHeight: 32,
  },
  labelLarge: {
    fontSize: 14,
    lineHeight: 20,
  },
  labelMedium: {
    fontSize: 12,
    lineHeight: 16,
  },
  labelSmall: {
    fontSize: 11,
    lineHeight: 16,
  },
  titleLarge: {
    fontSize: 22,
    lineHeight: 28,
  },
  titleMedium: {
    fontSize: 16,
    lineHeight: 24,
  },
  titleSmall: {
    fontSize: 14,
    lineHeight: 20,
  },
  default: {
    fontSize: 14,
    lineHeight: 20,
    }
}

const largerFonts = {
  bodyLarge: {
    fontSize: 18,
    lineHeight: 26,
  },
  bodyMedium: {
    fontSize: 16,
    lineHeight: 24,
  },
  bodySmall: {
    fontSize: 14,
    lineHeight: 18,
  },
  displayLarge: {
    fontSize: 66,
    lineHeight: 76,
  },
  displayMedium: {
    fontSize: 50,
    lineHeight: 58,
  },
  displaySmall: {
    fontSize: 40,
    lineHeight: 50,
  },
  headlineLarge: {
    fontSize: 36,
    lineHeight: 44,
  },
  headlineMedium: {
    fontSize: 32,
    lineHeight: 42,
  },
  headlineSmall: {
    fontSize: 28,
    lineHeight: 36,
  },
  labelLarge: {
    fontSize: 16,
    lineHeight: 20,
  },
  labelMedium: {
    fontSize: 14,
    lineHeight: 18,
  },
  labelSmall: {
    fontSize: 12,
    lineHeight: 16,
  },
  titleLarge: {
    fontSize: 24,
    lineHeight: 30,
  },
  titleMedium: {
    fontSize: 18,
    lineHeight: 24,
  },
  titleSmall: {
    fontSize: 16,
    lineHeight: 20,
  },
  default: {
    fontSize: 16,
    lineHeight: 24,
    }
}