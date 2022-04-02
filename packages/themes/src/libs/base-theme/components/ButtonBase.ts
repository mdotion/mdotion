import { Components } from "@mui/material";

export const ButtonBase: Components["MuiButtonBase"] = {
  styleOverrides: {
    root: {
      ":focus-visible": {
        outline: "4px solid rgba(0, 0, 0, 0.23)",
        outlineColor: "red",
      },
    },
  },
};
