import { configureStore, Middleware, compose } from "@reduxjs/toolkit";
// import { persistStore, persistReducer, PersistConfig } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// type ExtendedPersistConfig = PersistConfig<RootState> & {
//   whitelist: (keyof RootState)[]
// };

// const persistConfig: ExtendedPersistConfig = {
//   key: "root",
//   storage,
//   whitelist: ['menu']
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  // thunk,
  // sagaMiddleware
].filter((middleware): middleware is Middleware => Boolean(middleware));

// const composeEnhancer = (
//   process.env.NODE_ENV !== 'production' &&
//   window &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// ) || compose

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [
            "persist/PERSIST",
            "persist/REHYDRATE",
            "persist/REGISTER",
            "persist/PAUSE",
            "persist/PURGE",
            "persist/FLUSH",
          ],
          ignoredPaths: ["_persist"],
        },
      }).concat(...middleWares),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
// export type RootState = ReturnType<typeof rootReducer>;

// export const persistor = persistStore(makeStore());
