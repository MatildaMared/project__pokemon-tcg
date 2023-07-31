import "styled-components";
import { lightTheme } from "@/styles/themes/light";

export type Theme = typeof lightTheme;

declare module "styled-components" {
  interface DefaultTheme extends Theme {}
}
