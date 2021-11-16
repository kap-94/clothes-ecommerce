import styled from "styled-components";

export const InfoSection = styled.div`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ lightBg }) =>
    lightBg ? "#f9f9f9" : `${({ theme }) => theme.colors.black}`};
`;

export const InfoWrapper = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  z-index: 1;
`;

export const InfoRow = styled.div`
  display: grid;
  align-items: center;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col1 col2'` : `'col1 col1' 'col2 col2'`};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col2 col1'` : `'col1 col2'`};
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
  margin-bottom: 1.5rem;
  padding: 0 1.5rem;
`;
export const Column2 = styled.div`
  grid-area: col2;
  height: 100%;
  /* margin-bottom: 1.5rem; */
  padding: 0 1.5rem;
`;

export const TextWrapper = styled.div`
  margin-top: 5rem;
  padding: 5rem;
  text-align: center;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: unset;
    max-width: 70rem;
    text-align: left;
  }
`;

export const TopLine = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
`;

export const Heading = styled.h1`
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 2.4rem;
  line-height: 1.1;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 3rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 4.85rem;
  }
`;

export const Subtitle = styled.p`
  color: ${({ darkText }) => (darkText ? "#016006" : "#fff")};
  font-size: 1.8rem;
  line-height: 3rem;
  margin-bottom: 3.5rem;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 45rem;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: flex-start;
  }
`;

export const ImgWrap = styled.div`
  height: 100%;
  padding: 0 10%;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    /* max-width: 55.5rem; */
    padding: 0;
  }
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  padding: 0;
`;
