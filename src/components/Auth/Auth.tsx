import styled from "@emotion/styled";
import Naver from "@/assets/NAVER_login_Light_KR_green_wide_H56.png";
import Kakao from "@/assets/kakao_login_large_wide.png";

type Button = {
  bgImg: string;
};

export default function Auth() {
  return (
    <Container>
      <Title>TimeLock</Title>
      <Subtitle>: 1년 뒤에 열리는 편지</Subtitle>

      <Button
        bgImg={Naver}
        aria-label="네이버 로그인"
        onClick={() => console.log("네이버")}
      />
      <Button
        bgImg={Kakao}
        aria-label="카카오 로그인"
        onClick={() => console.log("카카오")}
      />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 152px 24px;
`;

const Title = styled.h1`
  font-size: 26px;
  line-height: 0%;
`;

const Subtitle = styled.p`
  font-size: 16px;
  line-height: 0%;
  margin-bottom: 98px;
`;

const Button = styled.button<Button>`
  width: 100%;
  height: 56px;
  border: none;
  border-radius: 8px;
  margin-bottom: 12px;

  background-image: url(${({ bgImg }) => bgImg});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;

  cursor: pointer;
`;
