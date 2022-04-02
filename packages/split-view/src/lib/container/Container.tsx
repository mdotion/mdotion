import React, { FC } from "react";
import "../../styles/main.css";

export interface ActivityBarRootProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  oriantation: "horizontal" | "vertical";
}

const Container: FC<ActivityBarRootProps> = ({
  oriantation,
  className,
  ...props
}) => {
  return (
    <div
      className={`split-view-container ${oriantation} ${className}`}
      {...props}
    />
  );
};

export default Container;
