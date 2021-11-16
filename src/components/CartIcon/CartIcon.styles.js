import styled from "styled-components";

import { ReactComponent as ShoppingIconSVG } from "../../assets/shopping-bag.svg";

export const CartIcon = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  height: 3rem;
  width: 3rem;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 1.15rem;
  font-weight: bold;
  bottom: 0.8rem;
`;
