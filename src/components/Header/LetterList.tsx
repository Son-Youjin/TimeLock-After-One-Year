import styled from "@emotion/styled";
import ListItem from "./ListItem";
import React, { useState } from "react";

export default function LetterList() {
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(true);

  const handleScroll = (e: React.UIEvent<HTMLUListElement>) => {
    const el = e.currentTarget;

    const atTop = el.scrollTop === 0;
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

    setShowTop(!atTop);
    setShowBottom(!atBottom);
  };

  return (
    <>
      {showTop && <TopFade />}
      <Ul onScroll={handleScroll}>
        {Array.from({ length: 20 }).map(() => (
          <ListItem>oo님, 1년 전의 편지가 도착했습니다.</ListItem>
        ))}
      </Ul>
      {showBottom && <BottomFade />}
    </>
  );
}

const Ul = styled.ul`
  flex: 1;
  padding: 0px;
  margin: 6px 0px 0px;

  overflow: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const FadeBase = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 20px;
  z-index: 10;
  pointer-events: none;
`;

const TopFade = styled(FadeBase)`
  top: 40px;
  background: linear-gradient(
    to top,
    rgba(240, 248, 225, 0),
    rgba(240, 248, 225, 1)
  );
`;

const BottomFade = styled(FadeBase)`
  bottom: 10px;
  background: linear-gradient(
    to bottom,
    rgba(240, 248, 225, 0),
    rgba(240, 248, 225, 1)
  );
`;
