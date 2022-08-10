import React, { useState } from "react";
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
import { signin, signinWithGoogleAuth } from "../../api/auth.js";
import { useDispatch } from "react-redux";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../../redux/userSlice.js";
import { auth, googleProvider } from "../../firebase/firebase.js";
import { signInWithPopup } from "firebase/auth";

function Authentication() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const response = await signin(username, password);
      dispatch(loginSuccess(response));
    } catch (err) {
      dispatch(loginFailure(err));
    }
  };

  const signInWithGoogle = async () => {
    dispatch(loginStart());
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const data = await signinWithGoogleAuth(
        result.user.displayName,
        result.user.email,
        result.user.photoURL
      );
      dispatch(loginSuccess(data));
    } catch (err) {
      dispatch(loginFailure());
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>to continue to Youtube</SubTitle>
        <Input
          placeholder="username"
          aria-label="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          aria-label="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Sign In</Button>
        <SubTitle>or</SubTitle>
        <Button
          style={{ background: "#4285F4", color: "white" }}
          onClick={signInWithGoogle}
        >
          Signin with Google
        </Button>
        <SubTitle>or</SubTitle>
        <Input
          placeholder="username"
          aria-label="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="email"
          aria-label="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          aria-label="password"
          onChange={(e) => setPassword(e.target.value)}
        />
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
