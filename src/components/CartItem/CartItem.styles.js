import styled from "styled-components";

export const CartItem = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const CartItemImage = styled.img`
  width: 30%;
`;

export const CartItemDetails = styled.div`
  align-items: flex-start;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;
  width: 70%;
`;
