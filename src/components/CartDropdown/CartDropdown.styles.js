import styled from "styled-components";
import { CustomButton } from "../CustomButton/CustomButton.styles";

export const CartDropdown = styled.div`
  position: absolute;
  width: 35rem;
  height: 45rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid black;
  background-color: white;
  top: 9rem;
  right: 4rem;
  z-index: 5;
`;

export const CartItems = styled.div`
  height: 35rem;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const EmptyMessageSpan = styled.span`
  color: black;
  font-size: 1.8rem;
  margin: 5rem auto;
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;
