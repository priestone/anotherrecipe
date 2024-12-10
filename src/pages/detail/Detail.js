import styled from "styled-components";
import logoIMG from "./imgs/logoIMG.png";
// import paperIMG from "./imgs/paperIMG.png";
import paperIMG2 from "./imgs/paperIMG2.png";
import stampIMG from "./imgs/stampIMG.png";
import food1_1 from "./imgs/food1_1.png";
import food1_2 from "./imgs/food1_2.png";
import food1_3 from "./imgs/food1_3.png";
import food1_4 from "./imgs/food1_4.png";
import food1_5 from "./imgs/food1_5.png";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Container = styled.div`
  max-width: 440px;
  width: 100%;
  padding: 20px;
  /* height: 100vh; */
  margin: 0 auto;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(25, 32, 59, 1) 0%,
    rgba(76, 104, 140, 1) 100%
  );
`;

const Logo = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    width: 190px;
  }
`;

const Stamp = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => (props.visible ? "block" : "none")};
`;

const Paper = styled.div`
  width: 100%;
  height: 600px;
  background: url(${paperIMG2}) no-repeat center / contain;
  padding: 20% 50px;
  position: relative;

  h1 {
    text-align: center;
    font-size: 26px;
    font-weight: 900;
  }

  h2 {
    font-size: 18px;
    font-weight: 900;
    margin-top: 30px;
    margin-bottom: 10px;
  }
`;

const IngredientsWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-bottom: 10px; */
  h3 {
    line-height: 30px;
  }
`;

const ClearBtn = styled.div`
  width: 200px;
  height: 40px;
  background-color: white;
  color: black;
  margin: 0 auto;
  border-radius: 50px;
  text-align: center;
  line-height: 40px;
`;

const RecipeWrap = styled.div`
  color: white;

  img {
    margin-bottom: 10px;
    margin-top: 30px;
  }
  h1 {
    font-size: 20px;
    font-weight: 700;
  }

  h2 {
    line-height: 22px;
  }
`;

const VideoWrap = styled.div`
  width: 100%;
  border-radius: 10px;
  margin-top: 50px;
  margin-bottom: 10px;
  overflow: hidden;
`;

const TopBtn = styled.div`
  width: 200px;
  height: 40px;
  background-color: white;
  color: black;
  margin: 0 auto;
  border-radius: 50px;
  text-align: center;
  line-height: 40px;
  margin-top: 50px;
  margin-bottom: 10px;
`;

const BackBtn = styled.div`
  width: 50px;
  height: 50px;

  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 22px;
`;

const Detail = () => {
  const [stampVisible, setStampVisible] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const toggleStamp = () => {
    setStampVisible((prev) => !prev);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <Logo>
        <Link to={"/home"}>
          <img src={logoIMG} alt="로고이미지" />
        </Link>
      </Logo>
      <BackBtn onClick={handleBack}>
        {/* <FontAwesomeIcon icon={faArrowLeft} /> */}
        <FontAwesomeIcon icon={faChevronLeft} />
      </BackBtn>
      <Paper>
        <Stamp visible={stampVisible}>
          <img src={stampIMG} alt="스탬프이미지" />
        </Stamp>
        <h1>재료</h1>
        <h2>필수재료</h2>
        <IngredientsWrap>
          <h3>돼지갈비</h3>
          <h3>500g</h3>
        </IngredientsWrap>
        <IngredientsWrap>
          <h3>밥</h3>
          <h3>적당량</h3>
        </IngredientsWrap>
        <IngredientsWrap>
          <h3>실고추</h3>
          <h3>약간</h3>
        </IngredientsWrap>
        <h2>양념재료</h2>
        <IngredientsWrap>
          <h3>간장</h3>
          <h3>3숟가락</h3>
        </IngredientsWrap>
        <IngredientsWrap>
          <h3>설탕</h3>
          <h3>1숟가락</h3>
        </IngredientsWrap>
        <IngredientsWrap>
          <h3>맛술</h3>
          <h3>1/2숟가락</h3>
        </IngredientsWrap>
        <IngredientsWrap>
          <h3>배음료</h3>
          <h3>1종이컵</h3>
        </IngredientsWrap>
        <IngredientsWrap>
          <h3>다진마늘</h3>
          <h3>1숟가락</h3>
        </IngredientsWrap>
        <IngredientsWrap>
          <h3>다진생강</h3>
          <h3>1/2숟가락</h3>
        </IngredientsWrap>
        <IngredientsWrap>
          <h3>후추</h3>
          <h3>약간</h3>
        </IngredientsWrap>
      </Paper>
      <ClearBtn onClick={toggleStamp}>습득완료</ClearBtn>
      <RecipeWrap>
        <h1>조리법</h1>
        <img src={food1_1} alt="조리법" />
        <h2>
          1. 돼지갈비는 뼈 부분을 제거 후 먹기 좋은 크기로 썰어 칼집을 낸다.
        </h2>
        <h2>- 돼지갈비는 찬물에 1시간 이상 담궈 핏물을 제거 해주세요. </h2>
        <img src={food1_2} alt="조리법" />
        <h2>2. 볼에 양념재료를 모두 넣고 섞는다.</h2>
        <img src={food1_3} alt="조리법" />
        <h2>3. 돼지갈비를 섞은 양념에 넣고 골고루 섞어 30분 이상 재운다.</h2>
        <img src={food1_4} alt="조리법" />
        <h2>
          4. 팬에 돼지갈비, 양념까지 모두 붓고 국물이 없을 때 까지 조린다.
        </h2>
        <img src={food1_5} alt="조리법" />

        <h2>5. 그릇에 밥을 담고 구운 갈비, 실고추를 올려 완성한다.</h2>
        <h2>- 원하는 고명을 올려 드셔도 좋아요. </h2>
        <VideoWrap>
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/Mk2O71B8m-A"
            title="SUB) 힘이불끈불근 먹으면 근육빵빵 ★ 갈비찜덮밥 ★ [만개의레시피]"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </VideoWrap>
        <h2>출처 : 만개의 레시피</h2>
        <TopBtn onClick={scrollToTop}>Top</TopBtn>
      </RecipeWrap>
    </Container>
  );
};

export default Detail;
