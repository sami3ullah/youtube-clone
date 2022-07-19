import React from "react";
import {
  Channel,
  ChannelInfo,
  Subscribe,
  ChannelDetail,
  ChannelName,
  ChannelCounter,
  ChannelDescription,
  Avatar,
} from "./styled/SubscribeSection.styledcomponent";

function SubscribeSection() {
  return (
    <Channel>
      <ChannelInfo>
        <Avatar
          src="https://yt3.ggpht.com/WxarVlppYPZR8E1xW-cCoWaFUyA7oboRhXOfZMktMwEOT_yT7vTR50Cl8Gyx-qnE9hDJr2DOwQ=s68-c-k-c0x00ffffff-no-rj"
          alt="channel avatar"
        />
        <ChannelDetail>
          <ChannelName>Randomize</ChannelName>
          <ChannelCounter>200k subscribers</ChannelCounter>
          <ChannelDescription>
            Video uploading app design using React and Styled Components.
            Youtube clone design with hooks and functional component. React
            video player.
          </ChannelDescription>
        </ChannelDetail>
      </ChannelInfo>
      <Subscribe>SUBSCRIBE</Subscribe>
    </Channel>
  );
}

export default SubscribeSection;
