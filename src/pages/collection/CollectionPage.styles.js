import styled from "styled-components";

export const CollectionPage = styled.div`
  margin: 5rem;
  padding: 3.5rem calc((100vw - 1800px) / 2);
`;

export const ProductList = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  grid-column-gap: 2rem;
  grid-template-columns: 1fr;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CollectionHeader = styled.div`
  margin-bottom: 2rem;
  padding: 1rem 0;
  text-transform: uppercase;
  width: 100%;
`;

export const TitleSecondary = styled.h2`
  font-size: 2.8rem;
`;
