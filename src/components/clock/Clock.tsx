import styled from "@emotion/styled";
import { colors } from "../../styles/theme";
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
          stroke="rgba(0,0,0,0.06)"
          strokeWidth={stroke}
        />

        {/* 진행 링 */}
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="transparent"
          stroke={colors.ClearBlue}
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
          style={{
            transition: "stroke-dashoffset 0.8s cubic-bezier(.4,0,.2,1)",
          }}
        />
      </svg>

      <Day>{Math.floor(progress * 100)}%</Day>
    </ClockContainer>
  );
}

const ClockContainer = styled.div`
  position: relative;
  width: 220px;
  height: 220px;
`;

const Day = styled.h1`
  position: absolute;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 34px;
  letter-spacing: -0.5px;
  font-weight: 700;
  color: ${colors.Darkblue};
`;
