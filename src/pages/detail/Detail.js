import styled from "styled-components";
import logoIMG from "./imgs/logoIMG.png";
// import paperIMG from "./imgs/paperIMG.png";
import paperIMG2 from "./imgs/paperIMG2.png";
import stampIMG from "./imgs/stampIMG.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { RecipeList } from "./RecipeList";

const Container = styled.div`
  max-width: 440px;
  width: 100%;
  padding: 0 20px 20px 20px;
  margin: 0 auto;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(25, 32, 59, 1) 0%,
    rgba(76, 104, 140, 1) 100%
  );
`;

const Header = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: start;
  /* padding: 20px; */
`;

const BackBtn = styled.div`
  width: 50px;
  height: 50px;
  /* position: absolute;
  top: 20px;
  left: 20px; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 22px;
`;

const Logo = styled.div`
  /* width: 100%; */
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* z-index: 900; */
  a {
    width: 150px;

    img {
      width: 100%;
    }
  }
`;

const Stamp = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => (props.$visible ? "block" : "none")};
`;

const Paper = styled.div`
  width: 100%;
  height: 600px;
  background: url(${paperIMG2}) no-repeat center / contain;
  padding: 15% 50px 20% 50px;
  position: relative;
  margin-top: 30px;

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
  margin-top: 30px;
  margin-bottom: 50px;
`;

const RecipeWrap = styled.div`
  color: white;

  img {
    margin-bottom: 10px;
    margin-top: 30px;
  }
  h1 {
    font-size: 26px;
    font-weight: 700;
  }

  h2 {
    line-height: 22px;
  }

  p {
    margin-top: 50px;
    margin-bottom: 30px;
  }
`;

const VideoWrap = styled.div`
  margin: 30px auto;
  overflow: hidden;
  width: 100%;

  iframe {
    border-radius: 10px;
  }

  h2 {
    margin-top: 10px;
    color: white;
  }
`;

const TopBtn = styled.div`
  width: 70px;
  height: 70px;
  background-color: white;
  color: black;
  border-radius: 50%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 30px;
  right: 5%;
`;

const StepWrap = styled.div`
  margin-bottom: 50px;

  img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  h3 {
    margin: 0;
    font-size: 16px;
    line-height: 22px;
  }
`;

const Detail = () => {
  const { id } = useParams();
  const recipeId = parseInt(id, 10);
  const headerRef = useRef();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    level: 0,
    stampedRecipes: {},
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("userData"));
    if (savedData) {
      setUserData(savedData);
    }

    const scrollHandler = () => {
      const pageY = window.scrollY;
      const current = headerRef.current;
      if (current) {
        if (pageY >= 220) {
          current.style.position = "fixed";
          current.style.width = "100%";
          current.style.left = "50%";
          current.style.top = "0";
          current.style.zIndex = "900";
          current.style.backgroundColor = "rgba(0,0,0,0.8)";
          current.style.transform = "translate(-50%,0px)";
          current.style.padding = "20px";
        } else {
          current.style.position = "unset";
          current.style.backgroundColor = "transparent";
          current.style.transform = "translate(-5%,0px)";
          current.style.padding = "20px";
        }
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const recipe = RecipeList.find((r) => r.id === parseInt(id));
  if (!recipe) {
    return <h1>레시피를 찾을 수 없습니다.</h1>;
  }

  const handleBack = () => {
    navigate(-1);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const isStamped = userData.stampedRecipes?.[recipeId] || false;

  const handleToggleStamp = () => {
    // 스탬프 상태 토글
    const newStampedRecipes = {
      ...userData.stampedRecipes,
      [recipeId]: !isStamped,
    };

    // stampedRecipes 중 true인 값의 개수를 레벨로 설정
    const newLevel = Object.values(newStampedRecipes).filter(Boolean).length;

    const newUserData = {
      level: newLevel,
      stampedRecipes: newStampedRecipes,
    };

    setUserData(newUserData);
    localStorage.setItem("userData", JSON.stringify(newUserData));
  };

  return (
    <Container>
      <Header ref={headerRef}>
        <BackBtn onClick={handleBack}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </BackBtn>
        <Logo>
          <Link to={"/home"}>
            <img src={logoIMG} alt="로고이미지" />
          </Link>
        </Logo>
      </Header>

      <Paper>
        <Stamp $visible={isStamped}>
          <img src={stampIMG} alt="스탬프이미지" />
        </Stamp>
        <h1>재료</h1>
        <h2>필수재료</h2>
        {recipe.ingredients.map((ingredient, index) => (
          <IngredientsWrap key={index}>
            <h3>{ingredient.name}</h3>
            <h3>{ingredient.quantity}</h3>
          </IngredientsWrap>
        ))}
        <h2>양념재료</h2>
        {recipe.seasonings.map((seasoning, index) => (
          <IngredientsWrap key={index}>
            <h3>{seasoning.name}</h3>
            <h3>{seasoning.quantity}</h3>
          </IngredientsWrap>
        ))}
      </Paper>
      <ClearBtn onClick={handleToggleStamp}>
        {isStamped ? "습득취소" : "습득완료"}
      </ClearBtn>
      {recipe.youtube && (
        <VideoWrap>
          <iframe
            width="100%"
            height="200"
            src={`https://www.youtube.com/embed/${recipe.youtube}`}
            title={recipe.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h2>출처 : 만개의 레시피</h2>
        </VideoWrap>
      )}
      <RecipeWrap>
        <h1>조리법</h1>
        {/* <img src={food1_1} alt="조리법" /> */}
        {recipe.steps.map((step, index) => {
          const imagePath = require(`./imgs/food${recipe.id}/food${recipe.id}_${
            index + 1
          }.jpg`);
          return (
            <StepWrap key={index}>
              <img src={imagePath} alt={`조리법 이미지 ${index + 1}`} />
              <h3>
                {index + 1}. {step}
              </h3>
            </StepWrap>
          );
        })}
        <p>출처 : {recipe.origin}</p>

        <TopBtn onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
          <h4>Top</h4>
        </TopBtn>
      </RecipeWrap>
    </Container>
  );
};

export default Detail;
