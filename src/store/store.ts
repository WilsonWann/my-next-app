import { compose, legacy_createStore as createStore, applyMiddleware, Middleware } from "redux"
import { persistStore, persistReducer, PersistConfig } from "redux-persist"
import storage from "redux-persist/lib/storage"
import logger from "redux-logger"
// import { thunk } from "redux-thunk" //* choose either thunk or saga
import createSagaMiddleware from "redux-saga"

// import { rootSaga } from "./root-saga"

import { rootReducer } from './root-reducer'
import { useDispatch, useSelector, useStore } from "react-redux"

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

// const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  // thunk,
  // sagaMiddleware
].filter((middleware): middleware is Middleware => Boolean(middleware))

const isClient = typeof window !== 'undefined';

const composeEnhancer = (
  isClient &&
  process.env.NODE_ENV !== 'production' &&
  window &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))

export const store = () => createStore(
  persistedReducer,
  undefined,
  composedEnhancers
)

export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']
// sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store())

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()