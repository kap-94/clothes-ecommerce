import styled from "styled-components";

export const SignIn = styled.form`
  background-color: #333;
  border-radius: 1rem;
  letter-spacing: 1.5px;
  margin: 5rem;
  text-align: center;
  padding: 7rem 5rem;
  position: relative;
  width: 45rem;
  z-index: 10;

  & label {
    font-size: 1.3rem;
    color: #222;
  }
`;

export const AuthFormErrMessage = styled.div`
  background-color: orange;
  border-radius: 1rem;
  font-size: 1.25rem;
  margin-bottom: 2rem;
  text-align: center;
  padding: 1rem 2rem;
`;
