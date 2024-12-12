import styled from "styled-components";
import Header from "../../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import foodimg1 from "./imgs/foodimg1.png";
import foodimg2 from "./imgs/foodimg2.png";
import foodimg3 from "./imgs/foodimg3.png";
import foodimg4 from "./imgs/foodimg4.png";
import foodimg5 from "./imgs/foodimg5.png";
import foodimg6 from "./imgs/foodimg6.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Container = styled.div`
  max-width: 440px;
  width: 100%;
  /* height: 100vh; */
  padding: 20px;
  margin: 0 auto;
  background: linear-gradient(
    180deg,
    rgba(25, 32, 59, 1) 0%,
    rgba(76, 104, 140, 1) 100%
  );
`;

const FormWrap = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  padding: 0 5px 0 0;
`;

const Search = styled.input`
  all: unset;
  width: 100%;
  padding: 5px;
  color: white;
`;

const SearchBtn = styled.button`
  all: unset;
  color: white;
`;

const ConWrap = styled.div`
  width: 100%;
  /* height: 600px; */
  margin-top: 60px;
  /* background-color: salmon; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 30px;
  column-gap: 14px;
  /* gap: 10px; */
`;

const Con = styled.div`
  /* background-color: lightblue; */

  h1 {
    margin-top: 15px;
    font-weight: 700;
  }
  h2 {
    margin-top: 7px;
    color: white;
    font-weight: 400;
    opacity: 0.8;
  }
`;

const Conimg = styled.div`
  height: 150px;

  background: url(${(props) => props.$foodIMG}) no-repeat center / cover;
  /* overflow: hidden;
  img {
    width: 120%;
  } */
`;

const List = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState({
    level: 0,
    stampedRecipes: {},
  });
  const recipes = [
    {
      id: 1,
      name: "[쾌걸근육맨]",
      menu: "갈비찜덮밥",
      img: foodimg1,
    },
    {
      id: 2,
      name: "[하울의 움직이는성]",
      menu: "하울 정식",
      img: foodimg2,
    },
    {
      id: 3,
      name: "[요리왕 비룡]",
      menu: "황금 볶음밥",
      img: foodimg3,
    },
    {
      id: 4,
      name: "[텔레토비]",
      menu: "스마일 쿠키",
      img: foodimg4,
    },
    {
      id: 5,
      name: "[심슨]",
      menu: "슈가글레이즈 도넛",
      img: foodimg5,
    },
    {
      id: 6,
      name: "[원피스]",
      menu: "만화 고기",
      img: foodimg6,
    },
  ];

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("userData"));
    if (savedData) {
      setUserData(savedData);
    }
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // 검색어 상태 업데이트
  };

  return (
    <Container>
      <Header></Header>
      <FormWrap onSubmit={(e) => e.preventDefault()}>
        <Search
          placeholder="요리 키워드를 입력해주세요"
          value={searchTerm}
          onChange={handleSearchChange}
        ></Search>
        <SearchBtn>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SearchBtn>
      </FormWrap>
      <ConWrap>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <Link to={`/detail/${recipe.id}`} key={recipe.id}>
              <Con>
                <Conimg $foodIMG={recipe.img} />
                <h1>{recipe.name}</h1>
                <h2>{recipe.menu}</h2>
              </Con>
            </Link>
          ))
        ) : (
          <h2
            style={{
              color: "white",
              textAlign: "center",
              gridColumn: "span 2",
            }}
          >
            검색 결과가 없습니다.
          </h2>
        )}
      </ConWrap>
    </Container>
  );
};

export default List;

// {recipes.map((recipe) => (
//   <Link to={`/detail/${recipe.id}`} key={recipe.id}>
//     <Con>
//       <Conimg foodIMG={recipe.img} />
//       <h2>{recipe.name}</h2>
//     </Con>
//   </Link>
// ))}
