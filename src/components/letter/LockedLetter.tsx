import styled from "@emotion/styled";
import DDayCard from "../clock/DDayCard";
import { colors } from "../../styles/theme";
import { useEffect, useState } from "react";
import type { Letter } from "../../types/letter";
import { getLetters } from "../../mock/api/letters";
import { useParams } from "react-router-dom";

export default function LockedLetter() {
  const { id } = useParams<{ id: string }>();
  const [letters, setLetters] = useState<Letter[]>([]);

  const letter = letters.find((letter) => letter.id === id);

  useEffect(() => {
    async function fetch() {
      const data = await getLetters();
      setLetters(data);
    }
    fetch();
  }, []);

  return (
    <Container>
      <Title>{letter?.title}</Title>
      <DDayCard />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: center;
  /* justify-content: center; */
`;

const Title = styled.h1`
  font-size: 24px;
  color: ${colors.Text};
  padding: 4px 0px 8px 0px;
  margin-bottom: 10px;
`;

// const Day = styled.h1`
//   color: ${colors.Text};
// `;
