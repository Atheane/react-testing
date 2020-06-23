import React from "react"
import Header from "./components/Header"
import Chat from "./pages/Chat"
import { StoreProvider } from "./Store"

import "antd/dist/antd.css"

import "./assets/scss/App.scss"

const App = () => (
  <div className="App">
    <Header />
    <Chat />
  </div>
)

const AppWithStore = () => {
  return (
    <StoreProvider>
      <App />
    </StoreProvider>
  )
}

export default AppWithStore
