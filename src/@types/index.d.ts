import "styled-components";
import { theme } from "../theme";

type CustomTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}

export type Note = {
  id: string;
  description: string;
  color?: string;
  updatedAt: string;
};
