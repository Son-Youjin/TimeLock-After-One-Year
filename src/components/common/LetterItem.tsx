import styled from "@emotion/styled";
import { style } from "../../styles/theme";
import { useNavigate } from "react-router-dom";
import type { ReactNode } from "react";
import { FaLock } from "react-icons/fa";

interface LetterItemProps {
  children: ReactNode;
  letterId: string;
}

export default function LetterItem({ children, letterId }: LetterItemProps) {
  const navigate = useNavigate();

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
  align-items: center;
  justify-content: center;

  width: 100%;
  padding-top: ${style.spacing.sectionGap};
  margin-bottom: ${style.spacing.contentGap};
  border-top: 1px dashed ${style.colors.Border};

  cursor: pointer;

  color: ${style.colors.Text_light};
  font-weight: 500;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${style.spacing.tightGap};
  color: ${style.colors.Text_light};
`;

const Text = styled.div`
  font-size: ${style.font.body};
  color: ${style.colors.Text_light};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
