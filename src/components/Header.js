import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50px;
  padding: 20px 0 0 0;

  a {
    width: 100px;
  }
`;

const Logo = styled.div`
  /* width: 100px; */
  color: white;
`;

const Header = () => {
  return (
    <Container>
      <Link to={"/home"}>
        <Logo>이세계 레시피</Logo>
      </Link>
    </Container>
  );
};

export default Header;
