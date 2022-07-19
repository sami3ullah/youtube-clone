import React from "react";
import {
  Container,
  Details,
  Name,
  Date,
  Text,
} from "./styled/Comment.styledcomponent";
import { Avatar } from "../../utils/styled/StyledComponents";

function Comment() {
  return (
    <Container>
      <Avatar
        src="https://yt3.ggpht.com/ytc/AKedOLTHwFMhGaHZAMaY8-IvZAD_jgRBfm2zAGhttnw_iw=s88-c-k-c0x00ffffff-no-rj"
        alt="comment avatar"
      />
      <Details>
        <Name>
          Strawhat<Date>3 days ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          provident vero laboriosam consectetur corrupti architecto. At magni
          odio eius laboriosam suscipit esse dolore fugiat numquam similique
          tenetur expedita ea maiores eaque nobis repellat, perferendis alias
          quae deserunt non voluptatem facilis. Dolore necessitatibus officiis
          iusto, ipsum animi quas tempora facilis est libero repudiandae nemo
          autem perferendis laborum totam nobis temporibus similique? Recusandae
          consectetur deserunt veniam at delectus natus animi nulla, quidem
          perspiciatis libero sequi vero cumque voluptatem. Facere quis quisquam
          corrupti labore animi eveniet placeat commodi? Eum quas amet fugiat
          nemo distinctio, sed, eos hic asperiores ab quidem qui ullam fuga.
        </Text>
      </Details>
    </Container>
  );
}

export default Comment;
