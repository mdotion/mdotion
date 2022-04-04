import * as ActivityBarPrimitive from "@mdotion/activity-bar";
import { MdFileCopy, MdSearch, MdSettings } from "react-icons/md";
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
            <MdFileCopy />
          </ActivityBarPrimitive.Button>
          <ActivityBarPrimitive.Button
            aria-label="Search button"
            isActive={!!match("/search")}
            onClick={() => {
              navigate("/search");
            }}
          >
            <MdSearch />
          </ActivityBarPrimitive.Button>
        </ActivityBarPrimitive.Group>
        <ActivityBarPrimitive.Group>
          <ActivityBarPrimitive.Button aria-label="Explorer Button">
            <MdSettings />
          </ActivityBarPrimitive.Button>
        </ActivityBarPrimitive.Group>
      </ActivityBarPrimitive.Content>
    </ActivityBarPrimitive.Root>
  );
};

export default ActivityBar;
