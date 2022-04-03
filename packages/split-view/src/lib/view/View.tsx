import React, { FC } from "react";
import "./view.css";

export interface SplitViewViewProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isFixed?: boolean;
  flex?: number;
}

const View: FC<SplitViewViewProps> = ({
  isFixed: fixedWidth,
  flex,
  className,
  ...props
}) => {
  return <div className={`split-view-view ${className}`} {...props} />;
};

export default View;
