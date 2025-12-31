import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import describeSector from "../../utils/describeSector";

export default function Clock() {
  const [writtenDay, setWrittenDay] = useState(0);
  const totalDays = 60;

  const r = 40;
  const progress = writtenDay / totalDays;
  const angle = Math.min(progress, 1) * 360;

  const isHalfPassed = progress >= 0.5;
  const isComplete = progress >= 1;

  useEffect(() => {
    const timer = setInterval(() => {
      setWrittenDay((prev) => (prev >= totalDays ? prev : prev + 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <ClockContainer>
      <svg viewBox="0 0 100 100">
        <defs>
          <clipPath id="clockClip" clipPathUnits="userSpaceOnUse">
            <circle cx={50} cy={50} r={r} />
          </clipPath>

          {/* 0 ~ 50% */}
          <radialGradient id="earlyGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2F3A4A" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#2F3A4A" stopOpacity="0.28" />
          </radialGradient>

          {/* 50% ~ 99% */}
          <radialGradient id="lateGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2F3A4A" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#2F3A4A" stopOpacity="0.5" />
          </radialGradient>

          {/* 100% */}
          <radialGradient id="goldGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE9A3" />
            <stop offset="100%" stopColor="#C9A227" />
          </radialGradient>
        </defs>

        {/* 배경 원 */}
        <circle
          cx={50}
          cy={50}
          r={r}
          fill="none"
          stroke="#ccc"
          strokeWidth={2}
        />

        {/* 지난 시간 원 */}
        <path
          d={describeSector(angle, r)}
          clipPath="url(#clockClip)"
          fill={
            isComplete
              ? "url(#goldGradient)"
              : `url(#${isHalfPassed ? "lateGradient" : "earlyGradient"})`
          }
          style={{
            transition: "fill 0.6s ease, d 0.6s ease",
          }}
        />

        {/* 라인 */}
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={i}
            x1={50}
            y1={10}
            x2={50}
            y2={15}
            stroke="#ccc"
            strokeLinecap="round"
            transform={`rotate(${i * 30} 50 50)`}
          />
        ))}

        <circle cx={50} cy={50} r={1} fill="#ccc" stroke="#ccc" />

        {/* <line
          x1={50}
          y1={10}
          x2={50}
          y2={50}
          stroke="#2F3A4A"
          strokeLinecap="round"
          transform={`rotate(${angle} 50 50)`}
        /> */}
      </svg>
    </ClockContainer>
  );
}

const ClockContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 20px 0 10px 0;
  transition: transform 0.6s ease-out;
`;
