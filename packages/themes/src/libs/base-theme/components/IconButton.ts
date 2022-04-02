import { Components } from "@mui/material";

export const IconButton: Components["MuiIconButton"] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: ({ theme }: any) => ({
      borderRadius: theme.shape.borderRadius,
    }),
  },
};
