import { useEffect, useState } from "react";
import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../api/firebase";
import type { User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import Modal from "../common/Modal";
import { style } from "../../styles/theme";
import Button from "../common/Button";

interface NameModalProps {
  user: User;
}

export default function NameModal({ user }: NameModalProps) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleSave = async () => {
    if (!name.trim()) return;

    try {
      setLoading(true);

      await updateProfile(user, {
        displayName: name,
      });

      await setDoc(doc(db, "users", user.uid), {
        name,
      });

      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <BackDrop>
      <Modal title="이름 설정">
        <Layout>
          <Text>TimeLock이 불러드릴 이름을 알려주세요.</Text>

          <Field>
            <Input
              autoFocus
              maxLength={10}
              placeholder="이름 입력"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !loading && name.trim()) {
                  handleSave();
                }
              }}
            />

            <Length>({name.length}/10)</Length>
          </Field>

          <Button
            style={{ width: "100%", height: style.size.headerHeight }}
            color={style.colors.Surface}
            bgcolor={style.colors.DeepBlue}
            onClick={handleSave}
            disabled={!name.trim() || loading}
          >
            {loading ? "저장 중..." : "저장"}
          </Button>
        </Layout>
      </Modal>
    </BackDrop>
  );
}

const BackDrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 999;
`;

const Text = styled.p`
  font-size: ${style.font.body};
  color: ${style.colors.Text};
  text-align: center;
`;

const Field = styled.div`
  position: relative;
  width: 100%;
  max-width: 320px;
  padding-bottom: ${style.spacing.tightGap};
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${style.spacing.contentGap};
`;

const Input = styled.input`
  width: 100%;
  max-width: 320px;
  height: ${style.size.inputHeight};
  padding: 0 ${style.spacing.cardPadding};
  background: ${style.colors.Surface};

  border: 1px solid ${style.colors.Border};
  border-radius: ${style.radius.pill};

  font-size: ${style.font.body};

  transition: all 0.2s ease;

  &::placeholder {
    color: ${style.colors.Text_light};
    font-size: 13px;
  }

  &:focus {
    outline: none;
    border: 1px solid ${style.colors.Purple};
    box-shadow: ${style.shadow.focus};
  }

  &:active {
    transform: scale(0.995);
  }
`;

const Length = styled.p`
  position: absolute;
  bottom: ${style.spacing.contentGap};
  right: ${style.spacing.cardPadding};
  font-size: ${style.font.caption};
  color: ${style.colors.Line};
`;
