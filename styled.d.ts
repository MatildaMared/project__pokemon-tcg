import "styled-components";
import lightTheme from "./src/styles/lightTheme";

type CustomTheme = typeof lightTheme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
