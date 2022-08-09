import React from "react";
import {Link} from 'react-router-dom';
import BestOfIcons from "./BestOfIcons";
import SignUp from "../SignUp/SignUp";
import { Hr, Title, Item } from "./styled/MenuIcons.styledcomponent";

import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";

function MenuIcons({ darkMode, setDarkMode }) {
  return (
    <>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <HomeIcon />
            Home
          </Item>
        </Link>
        <Link to="explore" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <ExploreIcon />
            Explore
          </Item>
        </Link>
        <Link to="subscriptions" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <SubscriptionsIcon />
            Subscriptions
          </Item>
        </Link>
      <Hr />
      <Item>
        <VideoLibraryIcon />
        Library
      </Item>
      <Item>
        <HistoryIcon />
        History
      </Item>
      <SignUp />
      <Hr />
      <Title>BEST OF YOUTUBE</Title>
      <BestOfIcons darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
}

export default MenuIcons;
