import React, { FC } from "react";

export interface ActivityBarGroupProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  expanded?: boolean;
}
const Group: FC<ActivityBarGroupProps> = ({
  expanded,
  className,
  ...props
}) => {
  return (
    <section
      className={`activity-bar-group ${
        expanded ? "expanded" : ""
      } ${className}`}
      {...props}
    />
  );
};

export default Group;
