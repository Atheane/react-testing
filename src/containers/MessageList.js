import React, { useState, useEffect, useContext } from "react"
import axios from "../__mocks__/axios"
import { StoreContext } from "../Store"
import useScroll from "../hooks/useScroll"

import MessageListUI from "../components/MessageList"

const MessageList = () => {
  const {
    data: { messages, dispatchMessages },
  } = useContext(StoreContext)

  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("/messages")
        dispatchMessages({ type: "LOAD_ALL", payload: result.data })
      } catch (err) {
        setError(err)
      }
    }
    fetchData()
  }, [dispatchMessages])

  const messagesEndRef = useScroll()

  return error ? (
    <span> {error.message} </span>
  ) : (
    <MessageListUI messages={messages} messagesEndRef={messagesEndRef} />
  )
}

export default MessageList
