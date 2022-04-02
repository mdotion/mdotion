import React, { FC } from "react";
import "../../styles/main.css";

export interface ActivityBarRootProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

const Root: FC<ActivityBarRootProps> = ({ className, ...props }) => {
  return <nav className={`activity-bar-root ${className}`} {...props} />;
};

export default Root;
