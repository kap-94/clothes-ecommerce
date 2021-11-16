import styled from "styled-components";
import { CustomButton } from "../CustomButton/CustomButton";

export const CollectionItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 5rem;
  height: 52.5rem;
  position: relative;

  transition: 0.3s all ease-in-out;

  &:hover {
    background-color: #222;
    transform: scale(1.05);

    .image {
      opacity: 0.8;
    }
    button {
      display: flex;
      opacity: 0.85;
    }
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 85%;
  max-height: 37.5rem;
  background-size: cover;
  background-position: center;
  margin-bottom: 1rem;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionItemFooter = styled.div`
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.greyLight};
  font-size: 1.8rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* height: 15%; */
  padding: 2rem;
  width: 100%;
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 57.5%;
  display: none;
`;

export const NameContainer = styled.h3`
  margin-bottom: 0.5rem;
`;

export const DescriptionContainer = styled.div`
  font-weight: 300;
  margin-bottom: 1rem;
`;

export const PriceContainer = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;
