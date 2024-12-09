import styled from "styled-components";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const Container = styled.div`
  max-width: 440px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background: linear-gradient(
    180deg,
    rgba(25, 32, 59, 1) 0%,
    rgba(76, 104, 140, 1) 100%
  );
`;

const Home = () => {
  return (
    <Container>
      <Header />
      <Link to={"/list"}>레시피</Link>
    </Container>
  );
};

export default Home;
