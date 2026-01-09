import styled from "@emotion/styled";
import type { ReactNode } from "react";

interface ListItemProps {
  children: ReactNode;
}

export default function ListItem({ children }: ListItemProps) {
  return <List>{children}</List>;
}

const List = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;

  font-size: 14px;
  padding-left: 6px;

  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    margin: 6px 0px;
  }

  &::after:last-child {
    background-color: transparent;
  }
`;
