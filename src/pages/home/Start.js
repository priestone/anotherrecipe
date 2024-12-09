import styled from "styled-components";
import startIMG from "./imgs/startIMG.png";
import { Link } from "react-router-dom";
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
    font-family: "HeriofLightRegular";
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
  color: white;
  text-align: center;
  font-size: 20px;
  line-height: 44px;
  border-radius: 10px;
`;

const Start = () => {
  return (
    <Container>
      <Box></Box>
      {/* <img src={startIMG} alt="" /> */}
      <TextWrap>
        <h2>이세계 레시피</h2>
      </TextWrap>
      <Link to={"/home"}>
        <StartBtn>시작하기</StartBtn>
      </Link>
    </Container>
  );
};

export default Start;
