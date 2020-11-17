import { DefaultTheme } from "@react-navigation/native";
import COLORS from "../constants/Theme";

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.PRIMARY,
    background: COLORS.WHITE
  }
};

export default myTheme;
