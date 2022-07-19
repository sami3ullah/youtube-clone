import React from "react";
import {
  Container,
  Wrapper,
  Title,
  SubTitle,
  Input,
  Button,
  More,
  Links,
  Link,
} from "./styled/Authentication.styledcomponent";

function Authentication() {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>to continue to Youtube</SubTitle>
        <Input placeholder="username" aria-label="username" />
        <Input type="password" placeholder="password" aria-label="password" />
        <Button>Sign In</Button>
        <SubTitle>or</SubTitle>
        <Input placeholder="username" aria-label="username" />
        <Input placeholder="email" aria-label="email" />
        <Input type="password" placeholder="password" aria-label="password" />
        <Button>Sign Up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
}

export default Authentication;
