import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { ActivityBar } from "../../components/activity-bar";

export type ActivityBarMenu = {
  id: string;
  label: string;
  icon: JSX.Element;
  isHidden?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  showOnBottom?: boolean;
}[];

/**
 * The main app layout.
 */
const EditorLayout = () => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 56,
          display: "flex",
          flexDirection: "column",
          zIndex: 100,
        }}
      >
        <ActivityBar />
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: 56,
          top: 0,
          bottom: 0,
          width: 320,
        }}
      >
        <Outlet />
      </Box>
      <Box
        sx={{
          ml: `${56 + 320}px`,
          backgroundColor: "red",
        }}
      >
        Hello world
      </Box>
    </>
  );
};

export default EditorLayout;
