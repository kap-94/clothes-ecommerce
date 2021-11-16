import { createSelector } from "reselect";

// There's actually two types of selectors we can write, the first type is called an
// input selector that doesn't use create selector, and then the second type is called
// an output selector that does use input selectors and create a selector to build themselves

// All an input selector is is it is a function that usually takes this naming structure
// of select, let's say, cart, for example. And what it does is it's a function that gets
// the whole state and just returns a slice of it.
const selectCart = (state) => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
    0
  )
);
