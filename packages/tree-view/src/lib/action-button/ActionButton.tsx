import React, { FC } from "react";

export interface TreeViewActionButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: JSX.Element;
}

const ActionButton: FC<TreeViewActionButtonProps> = ({
  icon,
  className,
  ...props
}) => {
  return (
    <button className={`tree-view-item-action-button ${className}`} {...props}>
      {icon}
    </button>
  );
};

export default ActionButton;
