import styled from "@emotion/styled";
import { style } from "../../styles/theme";

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
  gap: ${style.spacing.tightGap};

  margin-bottom: ${style.spacing.contentGap};
`;

const Label = styled.p`
  flex-shrink: 0;
  font-size: ${style.font.body};
  font-weight: 500;
  color: ${style.colors.Text};
`;

const Input = styled.input`
  flex: 1;
  height: ${style.size.inputHeight};
  font-size: ${style.font.body};
  color: ${style.colors.Text};
  line-height: 1.4;

  background-color: ${style.colors.Surface};
  border: 1px solid ${style.colors.Border};
  border-radius: ${style.radius.input};
  padding: 0 ${style.spacing.contentGap};

  transition: ${style.motion.card};

  &::placeholder {
    color: ${style.colors.Text_light};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px ${style.colors.Focus};
  }
`;
