import React, { FC } from "react";

export interface ActivityBarButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isActive?: boolean;
}

const Button: FC<ActivityBarButtonProps> = ({
  isActive,
  className,
  ...props
}) => {
  return (
    <button
      className={`activity-bar-button ${isActive ? "active" : ""} ${className}`}
      {...props}
    />
  );
};
export default Button;
