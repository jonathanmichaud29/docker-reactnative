import { DefaultTheme } from "styled-components/native";

// Dark Theme
export const defaultTheme: DefaultTheme = {
  borderRadius: '4px',
  palette: {
    common: {
      black: '#000',
      white: '#ffffff'
    },
    primary: {
      background: '#fff',
      textLowContrast: '#ccc',
      textHighContrast: '#333',
    },
    /* secondary: {
      background: '#666',
      textLowContrast: '#9D9D9D',
      textHighContrast: '#ffffff',
    }, */
    background: '#111111',
  }
}


export const lightTheme: DefaultTheme = {
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    primary: {
      background: '#000',
      textLowContrast: '#333',
      textHighContrast: '#fff',
    },
    secondary: {
      background: '#ccc',
      textLowContrast: '#444',
      textHighContrast: '#999',
    },
    background: '#fff',
  }
}