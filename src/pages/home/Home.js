import styled from "styled-components";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import recipeTEXT from "./imgs/recipeTEXT.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PanIMG from "./imgs/panIMG.png";
import Pan2IMG from "./imgs/pan2IMG.png";
import cookIMG1 from "./imgs/cookIMG1.png";

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

const Character = styled.div`
  width: 140px;
  position: absolute;
  top: 50%;
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

const Home = () => {
  return (
    <Container>
      <Header />
      <Pan1>
        <img src={PanIMG} alt="후라이팬이미지" />
        <h2>1Lv.</h2>
      </Pan1>
      <Pan2>
        <Link to={"/characterguide"}>
          <img src={Pan2IMG} alt="후라이팬이미지2" />
          <h2>캐릭터계급도</h2>
        </Link>
      </Pan2>

      <Character>
        <img src={cookIMG1} alt="요리사1단계" />
      </Character>

      <RecipeBtn>
        <Link to={"/list"}>
          <img src={recipeTEXT} alt="레시피보기 버튼" />
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </RecipeBtn>
    </Container>
  );
};

export default Home;
