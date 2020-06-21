import React, { useState, useEffect } from "react"
import axios from "../__mocks__/axios"
import Message from "./Message"

const MessageList = () => {
  const [messages, setMessages] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get()
        setMessages(result.data)
      } catch (err) {
        setError(err)
      }
    }
    fetchData()
  }, [])

  return error ? (
    <span> Something went wrong ... </span>
  ) : (
    messages.map((message) => <Message key={message.createdAt} {...message} />)
  )
}

export default MessageList
