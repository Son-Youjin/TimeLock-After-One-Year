import styled from "@emotion/styled";
import type { ChangeEvent } from "react";
import { IoIosSearch } from "react-icons/io";
import { colors } from "../../styles/theme";

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
  height: 46px;
  font-size: 15px;
  border-radius: 16px;
  padding-left: 40px;

  background: ${colors.White};
  border: 1px solid rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease;
  color: ${colors.Text};

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px rgba(120, 140, 255, 0.25);
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 25px;
  pointer-events: none;
  color: ${colors.Text};

  position: absolute;
  top: 8px;
  left: 8px;
`;
