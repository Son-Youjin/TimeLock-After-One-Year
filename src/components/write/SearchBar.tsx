import styled from "@emotion/styled";
import type { ChangeEvent, KeyboardEvent } from "react";
import { IoIosSearch } from "react-icons/io";
import { colors } from "../../styles/theme";

interface SearchBarProps {
  value: string;
  onKeyword: (value: string) => void;
  onSearch: () => void;
  onClick: () => void;
}

export default function SearchBar({
  value,
  onKeyword,
  onSearch,
  onClick,
}: SearchBarProps) {
  const handleInputKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    onKeyword(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
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
        onKeyDown={handleKeyDown}
      />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-bottom: 14px;
`;

const Search = styled.input`
  width: 100%;
  height: 46px;
  font-size: 15px;
  border-radius: 16px;

  outline: none;
  background: #fff;
  padding-left: 36px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  color: ${colors.Text};
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
