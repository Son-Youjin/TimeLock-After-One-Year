import styled from "@emotion/styled";
import { IoMdClose } from "react-icons/io";
import Button from "../common/Button";
import LetterList from "./letterList";

interface ModalNotificationProps {
  onClose: () => void;
}

export default function ModalNotification({ onClose }: ModalNotificationProps) {
  return (
    <BackDrop onClick={onClose}>
      <Container>
        <Header>
          <Title>알림</Title>

          <Button style={{ margin: "2px", paddingTop: "2%" }} onClick={onClose}>
            <IoMdClose size={20} />
          </Button>
        </Header>

        <LetterList />
      </Container>
    </BackDrop>
  );
}

const BackDrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

const Container = styled.section`
  position: absolute;
  top: 11%;
  right: 10%;

  width: 260px;
  height: 180px;
  padding: 10px;

  display: flex;
  flex-direction: column;

  background-color: aliceblue;
  border-radius: 14px;
  border: 1px solid gray;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 28px;
  margin-bottom: 4px;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 14px;
`;
