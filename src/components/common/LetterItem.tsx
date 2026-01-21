import styled from "@emotion/styled";
import { colors } from "../../styles/theme";
import { useNavigate } from "react-router-dom";
import type { ReactNode } from "react";
import { FaLock } from "react-icons/fa";

interface LetterItemProps {
  children: ReactNode;
  letterId: string;
}

export default function LetterItem({ children, letterId }: LetterItemProps) {
  const navigate = useNavigate();

  // TODO: letter id 수정

  return (
    <LetterBox onClick={() => navigate(`/letter/${letterId}`)}>
      <Icon>
        <FaLock size={18} />
      </Icon>

      {children}
    </LetterBox>
  );
}

const LetterBox = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 0;
  margin: 8px 0 16px;
  justify-content: center;

  border-top: 1px dashed rgba(47, 58, 74, 0.25);
  border-bottom: 1px dashed rgba(47, 58, 74, 0.25);

  font-weight: 600;
  color: ${colors.Active};
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;
