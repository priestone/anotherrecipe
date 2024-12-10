import styled from "styled-components";
import Header from "../../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import foodIMG1 from "./imgs/foodIMG1.png";
import foodIMG2 from "./imgs/foodIMG2.png";
import foodIMG3 from "./imgs/foodIMG3.png";
import foodIMG4 from "./imgs/foodIMG4.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  max-width: 440px;
  width: 100%;
  height: 100vh;
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
  height: 600px;
  margin-top: 60px;
  /* background-color: salmon; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 10px;
`;

const Con = styled.div`
  /* background-color: lightblue; */
  h2 {
    margin-top: 7px;
    color: white;
    font-weight: 400;
  }
`;

const Conimg = styled.div`
  height: 150px;

  background: url(${(props) => props.foodIMG}) no-repeat center / cover;
  /* overflow: hidden;
  img {
    width: 120%;
  } */
`;

const List = () => {
  const recipes = [
    {
      id: 1,
      name: "[쾌걸근육맨]-갈비찜덮밥",
      img: foodIMG1,
    },
    {
      id: 2,
      name: "[하울의 움직이는성]-하울 정식",
      img: foodIMG2,
    },
    {
      id: 3,
      name: "[요리왕 비룡]-황금 볶음밥",
      img: foodIMG3,
    },
    {
      id: 4,
      name: "[텔레토비]-스마일 쿠키",
      img: foodIMG4,
    },
  ];

  return (
    <Container>
      <Header></Header>
      <FormWrap>
        <Search placeholder="요리 키워드를 입력해주세요"></Search>
        <SearchBtn>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SearchBtn>
      </FormWrap>
      <ConWrap>
        {recipes.map((recipe) => (
          <Link to={"/detail"} key={recipe.id}>
            <Con>
              <Conimg foodIMG={recipe.img} />
              <h2>{recipe.name}</h2>
            </Con>
          </Link>
        ))}
      </ConWrap>
    </Container>
  );
};

export default List;
