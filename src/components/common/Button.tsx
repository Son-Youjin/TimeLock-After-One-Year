import styled from "@emotion/styled";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgcolor: string;
  text: string;
}

export default function Button({ bgcolor, color, text, ...rest }: ButtonProps) {
  return (
    <Btn bgcolor={bgcolor} color={color} {...rest}>
      {text}
    </Btn>
  );
}

const Btn = styled.button<{ bgcolor: string }>`
  width: 100%;
  height: 56px;
  border: none;
  border-radius: 8px;
  margin-bottom: 12px;

  color: ${({ color }) => color};
  background-color: ${({ bgcolor }) => bgcolor};

  cursor: pointer;
`;
