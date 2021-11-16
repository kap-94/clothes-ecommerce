import styled from "styled-components";

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 1000rem;
  height: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 100vh;
    flex-direction: row;
    padding: 0 5%;
  }
`;
