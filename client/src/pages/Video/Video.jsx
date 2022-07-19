import React from "react";
import {
  Container,
  Content,
  Recommendation,
  VideoWrapper,
  Title,
  Details,
  Info,
  ButtonContainer,
  Button,
  Hr,
} from "./styled/Video.styledcomponent";
import Card from "../../components/Card/Card";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import SubscribeSection from "../../components/SubscribeSection/SubscribeSection";
import Comments from "../../components/Comments/Comments";

function Video() {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/ieCWaqGQe4E"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Beutiful Mount Fuji, Japan</Title>
        <Details>
          <Info>7,893,123 views . Jan 22, 2022</Info>
          <ButtonContainer>
            <Button>
              <ThumbUpOutlinedIcon /> 200
            </Button>
            <Button>
              <ThumbDownOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ShareOutlinedIcon /> Share
            </Button>
            <Button>
              <SaveAltOutlinedIcon /> Save
            </Button>
          </ButtonContainer>
        </Details>
        <Hr />
        <SubscribeSection />
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Card type="horizontal" />
        <Card type="horizontal" />
        <Card type="horizontal" />
        <Card type="horizontal" />
        <Card type="horizontal" />
        <Card type="horizontal" />
        <Card type="horizontal" />
        <Card type="horizontal" />
        <Card type="horizontal" />
        <Card type="horizontal" />
      </Recommendation>
    </Container>
  );
}

export default Video;
