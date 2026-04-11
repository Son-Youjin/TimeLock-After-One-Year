import styled from "@emotion/styled";
import { IoIosSearch } from "react-icons/io";
import { style } from "../../styles/theme";

interface SearchBarProps {
  value: string;
  onKeyword: (value: string) => void;
  onClick: () => void;
}
import { forwardRef } from "react";

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ value, onKeyword, onClick }, ref) => {
    return (
      <Container>
        <Icon>
          <IoIosSearch size={20} />
        </Icon>
        <Search
          ref={ref}
          placeholder="노래 제목 또는 아티스트를 작성해주세요!"
          value={value}
          onChange={(e) => onKeyword(e.target.value)}
          onClick={onClick}
        />
      </Container>
    );
  },
);

export default SearchBar;

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
