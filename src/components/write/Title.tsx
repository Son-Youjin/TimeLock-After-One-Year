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
  margin: 20px 0 12px 0;
`;

const Label = styled.p`
  flex-shrink: 0;
  font-size: 14px;
  font-weight: 500;
  color: ${colors.Text};
`;

const Input = styled.input`
  flex: 1;
  height: 48px;
  font-size: 15px;
  line-height: 1.4;
  background-color: #fff;
  border-radius: 14px;
  padding: 0 12px;
  border: 1px solid rgba(0, 0, 0, 0.06);

  &:focus {
    background-color: rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    transition: background-color 0.2s ease;
  }

  &:focus-visible {
    outline: none;
  }
`;
