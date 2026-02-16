import styled from "@emotion/styled";
import CreateButton from "../common/CreateButton";
import { colors } from "../../styles/theme";
import LetterItem from "../common/LetterItem";
import { useEffect, useState } from "react";
import type { Letter } from "../../types/letter";
import TODAY_TIMESTAMP from "../../utils/todayTimestamp";
import calcDDay from "../../utils/calcDDay";
import { getNextComingLetter } from "../../api/letters";
import type { User } from "firebase/auth";
import { isOpenByDate } from "../../utils/isOpenByDate";

export default function LoginMain({ user }: { user: User | null }) {
  const [comingOpen, setComingOpen] = useState<Letter | null>(null);

  useEffect(() => {
    if (!user) return;

    const uid = user?.uid;

    async function fetch() {
      const data = await getNextComingLetter(uid);

      if (data && isOpenByDate(data?.openAt)) {
        setComingOpen(null);
      } else {
        setComingOpen(data);
      }
    }
    fetch();
  }, [user]);

  return (
    <>
      <Container>
        <Border>
          <SubText>다음 편지가 열리기까지</SubText>
          {comingOpen && (
            <>
              {/* TODO:제목이 긴 편지 레이아웃 대응 */}
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
  margin: 10px 0px 40px 0px;
`;

const Border = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;

  padding: 24px;
  border: 1px solid silver;
  border-radius: 24px;
`;

const SubText = styled.p`
  font-size: 16px;
  color: ${colors.Text};
  padding: 4px 0px 8px 0px;
`;

const Day = styled.h1`
  color: ${colors.Text};
`;
