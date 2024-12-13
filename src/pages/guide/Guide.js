import styled from "styled-components";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import cookimg1 from "../home/imgs/cookimg1.png";
import PanIMG from "../home/imgs/panIMG.png";
import Pan2IMG from "../home/imgs/pan2IMG.png";
import recipeTEXT from "../home/imgs/recipeTEXT.png";
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
  position: relative;
  top: 5%;
  left: -30px;
  h2 {
    position: absolute;
    left: 46px;
    top: 30px;
    color: white;
  }
`;
const Pan2 = styled.div`
  width: 100px;
  position: relative;
  top: 10%;
  left: -30px;
  h2 {
    position: absolute;
    left: 42px;
    top: 22px;
    color: white;
  }
`;

const Character1 = styled.div`
  position: absolute;
  top: 57%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const RecipeBtn = styled.div`
  width: 90%;
  height: 80px;
  border: 2px solid #fcfcfc7a;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
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

const LevelNotice = styled.div`
  width: 150px;
  height: 80px;
  background-color: white;
  position: absolute;
  right: -170%;
  top: 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  h4 {
    color: black;
    text-align: center;
  }
`;

const Tail = styled.div`
  width: 10px;
  height: 10px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: -5px;
  transform: rotate(45deg);
`;

const Tail2 = styled.div`
  width: 10px;
  height: 10px;
  background-color: white;
  position: absolute;
  top: 45%;
  left: -5px;
  transform: rotate(45deg);
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const BtnNotice = styled.div`
  width: 150px;
  height: 80px;
  background-color: white;
  position: absolute;
  left: 5%;
  bottom: 24%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  h4 {
    color: black;
    text-align: center;
  }
`;

const Tail3 = styled.div`
  width: 10px;
  height: 10px;
  background-color: white;
  position: absolute;
  bottom: -5px;
  left: 45%;
  transform: rotate(45deg);
`;

const Guide = () => {
  return (
    <Link to={"/home"}>
      <Container>
        <Box></Box>
        <Header />
        <Pan1>
          <img src={PanIMG} alt="후라이팬이미지" />
          <h2>1Lv.</h2>
          <LevelNotice>
            <Tail></Tail>
            <h4>사용자의 레벨을 나타내요</h4>
          </LevelNotice>
        </Pan1>
        <Pan2>
          <img src={Pan2IMG} alt="후라이팬이미지2" />
          <h2>
            캐릭터
            <br></br>
            계급도
          </h2>
          <LevelNotice>
            <Tail2></Tail2>
            <h4>캐릭터의 진화 별 모습을 볼 수 있어요</h4>
          </LevelNotice>
        </Pan2>

        <Character1>
          <img src={cookimg1} alt={`요리사 1단계`} />
        </Character1>

        <RecipeBtn>
          <img src={recipeTEXT} alt="레시피보기 버튼" />
          <FontAwesomeIcon icon={faArrowRight} />
        </RecipeBtn>
        <BtnNotice>
          <Tail3></Tail3>
          <h4>만화 속 레시피를 볼 수 있어요</h4>
        </BtnNotice>
      </Container>
    </Link>
  );
};

export default Guide;
