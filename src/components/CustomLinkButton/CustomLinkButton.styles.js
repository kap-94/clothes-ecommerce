import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const buttonStyles = css`
  background-color: ${({ theme }) => theme.colors.greyLight};
  color: ${({ theme }) => theme.colors.white};
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.greyLight};
    border: 1px solid ${({ theme }) => theme.colors.greyLight};
  }
`;

const invertedButtonStyles = css`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.greyLight};
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.greyLight};
    color: ${({ theme }) => theme.colors.white};
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #276ddd;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomLinkButton = styled(Link)`
  border-radius: 3px;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.45rem;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  letter-spacing: 0.5px;
  line-height: 5rem;
  margin: ${(props) => props.m};
  min-width: 16.5rem;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0 3.5rem 0 3.5rem;
  height: 5rem;
  width: ${(props) => props.w};

  transition: 0.3s ease-in all;

  ${getButtonStyles}
  background-color: ${(props) => props.bg};
`;
