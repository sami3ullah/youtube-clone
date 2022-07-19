import React from "react";
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
      <Item>
        <HomeIcon />
        Home
      </Item>
      <Item>
        <ExploreIcon />
        Explore
      </Item>
      <Item>
        <SubscriptionsIcon />
        Subscriptions
      </Item>
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
