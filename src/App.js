import React from "react"
import "antd/dist/antd.css"
import SimpleBar from "simplebar-react"
import Header from "./components/Header"
import MessageList from "./containers/MessageList"
import TextArea from "./containers/TextArea"
import { StoreProvider } from "./Store"

import "simplebar/dist/simplebar.min.css"

import "./assets/scss/App.scss"

const App = () => (
  <div className="App">
    <Header />
    <SimpleBar>
      <MessageList />
      <TextArea />
    </SimpleBar>
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
