import styled from "styled-components";
import Header from "../../components/Header";
import PanIMG from "/sbs/anotherrecipe/src/pages/home/imgs/panIMG.png";
import Pan2IMG from "/sbs/anotherrecipe/src/pages/home/imgs/pan2IMG.png";
import cookimg1 from "/sbs/anotherrecipe/src/pages/home/imgs/cookimg1.png";
import cookimg2 from "/sbs/anotherrecipe/src/pages/home/imgs/cookimg2.png";
import cookimg3 from "/sbs/anotherrecipe/src/pages/home/imgs/cookimg3.png";
import recipeTEXT from "/sbs/anotherrecipe/src/pages/home/imgs/recipeTEXT.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  max-width: 440px;
  width: 100%;
  padding: 20px;
  height: 100vh;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgba(25, 32, 59, 1) 0%,
    rgba(76, 104, 140, 1) 100%
  );
`;

const Pan1 = styled.div`
  width: 100px;
  position: absolute;
  top: 10%;
  left: -10px;
  h2 {
    position: absolute;
    left: 46px;
    top: 30px;
    color: white;
  }
`;
const Pan2 = styled.div`
  width: 100px;
  position: absolute;
  top: 25%;
  left: -10px;
  h2 {
    position: absolute;
    left: 42px;
    top: 22px;
    color: white;
  }
`;

const CharacterWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  /* background-color: white; */
  /* opacity: 0.6; */
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  text-align: center;
  z-index: 200;
  h1 {
    font-size: 18px;
  }
  h2 {
    font-size: 18px;

    transform: translate(15%);
  }
  h3 {
    font-size: 18px;
    transform: translate(10%);
  }

  h4 {
    font-size: 14px;
    transform: translate(15%);
  }

  h5 {
    font-size: 14px;
    transform: translate(10%);
  }

  p {
    font-size: 14px;
  }
`;

const Character1 = styled.div`
  width: 50px;
`;

const Character2 = styled.div`
  width: 100px;
`;

const Character3 = styled.div`
  width: 150px;
`;

const RecipeBtn = styled.div`
  width: 90%;
  height: 80px;
  border: 2px solid #fcfcfc7a;
  margin: 0 auto;
  display: flex;
  align-items: center;

  position: absolute;
  bottom: 10%;
  left: 20px;

  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }

  img {
    width: 40%;
    margin-right: 20px;
  }
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
`;

const CloseBtn = styled.div`
  width: 100px;
  height: 50px;
  position: absolute;
  top: 70%;
  left: 50%;
  background-color: white;
  transform: translate(-50%, -50%);
  z-index: 300;
  color: black;
  text-align: center;
  line-height: 50px;
  font-weight: 700;
  border-radius: 30px;
`;

const Characterguide = () => {
  return (
    <Container>
      <Box></Box>

      <Header />
      <Pan1>
        <img src={PanIMG} alt="후라이팬이미지" />
        <h2>1Lv.</h2>
      </Pan1>
      <Pan2>
        <Link to={"/characterguide"}>
          <img src={Pan2IMG} alt="후라이팬이미지2" />
          <h2>
            캐릭터
            <br></br>
            계급도
          </h2>
        </Link>
      </Pan2>

      <CharacterWrap>
        <Character1>
          <img src={cookimg1} alt={`요리사 1단계`} />
          <h1>1단계</h1>
          <p>1Lv~4Lv</p>
        </Character1>
        <Character2>
          <img src={cookimg2} alt={`요리사 1단계`} />
          <h2>2단계</h2>
          <h4>5Lv~9Lv</h4>
        </Character2>
        <Character3>
          <img src={cookimg3} alt={`요리사 1단계`} />
          <h3>3단계</h3>
          <h5>10Lv~</h5>
        </Character3>
      </CharacterWrap>
      <Link to={"/home"}>
        <CloseBtn>닫기</CloseBtn>
      </Link>

      <RecipeBtn>
        <Link to={"/list"}>
          <img src={recipeTEXT} alt="레시피보기 버튼" />
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </RecipeBtn>
    </Container>
  );
};

export default Characterguide;
