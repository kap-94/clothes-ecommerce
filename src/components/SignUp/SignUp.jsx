import { React, Component } from "react";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import { CustomButton } from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";

import * as S from "./SignUp.styles";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      throw error;
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <S.SignUp onSubmit={this.handleSubmit}>
        <h2>I do not have a account</h2>
        <span>Sign up with your email and password</span>

        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={this.handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={this.handleChange}
          label="Confirm Password"
          required
        />

        <CustomButton type="submit" w="100%" bg="#db8a00">
          SIGN UP
        </CustomButton>
      </S.SignUp>
    );
  }
}

export default SignUp;
