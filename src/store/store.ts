import { configureStore, Middleware, compose } from '@reduxjs/toolkit'
import { persistStore, persistReducer, PersistConfig } from "redux-persist"
import storage from "redux-persist/lib/storage"
import logger from "redux-logger"

import { rootReducer } from './root-reducer'

export type RootState = ReturnType<typeof rootReducer>

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
    getDefaultMiddleware().concat(...middleWares),
})

export const persistor = persistStore(store)