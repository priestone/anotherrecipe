import styled from "styled-components";
import Header from "../../components/Header";

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

const Search = styled.input`
  all: unset;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  padding: 5px;
  color: white;
`;

const SearchBtn = styled.button``;

const List = () => {
  return (
    <Container>
      <Header></Header>
      <Search placeholder="요리 키워드를 입력해주세요"></Search>
      <SearchBtn></SearchBtn>
    </Container>
  );
};

export default List;
