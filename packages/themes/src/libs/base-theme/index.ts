import { createTheme } from "@mui/material";
import { components } from "./components";
import { palette } from "./palette";

export const baseTheme = createTheme({
  palette,
  components,
  spacing: 8,
});
