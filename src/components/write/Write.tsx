import styled from "@emotion/styled";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { getLetters } from "../../mock/api/letters";
import { searchKeyword } from "../../utils/searchKeyword";
import type { Letter } from "../../types/letter";
import type { MusicMeta } from "../../types/musicMeta";
import MusicList from "./MusicList";
import { colors } from "../../styles/theme";

export default function Write() {
  const [letters, setLetters] = useState<Letter[]>([]);
  const [keyword, setKeyword] = useState("");
  const [searchResults, setSearchResults] = useState<MusicMeta[]>([]);
  const [selectedMusic, setSelectedMusic] = useState<MusicMeta | null>(null);

  useEffect(() => {
    async function fetch() {
      const data = await getLetters();
      setLetters(data);
    }
    fetch();
  }, []);

  const handleSearchSong = async () => {
    const results = await searchKeyword(keyword);
    setSearchResults(results);
    setKeyword("");
  };

  return (
    <Container>
      <SearchBar
        value={keyword}
        onKeyword={(value: string) => setKeyword(value)}
        onSearch={handleSearchSong}
      />

      {selectedMusic ? (
        <SelectedMusic>
          {selectedMusic.artist} - {selectedMusic.name}
        </SelectedMusic>
      ) : (
        <MusicList
          onSearchResults={searchResults}
          onSelectedMusic={setSelectedMusic}
        />
      )}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 20px;
`;

const SelectedMusic = styled.div`
  display: flex;
  border: 1px solid ${colors.Active};
  border-radius: 4px;
  padding: 10px;
  margin: 20px 0px;
`;
