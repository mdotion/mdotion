import * as ActivityBarPrimitive from "@mdotion/activity-bar";
import {
  FileCopyOutlined,
  SearchOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import { useCallback } from "react";
import { useMatch, useNavigate } from "react-router-dom";

const ActivityBar = () => {
  const navigate = useNavigate();

  const match = useCallback((pattern: string) => {
    return useMatch(pattern);
  }, []);

  return (
    <ActivityBarPrimitive.Root>
      <ActivityBarPrimitive.Content>
        <ActivityBarPrimitive.Group expanded>
          <ActivityBarPrimitive.Button
            aria-label="Explorer button"
            isActive={!!match("/")}
            onClick={() => {
              navigate("/");
            }}
          >
            <FileCopyOutlined />
          </ActivityBarPrimitive.Button>
          <ActivityBarPrimitive.Button
            aria-label="Search button"
            isActive={!!match("/search")}
            onClick={() => {
              navigate("/search");
            }}
          >
            <SearchOutlined />
          </ActivityBarPrimitive.Button>
        </ActivityBarPrimitive.Group>
        <ActivityBarPrimitive.Group>
          <ActivityBarPrimitive.Button aria-label="Explorer Button">
            <SettingsOutlined />
          </ActivityBarPrimitive.Button>
        </ActivityBarPrimitive.Group>
      </ActivityBarPrimitive.Content>
    </ActivityBarPrimitive.Root>
  );
};

export default ActivityBar;
