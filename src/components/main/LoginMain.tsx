import styled from "@emotion/styled";
import Border from "../common/Border";
import CreateButton from "../common/CreateButton";
import { colors } from "../../styles/theme";
import LetterItem from "../common/LetterItem";
import { useEffect, useMemo, useState } from "react";
import type { Letter } from "../../types/letter";
import { getLetters } from "../../mock/api/letters";
import TODAY_TIMESTAMP from "../../utils/todayTimestamp";
import calcDDay from "../../utils/calcDDay";

export default function LoginMain() {
  const [letters, setLetters] = useState<Letter[]>([]);

  const comingOpen = useMemo(() => {
    if (letters.length === 0) return;

    return (
      letters
        .filter((letter) => letter.openAt > TODAY_TIMESTAMP)
        .sort((a, b) => a.openAt - b.openAt)[0] ?? null
    );
  }, [letters]);

  useEffect(() => {
    async function fetch() {
      const data = await getLetters();
      setLetters(data);
    }
    fetch();
  }, []);

  return (
    <>
      <Container>
        <Border>
          <SubText>다음 편지가 열리기까지</SubText>
          {comingOpen && (
            <>
              <LetterItem letterId={comingOpen.id}>
                {comingOpen.title}
              </LetterItem>

              <Day>D-{calcDDay(comingOpen.openAt, TODAY_TIMESTAMP)}</Day>
            </>
          )}
        </Border>
      </Container>
      <CreateButton />
    </>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0px 20px 0px;
`;

const SubText = styled.p`
  font-size: 14px;
  color: ${colors.Text};
`;

const Day = styled.h1`
  color: ${colors.Text};
`;
