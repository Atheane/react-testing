import React, { useState, useEffect, useContext } from "react"
import axios from "../__mocks__/axios"
import MessageListUI from "../components/MessageList"
import { StoreContext } from "../Store"

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

  return error ? (
    <span> {error.message} </span>
  ) : (
    <MessageListUI messages={messages} />
  )
}

export default MessageList
