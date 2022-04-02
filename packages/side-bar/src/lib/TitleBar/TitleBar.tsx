import React, { FC } from "react";

export interface SidebarTitleBarProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title: string;
}

const TitleBar: FC<SidebarTitleBarProps> = ({
  title,
  children,
  className,
  ...props
}) => {
  return (
    <div className={`sidebar-title-bar ${className}`} {...props}>
      <h3 className="sidebar-title-bar-title">{title}</h3>
      <div className="sidebar-title-bar-actions">{children}</div>
    </div>
  );
};

export default TitleBar;
