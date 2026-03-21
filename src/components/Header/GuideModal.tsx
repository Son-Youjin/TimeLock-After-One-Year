import styled from "@emotion/styled";
import { useState } from "react";
import Button from "../common/Button";
import type { User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../api/firebase";
import logo from "../../assets/logo.svg";
import loginMainImg from "../../assets/loginMainImg.svg";
import DdayImg from "../../assets/Dday.svg";
import lockedPageImg from "../../assets/lockedPageImg.svg";
import pwaGuideModal from "../../assets/pwaGuideModal.svg";
import Modal from "../common/Modal";
import { style } from "../../styles/theme";

interface GuideModalProps {
  user: User | null;
  open: boolean;
  onClose: () => void;
}

// TODO: 멘트 수정
const guides = [
  {
    title: "TimeLock",
    desc: "지금의 생각을 기록하면,\n1년 뒤 열어볼 수 있는 편지가 됩니다.",
    img: logo,
  },
  {
    title: "편지 작성",
    desc: "새 편지 쓰기를 눌러\n오늘의 마음이나 하루를 기록해보세요.",
    img: loginMainImg,
  },
  {
    title: "잠금 시스템",
    desc: "작성한 편지는 자동으로 잠기며\n정확히 1년 뒤에 열립니다.",
    img: lockedPageImg,
  },
  {
    title: "D-Day 확인",
    desc: "메인 화면에서 가장 먼저 열릴 편지와\n남은 시간을 확인할 수 있어요.",
    img: DdayImg,
  },
  {
    title: "앱으로 설치하기",
    desc: "홈 화면에 추가하면\n앱처럼 빠르게 TimeLock을 열 수 있어요.",
    img: pwaGuideModal,
  },
];

export default function GuideModal({ user, open, onClose }: GuideModalProps) {
  const [step, setStep] = useState(0);
  if (!open) return null;

  const isLast = step === guides.length - 1;

  function next() {
    if (isLast) {
      onClose();
      return;
    }
    setStep((prev) => prev + 1);
  }

  function prev() {
    setStep((prev) => Math.max(prev - 1, 0));
  }

  async function finishGuide() {
    if (!user) return;

    const userRef = doc(db, "users", user.uid);

    await setDoc(
      userRef,
      {
        hasSeenGuide: true,
      },
      { merge: true },
    );

    onClose();
  }

  return (
    <Modal onClose={onClose} title={"가이드"}>
      <Container>
        <Content>
          <GuideTitle>{guides[step].title}</GuideTitle>
          <GuideText>{guides[step].desc}</GuideText>
          {guides[step].img && (
            <ImageBox>
              <GuideImg src={guides[step].img} />
            </ImageBox>
          )}
        </Content>

        <Bottom>
          <Dots>
            {guides.map((_, i) => (
              <Dot key={i} active={i === step} />
            ))}
          </Dots>

          <Footer>
            {step > 0 ? <NavButton onClick={prev}>이전</NavButton> : <div />}

            <NavButton onClick={isLast ? finishGuide : next}>
              {isLast ? "편지 쓰기" : "다음"}
            </NavButton>
          </Footer>
        </Bottom>
      </Container>
    </Modal>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Content = styled.div`
  flex: 1;
  text-align: center;
`;

const GuideTitle = styled.h3`
  font-size: ${style.font.sectionTitle};
  font-weight: 600;
  margin-bottom: ${style.spacing.contentGap};
`;

const GuideText = styled.p`
  font-size: ${style.font.body};
  color: ${style.colors.Text_light};
  white-space: pre-line;
  line-height: 1.5;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 120px;
  margin: ${style.spacing.contentGap} 0;

  overflow: hidden;
`;

const GuideImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Bottom = styled.div``;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: ${style.spacing.tightGap};
  margin: ${style.spacing.contentGap} 0 ${style.spacing.sectionGap};
`;

const Dot = styled.div<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: ${style.radius.pill};
  background: ${({ active }) =>
    active ? style.colors.Darkblue : style.colors.Gray};
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${style.spacing.contentGap};
`;

const NavButton = styled(Button)`
  height: ${style.size.buttonHeight};
  padding: 0 ${style.spacing.contentGap};
  border-radius: ${style.radius.button};

  font-size: ${style.font.body};
  font-weight: 500;
`;
