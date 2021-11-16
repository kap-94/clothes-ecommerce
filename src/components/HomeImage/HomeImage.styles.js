import styled from "styled-components";

export const HomeImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0 10rem;
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 5rem;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const TextBox = styled.div`
  background-color: #000;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.8;
  padding: 5% 8%;
  position: absolute;
  left: 0;
  bottom: 20%;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    left: 7.25%;
    bottom: 20%;
  }
`;

export const TextBoxSecondary = styled.div`
  background-color: #cc7a44;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.8;
  padding: 3% 5%;
  position: absolute;
  right: 0;
  top: 13.5%;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    right: 0;
    top: 5%;
  }
`;
