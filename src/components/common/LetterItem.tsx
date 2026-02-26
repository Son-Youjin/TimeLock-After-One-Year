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

      <Text>{children}</Text>
    </LetterBox>
  );
}

const LetterBox = styled.div`
  display: flex;
  width: 100%;
  padding-top: 30px;
  justify-content: center;

  border-top: 1px dashed rgba(0, 0, 0, 0.12);
  margin-bottom: 6px;

  font-weight: 600;
  color: ${colors.Active};
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
  color: ${colors.Text_light};
`;

const Text = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${colors.Text_light};
`;
