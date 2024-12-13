import styled, { keyframes } from "styled-components";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import recipeTEXT from "./imgs/recipeTEXT.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PanIMG from "./imgs/panIMG.png";
import Pan2IMG from "./imgs/pan2IMG.png";
import cookimg1 from "./imgs/cookimg1.png";
import cookimg2 from "./imgs/cookimg2.png";
import cookimg3 from "./imgs/cookimg3.png";
import { useEffect, useState } from "react";

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

const moveAni1 = keyframes`
0%{
transform:translate(-50%,-60%);
}
100%{
  transform:translate(-50%,-58%);

}
`;

const moveAni2 = keyframes`
0%{
transform:translate(-60%,-60%);
}
100%{
  transform:translate(-60%,-58%);

}
`;

const moveAni3 = keyframes`
0%{
transform:translate(-58%,-60%);
}
100%{
  transform:translate(-58%,-58%);

}
`;

const Character1 = styled.div`
  width: 50%;
  position: absolute;
  top: 57%;
  left: 50%;
  display: ${(props) => (props.$visible ? "block" : "none")};
  animation: ${moveAni1} 0.7s alternate infinite;
`;

const Character2 = styled.div`
  width: 60%;
  position: absolute;
  top: 57%;
  left: 40%;
  display: ${(props) => (props.$visible ? "block" : "none")};
  animation: ${moveAni2} 0.7s alternate infinite;
`;

const Character3 = styled.div`
  width: 70%;
  position: absolute;
  top: 50%;
  left: 43%;
  display: ${(props) => (props.$visible ? "block" : "none")};
  animation: ${moveAni3} 0.7s alternate infinite;
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
  const [level, setLevel] = useState("1");

  useEffect(() => {
    // 로컬 스토리지에서 데이터 가져오기
    const savedData = JSON.parse(localStorage.getItem("userData"));
    if (savedData && savedData.level) {
      setLevel(savedData.level);
    }
  }, []);

  return (
    <Container>
      <Header />
      <Pan1>
        <img src={PanIMG} alt="후라이팬이미지" />
        <h2>{level}Lv.</h2>
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

      <Character1 $visible={level <= 4}>
        <img src={cookimg1} alt={`요리사 1단계`} />
      </Character1>

      <Character2 $visible={level >= 5 && level <= 9}>
        <img src={cookimg2} alt={`요리사 2단계`} />
      </Character2>

      <Character3 $visible={level >= 10}>
        <img src={cookimg3} alt={`요리사 3단계`} />
      </Character3>

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
