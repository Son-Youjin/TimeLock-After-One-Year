import styled from "@emotion/styled";
import type { ChangeEvent } from "react";
import { IoIosSearch } from "react-icons/io";
import { style } from "../../styles/theme";

interface SearchBarProps {
  value: string;
  onKeyword: (value: string) => void;
  onClick: () => void;
}

export default function SearchBar({
  value,
  onKeyword,
  onClick,
}: SearchBarProps) {
  const handleInputKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    onKeyword(e.target.value);
  };

  return (
    <Container onClick={onClick}>
      <Icon>
        <IoIosSearch size={20} />
      </Icon>
      <Search
        placeholder="노래 제목 또는 아티스트를 작성해주세요!"
        value={value}
        onChange={handleInputKeyword}
      />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

const Search = styled.input`
  width: 100%;
  height: ${style.size.inputHeight};

  font-size: ${style.font.body};
  color: ${style.colors.Text};
  background: ${style.colors.Surface};
  border: 1px solid ${style.colors.Border};
  border-radius: ${style.radius.input};
  padding-left: 40px;

  transition: ${style.motion.card};

  &::placeholder {
    color: ${style.colors.Text_light};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px ${style.colors.Focus};
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50%;
  left: ${style.spacing.contentGap};
  transform: translateY(-50%);

  pointer-events: none;
  color: ${style.colors.Text_light};
`;
