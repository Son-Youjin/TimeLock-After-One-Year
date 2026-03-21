import styled from "@emotion/styled";
import { style } from "../../styles/theme";
import { useEffect, useState } from "react";

interface ClockProps {
  progress: number;
}

export default function Clock({ progress }: ClockProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  const r = 40;
  const stroke = 6;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - animatedProgress * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 50);

    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <ClockContainer>
      <svg viewBox="0 0 100 100">
        <defs>
          <clipPath id="clockClip" clipPathUnits="userSpaceOnUse">
            <circle cx={50} cy={50} r={r} />
          </clipPath>
        </defs>

        {/* 배경 링 */}
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="transparent"
          stroke={style.colors.Border}
          strokeWidth={stroke}
        />

        {/* 진행 링 */}
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="transparent"
          stroke={style.colors.ClearBlue}
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
          style={{
            transition: `stroke-dashoffset ${style.motion.card}`,
          }}
        />
      </svg>

      <Day>{Math.floor(progress * 100)}%</Day>
    </ClockContainer>
  );
}

const ClockContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;

const Day = styled.h1`
  position: absolute;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: ${style.colors.Darkblue};
`;
