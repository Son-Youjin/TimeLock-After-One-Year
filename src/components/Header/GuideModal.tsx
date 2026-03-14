import styled from "@emotion/styled";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Button from "../common/Button";
import type { User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../api/firebase";
import loginMainImg from "../../assets/loginMainImg.svg";
import DdayImg from "../../assets/Dday.svg";
import lockedPageImg from "../../assets/lockedPageImg.svg";
import pwaGuideModal from "../../assets/pwaGuideModal.svg";

interface GuideModalProps {
  user: User | null;
  open: boolean;
  onClose: () => void;
}

const guides = [
  {
    title: "TimeLock",
    desc: "지금의 생각을 기록하면,\n1년 뒤 열어볼 수 있는 편지가 됩니다.",
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
    <BackDrop onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>가이드</Title>
          <Button onClick={onClose}>
            <IoMdClose size={20} />
          </Button>
        </Header>

        <Content>
          <GuideTitle>{guides[step].title}</GuideTitle>
          <GuideText>{guides[step].desc}</GuideText>
          {guides[step].img && (
            <ImageBox>
              <GuideImg src={guides[step].img} />
            </ImageBox>
          )}
        </Content>

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
      </Container>
    </BackDrop>
  );
}

const BackDrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Container = styled.section`
  width: 320px;
  min-height: 340px;
  max-height: 420px;
  padding: 22px;
  transform: translateY(-20%);

  background: white;
  border-radius: 16px;
  display: flex;
  flex-direction: column;

  animation: modalIn 0.25s ease;

  @keyframes modalIn {
    from {
      opacity: 0;
      transform: translateY(-30%);
    }
    to {
      opacity: 1;
      transform: translateY(-20%);
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const GuideTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const GuideText = styled.p`
  font-size: 14px;
  color: #555;
  white-space: pre-line;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 120px;
  margin: 14px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

const GuideImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin: 14px 0 20px 0;
`;

const Dot = styled.div<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ active }) => (active ? "#4f6f8f" : "#d3d3d3")};
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavButton = styled(Button)`
  padding: 6px 14px;
`;
