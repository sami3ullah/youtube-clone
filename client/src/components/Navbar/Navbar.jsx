import React from "react";
import { Button } from "../../utils/styled/StyledComponents";
import {
  Container,
  Wrapper,
  Search,
  Input,
} from "./styled/Navbar.styledcomponent";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" aria-label="search" />
          <SearchOutlinedIcon />
        </Search>
        <Link to="authentication" style={{ textDecoration: "none" }}>
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
