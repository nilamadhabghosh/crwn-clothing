import React from "react";
import "./sign-in-and-sign-up.styles.scss";
import SignIn from "../../components/Sign-in/Sign-in.component";
import SignUp from "../../components/Sign-up/sign-up.component";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
