import { Link } from "react-router-dom";
import styled from "styled-components";
import logoIMG from "./imgs/logoIMG.png";

const Container = styled.div`
  width: 100%;
  height: 50px;
  /* padding: 20px 0 0 20px; */

  a {
    width: 150px;
  }
`;

const Header = () => {
  return (
    <Container>
      <Link to={"/home"}>
        <img src={logoIMG} alt="로고이미지" />
      </Link>
    </Container>
  );
};

export default Header;
