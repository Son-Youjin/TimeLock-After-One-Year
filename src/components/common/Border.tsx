import styled from "@emotion/styled";
import type { ReactNode } from "react";

export type Border = {
  children: ReactNode;
};

export default function Border(props: Border) {
  return <Container>{props.children}</Container>;
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;

  padding: 24px;
  border: 1px solid silver;
  border-radius: 24px;

  /* margin-top: 60%; */
`;
