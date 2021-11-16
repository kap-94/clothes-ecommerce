import styled from "styled-components";
import { Link } from "react-router-dom";

export const Footer = styled.div`
  border-top: 3px solid #222;
  background-color: ${({ theme }) => theme.colors.black};
  /* height: 35rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.25rem;
  padding: 7rem 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5rem;
  text-align: center;
`;

export const Title = styled.h3`
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  margin-bottom: 2.5rem;
  text-transform: uppercase;
  padding: 2rem;
`;

export const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  margin: 1rem 2rem;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    filter: brightness(0.8);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.65rem;
  }
`;
