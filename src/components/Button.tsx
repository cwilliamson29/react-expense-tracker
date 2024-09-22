import React from "react";

interface Props {
  buttonText: string;
  color?: "primary" | "secondary" | "success" | "danger" | "warning";
  onClick: () => void;
}

const Button = ({ buttonText, color = "primary", onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
