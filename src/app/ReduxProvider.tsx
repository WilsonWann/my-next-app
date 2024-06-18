'use client'

import { FC, useEffect, useState } from "react"
import { persistor, store } from "@/store/store"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

const ReduxProvider: FC<{ children: React.ReactNode }> = ({ children }) => {

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default ReduxProvider