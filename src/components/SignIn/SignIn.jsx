import { React, Component } from "react";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import FormInput from "../FormInput/FormInput";
import { CustomButton } from "../CustomButton/CustomButton";

import * as S from "./SignIn.styles";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <S.SignIn onSubmit={this.handleSubmit}>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <FormInput
          name="email"
          type="email"
          handleChange={this.handleChange}
          value={this.state.email}
          label="Email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={this.state.password}
          handleChange={this.handleChange}
          label="Password"
          required
        />
        <CustomButton type="submit" w="100%" bg="#db8a00" m="7.5rem 0 3rem">
          Sign in
        </CustomButton>
        <CustomButton
          type="button"
          w="100%"
          onClick={signInWithGoogle}
          isGoogleSignIn
        >
          Sign in with Google
        </CustomButton>
      </S.SignIn>
    );
  }
}

export default SignIn;
