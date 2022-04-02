import React, { FC, ReactNode } from "react";
import "../../styles/main.css";

export interface TreeViewRootProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  children: ReactNode;
}
const Root: FC<TreeViewRootProps> = ({ ...props }) => {
  return <ul className={`tree-view-root ${props.className}`} {...props} />;
};

export default Root;
