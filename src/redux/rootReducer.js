import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // LocalStorage

import { cartReducer } from "./cart/cartReducer";
import { userReducer } from "./user/userReducer";
import { shopReducer } from "./shop/shopReducer";
import { directoryReducer } from "./directory/directoryReducer";

const persistConfig = {
  // JSON obj that represent the posible conf that we want for redux-persist to use
  key: "root", // At what point inside of the reducer we want to start store
  storage,
  whitelist: ["cart"], // The reducers we want to store (persist)
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer,
  directory: directoryReducer,
});

export default persistReducer(persistConfig, rootReducer);
