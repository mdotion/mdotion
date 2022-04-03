import React, { FC } from "react";
import "./drag-handle.css";

export interface SplitViewDragHandleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  oriantation: "horizontal" | "vertical";
}
const DragHandle: FC<SplitViewDragHandleProps> = ({
  oriantation,
  ...props
}) => {
  return <div className={`split-view-drag-handle ${oriantation}`} {...props} />;
};

export default DragHandle;
