import { Outlet } from "react-router-dom";
import { ActivityBar } from "../../components/activity-bar";
import { SplitViewContainer, SplitViewView } from "@mdotion/split-view";

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
            type: "fixed",
            size: 56,
          },
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
          {
            type: "resizeable",
            size: 280,
            minSize: 100,
            maxSize: 600,
          },
        ]}
      >
        <SplitViewView isFixed>
          <ActivityBar />
        </SplitViewView>
        <SplitViewView>
          <Outlet />
        </SplitViewView>
        <SplitViewView
          style={{
            backgroundColor: "blue",
          }}
        >
          <SplitViewContainer
            oriantation="vertical"
            initSizes={[
              {
                type: "auto",
              },
              {
                type: "resizeable",
                size: 400,
                minSize: 50,
                maxSize: 600,
              },
            ]}
          >
            <SplitViewView
              style={{
                backgroundColor: "red",
              }}
            >
              hello
            </SplitViewView>

            <SplitViewView
              style={{
                backgroundColor: "red",
              }}
            >
              hello
            </SplitViewView>
          </SplitViewContainer>
        </SplitViewView>
        <SplitViewView
          style={{
            backgroundColor: "red",
          }}
        >
          hello
        </SplitViewView>
      </SplitViewContainer>
    </div>
  );
};

export default EditorLayout;
