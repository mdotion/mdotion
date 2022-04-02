import { PaletteOptions } from "@mui/material";

export const palette: PaletteOptions = {
  mode: "light",
  activityBar: {
    background: "#242424",
    color: "#808080",
    button: {
      default: {
        background: "transparent",
        color: "#808080",
      },
      active: {
        background: "#373737",
        color: "#fff",
      },
      hover: {
        background: "#121212",
        color: "#A4A4A4",
      },
    },
  },
  sidebar: {
    background: "#f1f1f1",
    color: "#000",
    actionButton: {
      default: {
        background: "transparent",
        color: "#797979",
      },
      active: {
        background: "#D0D0D0",
        color: "#232323",
      },
      hover: {
        background: "#E1E1E1",
        color: "#232323",
      },
    },
  },
  treeView: {
    leftBorderColor: "#D0D0D0",
    treeItem: {
      default: {
        background: "transparent",
        color: "#797979",
      },
      hover: {
        background: "#E1E1E1",
        color: "#000000",
      },
      active: {
        background: "#E1E1E1",
        color: "#000000",
      },
      focus: {
        background: "#E1E1E1",
        color: "#000000",
      },
    },
  },
};
