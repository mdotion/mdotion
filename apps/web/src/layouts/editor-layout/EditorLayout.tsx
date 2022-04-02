import { Outlet } from "react-router-dom";
import { ActivityBar } from "../../components/activity-bar";
import { useCallback, useEffect, useState } from "react";
export type ActivityBarMenu = {
  id: string;
  label: string;
  icon: JSX.Element;
  isHidden?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  showOnBottom?: boolean;
}[];

const EditorLayout = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [viewOneWidth, setViewOneWidth] = useState(64);
  const [viewTwoWidth, setViewTwoWidth] = useState(320);
  const [viewThreeWidth, setViewThreeWidth] = useState(
    window.innerWidth - viewOneWidth - viewTwoWidth
  );

  const onWindowResize = useCallback(() => {
    setViewThreeWidth(window.innerWidth - viewOneWidth - viewTwoWidth);
  }, [viewOneWidth, viewTwoWidth, setViewThreeWidth]);

  const onDragStart = useCallback(() => {
    setIsDragging(true);
  }, [setIsDragging]);

  const onDragEnd = useCallback(() => {
    setIsDragging(false);
  }, [setIsDragging]);

  const onDrag = useCallback(
    (e: MouseEvent) => {
      if (e.clientX !== 0) {
        const viewTwoWidth = Math.min(
          Math.max(e.clientX - viewOneWidth, 100),
          600
        );
        setViewTwoWidth(viewTwoWidth);
        setViewThreeWidth(window.innerWidth - viewOneWidth - viewTwoWidth);
      }
    },
    [viewOneWidth, setViewTwoWidth, setViewThreeWidth]
  );

  useEffect(() => {
    window.addEventListener("resize", onWindowResize);
    if (isDragging) {
      window.addEventListener("mousemove", onDrag);
      window.addEventListener("mouseup", onDragEnd);
    }
    return () => {
      window.removeEventListener("resize", onWindowResize);
      window.removeEventListener("mousemove", onDrag);
      window.removeEventListener("mouseup", onDragEnd);
    };
  }, [isDragging, onWindowResize, onDrag]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        className={`split-view-container horizontal ${
          isDragging ? "dragging" : ""
        }`}
      >
        <div
          className="split-view-drag-handle"
          style={{
            left: viewOneWidth + viewTwoWidth,
          }}
          onMouseDown={onDragStart}
        />
        <div
          className="split-view-view"
          style={{
            width: viewOneWidth,
            left: 0,
          }}
        >
          <ActivityBar />
        </div>
        <div
          className="split-view-view"
          style={{
            width: viewTwoWidth,
            left: viewOneWidth,
          }}
        >
          <Outlet />
        </div>
        <div
          className="split-view-view"
          style={{
            width: viewThreeWidth,
            left: viewOneWidth + viewTwoWidth,
          }}
        ></div>
      </div>
    </div>
  );
};

export default EditorLayout;
