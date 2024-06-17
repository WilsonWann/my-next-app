'use client'

import { FC, useRef } from "react"
import { AppStore, persistor, store } from "@/store/store"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

const ReduxProvider: FC<{ children: React.ReactNode }> = ({ children }) => {

  const storeRef = useRef<AppStore | null>(null)

  if (!storeRef.current) {
    storeRef.current = store()
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )

}

export default ReduxProvider