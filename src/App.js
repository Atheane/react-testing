import React from "react"
import "antd/dist/antd.css"
import Header from "./components/Header"
import MessageList from "./containers/MessageList"
import "./assets/scss/App.scss"

const App = () => {
  return (
    <div className="App">
      <Header />
      <MessageList />
    </div>
  )
}

export default App
