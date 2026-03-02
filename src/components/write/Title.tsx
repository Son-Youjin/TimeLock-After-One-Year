import styled from "@emotion/styled";
import { colors } from "../../styles/theme";

interface TitleProps {
  value: string;
  onChange: (value: string) => void;
}

export default function Title({ value, onChange }: TitleProps) {
  return (
    <Container>
      <Label>제목 :</Label>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="제목을 입력하세요"
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
`;

const Label = styled.p`
  flex-shrink: 0;
  font-size: 14px;
  font-weight: 500;
  color: ${colors.Text};
`;

const Input = styled.input`
  flex: 1;
  height: 46px;
  font-size: 15px;
  line-height: 1.4;
  border-radius: 16px;
  padding: 0 16px;

  background-color: ${colors.White};
  border: 1px solid rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease;

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px rgba(120, 140, 255, 0.25);
  }
`;
