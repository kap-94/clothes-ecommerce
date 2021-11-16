import styled from "styled-components";

export const CollectionPreview = styled.div`
  padding: 3.5rem calc((100vw - 1800px) / 2);
`;

export const CollectionRow = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  grid-column-gap: 2rem;
  grid-template-columns: 1fr;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CollectionTitle = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 2.5rem;
  cursor: pointer;

  transition: 0.3s ease-in;

  &:hover {
    color: grey;
  }
`;
