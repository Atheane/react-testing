import React, { useState, useEffect } from "react"
import axios from "../__mocks__/axios"
import MessageListUI from "../components/MessageList"

const MessageList = () => {
  const [messages, setMessages] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("/messages")
        setMessages(result.data)
      } catch (err) {
        setError(err)
      }
    }
    fetchData()
  }, [])

  return error ? (
    <span> {error.message} </span>
  ) : (
    <MessageListUI messages={messages} />
  )
}

export default MessageList
