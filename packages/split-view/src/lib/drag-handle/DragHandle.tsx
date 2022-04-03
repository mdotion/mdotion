import React, { FC } from "react";
import "./drag-handle.css";

export interface SplitViewDragHandleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  oriantation: "horizontal" | "vertical";
  isDragging: boolean;
}
const DragHandle: FC<SplitViewDragHandleProps> = ({
  oriantation,
  isDragging,
  className,
  ...props
}) => {
  return (
    <div
      className={`split-view-drag-handle ${oriantation} ${
        isDragging ? "dragging" : ""
      } ${className}`}
      {...props}
    />
  );
};

export default DragHandle;
