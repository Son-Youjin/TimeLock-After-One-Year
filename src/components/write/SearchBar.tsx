import styled from "@emotion/styled";
import type { ChangeEvent, KeyboardEvent } from "react";
import { IoIosSearch } from "react-icons/io";

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
        <IoIosSearch />
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
  margin-bottom: 20px;
`;

const Search = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 20px;
  border: none;
  background-color: rgba(0, 0, 0, 0.1);
  padding-left: 36px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 25px;
  pointer-events: none;

  position: absolute;
  top: 2px;
  left: 4px;
`;
