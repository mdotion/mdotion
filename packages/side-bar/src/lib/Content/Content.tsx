import React, { FC } from "react";

export interface ActivityBarContentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}
const Content: FC<ActivityBarContentProps> = ({ className, ...props }) => {
  return <div className={`sidebar-content ${className}`} {...props} />;
};

export default Content;
