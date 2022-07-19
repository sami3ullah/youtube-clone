import React from "react";
import Comment from "../Comment/Comment";
import { Container, NewComment, Input } from "./styled/Comments.styledcomment";
import { Avatar } from "../../utils/styled/StyledComponents";

function Comments() {
  return (
    <Container>
      <NewComment>
        <Avatar
          src="https://yt3.ggpht.com/yti/APfAmoFyA5COiJxi4itHrK9Zpip-iyc0nMPPgWFITZqAtFA=s88-c-k-c0x00ffffff-no-rj"
          alt="comment avatar"
        />
        <Input aria-label="add a comment" placeholder="Add a comment" />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
}

export default Comments;
