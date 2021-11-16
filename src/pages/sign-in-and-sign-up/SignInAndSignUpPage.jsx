import React from "react";

import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

import * as S from "./SignInAndSignUpPage.styles";

const SignInAndSignUpPage = () => (
  <S.SignInAndSignUpPage>
    <SignIn />
    <SignUp />
  </S.SignInAndSignUpPage>
);

export default SignInAndSignUpPage;
