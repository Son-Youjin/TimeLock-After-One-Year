import styled from "@emotion/styled";

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
  margin: 12px 0px 4px;
`;

const Label = styled.p`
  width: 50px;
  font-size: 18px;
  margin-right: 4px;
  line-height: 0;
`;

const Input = styled.input`
  width: 90%;
  height: 38px;
  border: none;
  font-size: 14px;

  &:focus,
  &:focus-visible {
    outline: none;
    background-color: rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    transition: background-color 0.2s ease;
  }
`;
