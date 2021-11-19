import styled from "styled-components";

export const CheckoutPage = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;

  .total {
    margin: 4.5rem auto;
    font-size: 3.6rem;
  }

  .credit-card-data {
    text-align: center;
    margin: 3rem 0;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  .header-block {
    text-transform: capitalize;
    width: 23%;

    &:last-child {
      width: 8%;
    }
  }
`;
