import React, { FC } from "react";

export interface SplitViewViewProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  fixedWidth?: boolean;
  width?: number;
  flex?: number;
}

const View: FC<SplitViewViewProps> = ({
  fixedWidth,
  width,
  flex,
  className,
  ...props
}) => {
  return (
    <div
      className={`split-view-view ${className}`}
      style={{
        ...(fixedWidth ? { width: `${width}px` } : {}),
      }}
      {...props}
    />
  );
};

export default View;
