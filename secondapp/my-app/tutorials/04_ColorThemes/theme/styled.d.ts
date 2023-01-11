import 'styled-components/native';

interface IPalette {
  background: string
  textLowContrast: string
  textHighContrast: string
}

declare module 'styled-components/native' {
  export interface DefaultTheme {
    borderRadius: string
    palette: {
      common: {
        black: string
        white: string
      }
      primary: IPalette
      // secondary: IPalette
      background: string
    }
  }
}