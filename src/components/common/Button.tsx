import styled from "@emotion/styled";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgcolor?: string;
  children?: ReactNode;
}

export default function Button({
  bgcolor = "transparent",
  color = "inherit",
  children,
  ...rest
}: ButtonProps) {
  return (
    <Btn bgcolor={bgcolor} color={color} {...rest}>
      {children}
    </Btn>
  );
}

const Btn = styled.button<{ bgcolor?: string; color?: string }>`
  border: none;
  font-size: 14px;
  border-radius: 12px;
  padding: 0px;

  color: ${({ color }) => color};
  background-color: ${({ bgcolor }) => bgcolor};

  cursor: pointer;

  &:disabled {
    background-color: rgba(0, 0, 0, 0.1);
    color: rgba(255, 255, 255, 0.7);
    cursor: not-allowed;
  }
`;
