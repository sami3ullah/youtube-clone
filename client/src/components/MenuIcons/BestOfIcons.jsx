import { Item, Hr } from "./styled/MenuIcons.styledcomponent";

import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Brightness5OutlinedIcon from "@mui/icons-material/Brightness5Outlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

function BesOfIcons({ darkMode, setDarkMode }) {
  return (
    <>
      <Item>
        <LibraryMusicOutlinedIcon />
        Music
      </Item>
      <Item>
        <SportsBasketballOutlinedIcon />
        Sports
      </Item>
      <Item>
        <SportsEsportsOutlinedIcon />
        Gaming
      </Item>
      <Item>
        <MovieCreationOutlinedIcon />
        Movies
      </Item>
      <Item>
        <ArticleOutlinedIcon />
        News
      </Item>
      <Item>
        <LiveTvOutlinedIcon />
        Live
      </Item>
      <Hr />
      <Item>
        <SettingsOutlinedIcon />
        Settings
      </Item>
      <Item>
        <FlagOutlinedIcon />
        Report
      </Item>
      <Item>
        <HelpOutlineOutlinedIcon />
        Help
      </Item>
      <Item onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <Brightness5OutlinedIcon /> : <DarkModeOutlinedIcon />}
        {darkMode ? "Light Mode" : "Dark Mode"}
      </Item>
    </>
  );
}

export default BesOfIcons;
