import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist"; // Allows our browser to catch our store depending of a set of configuration options
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store); // Persisted version of our store
