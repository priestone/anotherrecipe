import styled from "styled-components";
import startIMG from "./imgs/startIMG.png";
import { Link } from "react-router-dom";
import logoIMG from "./imgs/logoIMG.png";
import startTEXT from "./imgs/startTEXT.png";
const Container = styled.div`
  max-width: 440px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background: url(${startIMG}) no-repeat center / cover;
`;

const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
`;

const TextWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h2 {
    font-size: 50px;
    color: white;
  }
`;

const StartBtn = styled.div`
  position: absolute;
  bottom: 13%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #486285;
  width: 150px;
  height: 46px;
  border: 2px solid white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 60%;
  }
`;

const Start = () => {
  return (
    <Container>
      <Box></Box>
      {/* <img src={startIMG} alt="" /> */}
      <TextWrap>
        <img src={logoIMG} alt="로고이미지" />
      </TextWrap>
      <Link to={"/guide"}>
        <StartBtn>
          <img src={startTEXT} alt="시작하기 버튼" />
        </StartBtn>
      </Link>
    </Container>
  );
};

export default Start;
