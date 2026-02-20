import styled from "@emotion/styled";
import describeSector from "../../utils/describeSector";
import type { LetterStatus } from "../../types/letterStatus";

interface ClockProps {
  progress: number;
  status: LetterStatus;
}

export default function Clock({ progress, status }: ClockProps) {
  const r = 40;
  const angle = Math.min(Math.max(progress, 0), 1) * 360;

  const statusColorMap: Record<LetterStatus, string> = {
    PENDING: "url(#earlyGradient)",
    HALF: "url(#lateGradient)",
    ONE_DAY: "url(#lateGradient)",
    OPENED: "url(#goldGradient)",
  };

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
          fill={statusColorMap[status]}
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
      </svg>
    </ClockContainer>
  );
}

const ClockContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 10px 0 10px 0;
  transition: transform 0.6s ease-out;
`;
