import styled from "@emotion/styled";
import { IoMdClose } from "react-icons/io";

interface ModalNotificationProps {
  onClose: () => void;
}

export default function ModalNotification({ onClose }: ModalNotificationProps) {
  return (
    <BackDrop onClick={onClose}>
      <Container>
        <Btn onClick={onClose}>
          <IoMdClose />
        </Btn>

        <Ul>
          <List>oo님, 1년 전의 편지가 도착했습니다.</List>
          <List>oo님, 1년 전의 편지가 도착했습니다.</List>
        </Ul>
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
  top: 12%;
  right: 10%;

  display: flex;
  flex-direction: column;

  background-color: aliceblue;
  border-radius: 14px;
  border: 1px solid gray;

  width: 240px;
  height: 140px;
  padding: 6px;
`;

const Btn = styled.button`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  border: none;
  margin: 0px 0px 4px 4px;
`;

const Ul = styled.ul`
  padding: 0px;
  margin: 4px 0px 0px;
`;

const List = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;

  font-size: 14px;
  padding-left: 6px;

  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    margin: 6px 0px;
  }
`;
