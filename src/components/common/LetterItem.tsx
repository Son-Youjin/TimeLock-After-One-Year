import styled from "@emotion/styled";
import { colors } from "../../styles/theme";
import { useNavigate } from "react-router-dom";

interface LetterItemProps {
  text: string;
}

export default function LetterItem({ text }: LetterItemProps) {
  const navigate = useNavigate();

  // TODO: letter id 수정
  const id = 1;

  return (
    <LetterBox onClick={() => navigate(`/letter/${id}`)}>{text}</LetterBox>
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
