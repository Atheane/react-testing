import React, { useContext } from "react"
import { StoreContext } from "../Store"
import useScrollBottom from "../hooks/useScrollBottom"

import MessageListUI from "../components/MessageList"
import useFetch from "../hooks/useFetch"

const MessageList = () => {
  const {
    data: { messages, dispatchMessages },
  } = useContext(StoreContext)

  const { loading, error } = useFetch(dispatchMessages)

  const messagesEndRef = useScrollBottom()

  return error ? (
    <span> {error.message} </span>
  ) : (
    <MessageListUI
      messages={messages}
      messagesEndRef={messagesEndRef}
      loading={loading}
    />
  )
}

export default MessageList
