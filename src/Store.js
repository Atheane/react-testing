import React, { createContext, useEffect, useReducer } from "react"

import messagesReducer from "./reducers/messagesReducer"

export const StoreContext = createContext(null)

export const StoreProvider = ({ children }) => {
  useEffect(() => {
    console.log("STORE IS MOUNTED")
    return () => console.log("STORE UNMOUNTED")
  }, [])

  const [messages, dispatchMessages] = useReducer(messagesReducer, [])

  const store = {
    data: {
      messages,
      dispatchMessages,
    },
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
