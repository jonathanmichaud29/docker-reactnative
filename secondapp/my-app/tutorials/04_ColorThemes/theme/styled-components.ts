import * as styledComponents from "styled-components/native";

import { darkTheme } from "./theme";

const {
  default: styled,
  css,
  ThemeProvider
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<typeof darkTheme>;

export { css, ThemeProvider };
export default styled;
