import React, { FC } from "react";

export interface TreeViewItemProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string;
  actions?: React.ReactNode;
  isActive?: boolean;
  icon?: React.ReactNode;
  tabIndex: number;
}

const Item: FC<TreeViewItemProps> = ({
  label,
  actions,
  isActive,
  className,
  icon,
  children,
  tabIndex,
  ...props
}) => {
  return (
    <li className={`tree-view-item ${className}`}>
      <div className="tree-view-item-wrapper">
        <button
          type="button"
          className={`tree-view-item-button ${isActive ? "active" : ""}`}
          style={{
            paddingLeft: `${tabIndex * 16}px`,
            ...props.style,
          }}
          {...props}
        >
          <span className="tree-view-item-icon">{icon}</span>
          <span className="tree-view-item-label">{label}</span>
        </button>
        <div className="tree-view-item-actions">{actions}</div>
      </div>
      {children}
    </li>
  );
};

export default Item;
