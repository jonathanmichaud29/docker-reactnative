import * as styledComponents from "styled-components/native";

import { defaultTheme } from "./theme";

const {
  default: styled,
  css,
  ThemeProvider
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<typeof defaultTheme>;

export { css, ThemeProvider };
export default styled;
