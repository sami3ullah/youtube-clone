import React from "react";
import { Button } from "../../utils/styled/StyledComponents";
import {
  Container,
  Wrapper,
  Search,
  Input,
  User,
  Avatar,
} from "./styled/Navbar.styledcomponent";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { VideoCallOutlined } from "@mui/icons-material";

function Navbar() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" aria-label="search" />
          <SearchOutlinedIcon />
        </Search>
        {currentUser ? (
          <User>
            <VideoCallOutlined />
            <Avatar src={currentUser.img} />
          </User>
        ) : (
          <Link to="authentication" style={{ textDecoration: "none" }}>
            <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>
          </Link>
        )}
      </Wrapper>
    </Container>
  );
}

export default Navbar;
