// import { compose, createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};



const persistedReducer = persistReducer(persistConfig, rootReducer);

// Middleware using thunk
const middleWare = [process.env.NODE_ENV !== "production" && logger, thunk].filter(Boolean);


// root-reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleWare,
  // middleware: [loggerMiddleware],
});

export const persistor = persistStore(store);

// const middleWares = [logger];
// const composedEnhancers = compose(applyMiddleware(...middleWares));
// export const store = createStore(rootReducer, undefined, composedEnhancers);
