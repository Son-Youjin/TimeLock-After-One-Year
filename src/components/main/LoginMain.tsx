import styled from "@emotion/styled";
import CreateButton from "../common/CreateButton";
import { style } from "../../styles/theme";
import LetterItem from "../common/LetterItem";

import TODAY_TIMESTAMP from "../../utils/todayTimestamp";
import calcDDay from "../../utils/calcDDay";
import type { User } from "firebase/auth";
import { formatDate } from "../../utils/formatDate";
import DdayCardSkeleton from "./DdayCardSkeleton";
import useNextComingLetter from "../../hooks/useNextComingLetter";
import { isOpenByDate } from "../../utils/isOpenByDate";

export default function LoginMain({ user }: { user: User | null }) {
  const name = user?.displayName ?? "";
  const userId = user?.uid;

  const { data, isLoading } = useNextComingLetter(userId);
  const comingOpen = data && !isOpenByDate(data.openAt) ? data : null;

  return (
    <>
      <Container>
        <Title>
          <Name>{name}님,</Name>
          <br />
          오늘의 시간도 차곡차곡 쌓이고 있어요.
        </Title>

        <Card>
          {isLoading ? (
            <DdayCardSkeleton />
          ) : comingOpen ? (
            <>
              <SubText>기록된 진심이 열리기까지</SubText>
              <Day>D-{calcDDay(comingOpen.openAt, TODAY_TIMESTAMP)}</Day>
              <OpenDate>{formatDate(comingOpen.openAt)}에 열립니다</OpenDate>

              <LetterItem letterId={comingOpen.id}>
                {comingOpen.title}
              </LetterItem>
            </>
          ) : (
            <EmptyText>예정된 편지가 없어요.</EmptyText>
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
  margin: ${style.layout.padding} 0 ${style.spacing.sectionGap};
`;

const Title = styled.span`
  font-size: ${style.font.sectionTitle};
  color: ${style.colors.Text_light};
  font-weight: 500;
  margin-top: ${style.spacing.contentGap};
`;

const Name = styled(Title)`
  font-weight: 600;
  color: ${style.colors.Text};
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 200px;

  border: 1px solid ${style.colors.Border};
  border-radius: ${style.radius.card};
  background-color: ${style.colors.Card_Background};
  box-shadow: ${style.shadow.card};

  padding: 32px ${style.layout.padding};
  margin: ${style.spacing.sectionGap} 0;
`;

const SubText = styled.p`
  font-size: ${style.font.body};
  font-weight: 500;
  color: ${style.colors.Text_light};
`;

const Day = styled.h1`
  width: 100%;
  text-align: center;

  font-size: 44px;
  font-weight: 900;
  color: ${style.colors.Darkblue};
  margin: ${style.spacing.contentGap} 0;
`;

const OpenDate = styled.p`
  font-size: ${style.font.body};
  color: ${style.colors.Text};
  margin-bottom: ${style.spacing.sectionGap};
`;

const EmptyText = styled.p`
  font-size: ${style.font.body};
  color: ${style.colors.Text_light};
`;
