import React from "react";
import YoutubeLogo from "../../assets/logo_1.png";
import MenuIcons from "../MenuIcons/MenuIcons";
import { Container, Wrapper, Logo, Img } from "./styled/Menu.styledcomponent";
import { Link } from "react-router-dom";

function Menu({ darkMode, setDarkMode }) {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={YoutubeLogo} alt="youtube logo" />
            Youtube
          </Logo>
        </Link>
        <MenuIcons darkMode={darkMode} setDarkMode={setDarkMode} />
      </Wrapper>
    </Container>
  );
}

export default Menu;
