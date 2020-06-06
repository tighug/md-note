import {} from "styled-components";
import Theme from "../theme/ITheme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
