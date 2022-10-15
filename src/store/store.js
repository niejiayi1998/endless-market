// import { compose, createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./root-reducer";
import { rootSaga } from "./root-saga";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Middleware using SagaMiddleware
const middleWare = [process.env.NODE_ENV !== "production" && logger, sagaMiddleware].filter(Boolean);

// root-reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleWare,
  // middleware: [loggerMiddleware],
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// const middleWares = [logger];
// const composedEnhancers = compose(applyMiddleware(...middleWares));
// export const store = createStore(rootReducer, undefined, composedEnhancers);
