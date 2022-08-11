import React, { useEffect, useState, useRef } from "react";
import { Button } from "../../utils/styled/StyledComponents";
import {
  Container,
  Wrapper,
  Search,
  Input,
  User,
  Avatar,
  LogoutMenu,
  MenuContainer,
  DivContainer,
  Hr,
  Text,
  LogoutButton,
} from "./styled/Navbar.styledcomponent";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { VideoCallOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice.js";

function Navbar() {
  const { currentUser } = useSelector((state) => state.user);
  const [showLogoutMenu, setShowLogoutMenu] = useState(false);
  const dispatch = useDispatch();
  const logoutMenu = useRef();

  const handleLogoutMenuClick = () => {
    setShowLogoutMenu(!showLogoutMenu);
  };

  //close the menu when clicking outside the menu
  useEffect(() => {
    const handler = (event) => {
      if (!logoutMenu.current?.contains(event.target)) {
        setShowLogoutMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleLogout = () => {
    dispatch(logout());
  };

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
            <MenuContainer>
              <Avatar
                onClick={handleLogoutMenuClick}
                src={currentUser.img}
                referrerpolicy="no-referrer"
              />
              {showLogoutMenu && (
                <LogoutMenu ref={logoutMenu}>
                  <DivContainer>
                    <Avatar src={currentUser.img} />
                    <Text>{currentUser.name}</Text>
                  </DivContainer>
                  <Hr />
                  <DivContainer>
                    <LogoutIcon />
                    <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
                  </DivContainer>
                </LogoutMenu>
              )}
            </MenuContainer>
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
