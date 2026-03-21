import styled from "@emotion/styled";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { searchKeyword } from "../../utils/searchKeyword";
import type { MusicMeta } from "../../types/musicMeta";
import MusicList from "./MusicList";
import SelectedMusic from "./SelectedMusic";
import Title from "./Title";
import Button from "../common/Button";
import { style } from "../../styles/theme";
import SuccessModal from "./SuccessModal";
import { Timestamp } from "firebase/firestore";
import { createLetter } from "../../api/letters";
import type { User } from "firebase/auth";
import { searchYoutubeVideo } from "../../utils/searchYoutube";
import { randomColor } from "../../utils/randomColor";
import { useNavigate } from "react-router-dom";

export default function Write({ user }: { user: User }) {
  const [keyword, setKeyword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<MusicMeta[]>([]);
  const [selectedMusic, setSelectedMusic] = useState<MusicMeta | null>(null);
  const [videoId, setVideoId] = useState("");
  const [successSave, setSuccessSave] = useState(false);
  const [paperColor, setPaperColor] = useState(() => randomColor());

  const navigate = useNavigate();

  useEffect(() => {
    const trimmed = keyword.trim();

    const timer = setTimeout(async () => {
      if (trimmed.length < 2) {
        setSearchResults([]);
        return;
      }
      const results = await searchKeyword(trimmed);
      setSearchResults(results);
    }, 300);

    return () => clearTimeout(timer);
  }, [keyword]);

  const handleSubmit = async () => {
    try {
      const nextYear = new Date();
      nextYear.setFullYear(nextYear.getFullYear() + 1);
      nextYear.setHours(0, 0, 0, 0);

      const openAt = Timestamp.fromDate(nextYear);

      await createLetter({
        userId: user.uid,
        title,
        content,
        openAt,
        musicTitle: selectedMusic?.name ?? "",
        musicArtist: selectedMusic?.artist ?? "",
        videoId: videoId ?? "",
      });

      handleResetText();
    } catch (err) {
      console.log("편지 저장 실패", err);
    }
  };

  const handleSuccessClose = () => {
    setSuccessSave(false);
    navigate("/");
  };

  const handleResetText = () => {
    setTitle("");
    setContent("");
    setSelectedMusic(null);
    setKeyword("");
    setSearchResults([]);
    setIsOpen(false);
    setSuccessSave(true);
    setPaperColor(randomColor());
  };

  return (
    <Container>
      <Title value={title} onChange={setTitle} />

      <SearchSection>
        {selectedMusic ? (
          <SelectedMusic music={selectedMusic} onOpen={() => setIsOpen(true)} />
        ) : (
          <SearchBar
            value={keyword}
            onKeyword={setKeyword}
            onClick={() => setIsOpen(true)}
          />
        )}

        {isOpen && (
          <>
            <Backdrop onClick={() => setIsOpen(false)} />

            <MusicList
              onSearchResults={searchResults}
              onSelectedMusic={async (music) => {
                setSelectedMusic(music);
                setIsOpen(false);

                const youtubeVideoId = await searchYoutubeVideo(
                  music.name,
                  music.artist,
                );

                setVideoId(youtubeVideoId ?? "");
              }}
            />
          </>
        )}
      </SearchSection>

      <Content
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="1년 뒤 나에게 편지를 써보세요"
        paperColor={paperColor}
      />

      <Button
        style={{
          width: "100%",
          height: style.size.buttonHeight,
        }}
        bgcolor={style.colors.ClearBlue}
        color={style.colors.Background}
        onClick={handleSubmit}
        disabled={!content.trim()}
      >
        1년 뒤로 보내기
      </Button>
      {successSave && <SuccessModal onClose={handleSuccessClose} />}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: ${style.layout.padding} 0;
`;

const SearchSection = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: ${style.spacing.sectionGap};
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: transparent;
  z-index: 40;
`;

const Content = styled.textarea<{ paperColor: string }>`
  width: 100%;
  min-height: 52vh;
  padding: ${style.spacing.cardPadding};

  font-size: ${style.font.body};
  line-height: 1.6;

  background-color: ${({ paperColor }) => paperColor};
  border: 1px solid ${style.colors.Border};
  border-radius: ${style.radius.card};
  margin-bottom: ${style.spacing.sectionGap};

  transition: ${style.motion.card};

  &::placeholder {
    color: ${style.colors.Text_light};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px ${style.colors.Focus};
  }
`;
