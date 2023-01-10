import { StringLiteral } from "typescript";

declare module 'styled-components/native' {
  export interface DefaultTheme {
    borderRadius: string;
    
    colors: {
      primary: string;
      secondary: string;
      title: string;
      background: string;
      button: string;
    };
  }
}