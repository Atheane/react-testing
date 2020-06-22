import React from "react"
import "antd/dist/antd.css"
import SimpleBar from "simplebar-react"
import Header from "./components/Header"
import MessageList from "./containers/MessageList"
import TextArea from "./containers/TextArea"
import "simplebar/dist/simplebar.min.css"

import "./assets/scss/App.scss"

const App = () => {
  return (
    <div className="App">
      <Header />
      <SimpleBar>
        <MessageList />
        <TextArea />
      </SimpleBar>
    </div>
  )
}

export default App
