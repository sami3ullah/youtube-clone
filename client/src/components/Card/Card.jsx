import React, {useEffect, useState} from "react";
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
import {format} from "timeago.js";
import {getUserDetails} from "../../api/user.js";

function Card({ type, video }) {

  const [userDetails, setUserDetails] = useState({});

  //  get the videos for the page
  useEffect(() => {
    (async () => {
      const response = await getUserDetails(video.userId);
      setUserDetails(response);
    })()
  }, [video.userId])

  console.log(userDetails)
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Img
          type={type}
          src={video.imgUrl}
          alt={video.title}
        />
        <Details type={type}>
          <ChannelImg
            type={type}
            src={userDetails.img}
            alt={userDetails.name}
          />
          <Texts>
            <Title>{video.title}</Title>
            <ChannelName>{userDetails.name}</ChannelName>
            <Info>{video.views} {video.views > 1 ? "views" : "view"} . {format(video.createdAt)} </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
}

export default Card;
