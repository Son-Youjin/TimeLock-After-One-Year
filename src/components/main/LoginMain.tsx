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
import { formatDate } from "../../utils/formatDate";

export default function LoginMain({ user }: { user: User | null }) {
  const [comingOpen, setComingOpen] = useState<Letter | null>(null);
  const name = user?.displayName ?? "";

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
        <Title>
          <Name>{name}님,</Name> 오늘도 시간이 흐르고 있어요
        </Title>

        <Card>
          <SubText>다음 편지</SubText>

          {comingOpen && (
            <>
              <Day>D-{calcDDay(comingOpen.openAt, TODAY_TIMESTAMP)}</Day>
              <OpenDate>{formatDate(comingOpen.openAt)}에 열립니다</OpenDate>

              <LetterItem letterId={comingOpen.id}>
                {comingOpen.title}
              </LetterItem>
            </>
          )}
        </Card>
      </Container>
      <CreateButton />
    </>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 32px 0px 20px 0px;
`;

const Title = styled.span`
  font-size: 16px;
  color: ${colors.Text};
  font-weight: 500;
`;

const Name = styled(Title)`
  font-weight: 600;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: 160px;

  border-radius: ${colors.radius};
  background-color: #fffdf8;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);

  padding: 24px 18px;
  margin: 20px 0px;
`;

const SubText = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.Text};
`;

const Day = styled.h1`
  width: 100%;
  text-align: center;
  /* padding-top: 20px; */

  font-size: 32px;
  font-weight: 700;
  letter-spacing: -1px;
  color: ${colors.Darkblue};
`;

const OpenDate = styled.p`
  font-size: 14px;
  color: ${colors.Text};
  opacity: 0.8;
  margin: 0px 0 12px 0;
`;
