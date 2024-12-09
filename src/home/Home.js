import styled from "styled-components";
import startIMG from "./imgs/startIMG.png";
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

const TextWrap = styled.div``;

const Home = () => {
  return (
    <Container>
      <Box></Box>
      {/* <img src={startIMG} alt="" /> */}
      <TextWrap>
        <h2>이세계 레시피</h2>
      </TextWrap>
    </Container>
  );
};

export default Home;
