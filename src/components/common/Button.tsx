import styled from "@emotion/styled";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { style } from "../../styles/theme";

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
  font-size: ${style.font.littleTitle};
  border-radius: ${style.radius.button};
  padding: 0;

  color: ${({ color }) => color};
  background-color: ${({ bgcolor }) => bgcolor};

  cursor: pointer;

  &:disabled {
    background-color: ${style.colors.Gray};
    color: ${style.colors.Text_light};
    cursor: not-allowed;
  }
`;
