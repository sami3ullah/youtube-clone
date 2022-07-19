import React from "react";
import { Login, Span } from "./styled/SignUp.styledcomponent";
import { Button } from "../../utils/styled/StyledComponents";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <Login>
      <Span>Sign in to like videos, comment and subscribe.</Span>
      <Link to="authentication" style={{ textDecoration: "none" }}>
        <Button>
          <AccountCircleOutlinedIcon /> SIGN IN
        </Button>
      </Link>
    </Login>
  );
}

export default SignUp;
