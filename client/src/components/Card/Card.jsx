import React from "react";
import {
  Container,
  Img,
  Details,
  ChannelImg,
  Texts,
  Title,
  ChannelName,
  Info,
} from "./styled/Card.styledcomponent";
import { Link } from "react-router-dom";

function Card({ type }) {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Img
          type={type}
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt="videos"
        />
        <Details type={type}>
          <ChannelImg
            type={type}
            src="https://yt3.ggpht.com/WxarVlppYPZR8E1xW-cCoWaFUyA7oboRhXOfZMktMwEOT_yT7vTR50Cl8Gyx-qnE9hDJr2DOwQ=s68-c-k-c0x00ffffff-no-rj"
            alt="Channel image"
          />
          <Texts>
            <Title>Beautiful Mount Fuji, Japan</Title>
            <ChannelName>Randomzie</ChannelName>
            <Info>208,017 view . 1 day ago </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
}

export default Card;
