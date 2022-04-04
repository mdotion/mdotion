import { Outlet } from "react-router-dom";
import { SplitViewContainer, SplitViewView } from "@mdotion/split-view";
import "./editor-layout.css";

const EditorLayout = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
      }}
    >
      <SplitViewContainer
        oriantation="horizontal"
        initSizes={[
          {
            ...(false
              ? {
                  type: "fixed",
                  size: 0,
                }
              : {
                  type: "resizeable",
                  size: 320,
                  minSize: 100,
                  maxSize: 600,
                }),
          },
          {
            type: "auto",
          },
        ]}
      >
        <SplitViewView>
          <Outlet />
        </SplitViewView>
        <SplitViewView className="container">Hello world</SplitViewView>
      </SplitViewContainer>
    </div>
  );
};

export default EditorLayout;
