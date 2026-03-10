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
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../api/firebase";
import GuideModal from "../Header/GuideModal";
import DdayCardSkeleton from "./DdayCardSkeleton";

export default function LoginMain({ user }: { user: User | null }) {
  const [comingOpen, setComingOpen] = useState<Letter | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const name = user?.displayName ?? "";

  useEffect(() => {
    if (!user) return;

    const uid = user.uid;

    async function fetch() {
      try {
        const userRef = doc(db, "users", uid);
        const [letter, snap] = await Promise.all([
          getNextComingLetter(uid),
          getDoc(userRef),
        ]);

        if (letter && isOpenByDate(letter.openAt)) {
          setComingOpen(null);
        } else {
          setComingOpen(letter);
        }

        if (snap.exists()) {
          const userData = snap.data();

          if (!userData.hasSeenGuide) {
            setTimeout(() => {
              setIsGuideOpen(true);
            }, 800);
          }
        }
      } finally {
        setLoading(false);
      }
    }

    fetch();
  }, [user]);

  return (
    <>
      <Container>
        <Title>
          <Name>{name}님,</Name> 오늘의 시간도 차곡차곡 쌓이고 있어요.
        </Title>

        <Card>
          {loading ? (
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

      {isGuideOpen && (
        <GuideModal user={user} onClose={() => setIsGuideOpen(false)} />
      )}
    </>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 20px 0px 24px 0px;
`;

const Title = styled.span`
  font-size: 16px;
  color: ${colors.Text_light};
  font-weight: 500;
  margin-top: 12px;
`;

const Name = styled(Title)`
  font-weight: 600;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: 200px;

  border-radius: ${colors.radius};
  background-color: ${colors.Card_Background};
  border: 1px solid #e2e8f0;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.03);

  padding: 32px 20px;
  margin: 24px 0px 28px 0px;
`;

const SubText = styled.p`
  font-size: 14px;
  font-weight: 500;
  opacity: 0.7;
  color: ${colors.Text_light};
`;

const Day = styled.h1`
  width: 100%;
  text-align: center;

  font-size: 40px;
  font-weight: 700;
  color: ${colors.Darkblue};
  margin: 16px 0;
`;

const OpenDate = styled.p`
  font-size: 14px;
  color: ${colors.Text};
  opacity: 0.5;
  margin-bottom: 22px;
`;

const EmptyText = styled.p`
  font-size: 15px;
  color: ${colors.Text_light};
  opacity: 0.8;
  margin: 48px 0 20px;
`;
