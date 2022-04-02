declare module "@mui/material/styles" {
  interface ThemeOptions extends Theme {}
  interface PaletteOptions {
    activityBar: {
      background?: string;
      color?: string;
      button: {
        default: {
          background?: string;
          color?: string;
        };
        active: {
          background?: string;
          color?: string;
        };
        hover: {
          background?: string;
          color?: string;
        };
      };
    };
    sidebar?: {
      background?: string;
      color?: string;
      actionButton: {
        default: {
          background?: string;
          color?: string;
        };
        active: {
          background?: string;
          color?: string;
        };
        hover: {
          background?: string;
          color?: string;
        };
      };
    };
    treeView?: {
      leftBorderColor?: string;
      treeItem?: {
        default?: {
          background?: string;
          color?: string;
        };
        hover?: {
          background?: string;
          color?: string;
        };
        active?: {
          background?: string;
          color?: string;
        };
        focus?: {
          background?: string;
          color?: string;
        };
      };
    };
  }
  interface Theme extends ThemeOptions {}
  interface Palette extends PaletteOptions {}
}

export * from "./base-theme";
export * from "./dark-theme";
export * from "./light-theme";
