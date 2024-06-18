import { configureStore, Middleware, compose } from '@reduxjs/toolkit'
import { persistStore, persistReducer, PersistConfig } from "redux-persist"
import storage from "redux-persist/lib/storage"
import logger from "redux-logger"

import { rootReducer } from './root-reducer'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
  // whitelist: (keyof RootState)[]
}

const persistConfig: ExtendedPersistConfig = {
  key: 'root',
  storage,
  // whitelist: ['menu']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  // thunk,
  // sagaMiddleware
].filter((middleware): middleware is Middleware => Boolean(middleware))

// const isClient = typeof window !== 'undefined';

// const composeEnhancer = (
//   isClient &&
//   process.env.NODE_ENV !== 'production' &&
//   window &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// ) || compose

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/REGISTER',
          'persist/PAUSE',
          'persist/PURGE',
          'persist/FLUSH',
        ],
        ignoredPaths: ['_persist'],
      }
    }).concat(...middleWares),
})


export type RootState = ReturnType<typeof rootReducer>

export const persistor = persistStore(store)