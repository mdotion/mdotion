import React, { FC } from "react";

export interface ActivityBarButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isActive?: boolean;
}

const ActionButton: FC<ActivityBarButtonProps> = ({
  isActive,
  className,
  ...props
}) => {
  return (
    <button
      className={`sidebar-action-button ${
        isActive ? "active" : ""
      } ${className}`}
      {...props}
    />
  );
};
export default ActionButton;
