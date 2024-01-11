import React from 'react';
import { StyledButton } from "./index.css";

interface ButtonInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> { children: React.ReactNode };

function Button({ children, ...buttonProps }: ButtonInterface) {
  return <StyledButton {...buttonProps}>{children}</StyledButton>
}

export default Button;