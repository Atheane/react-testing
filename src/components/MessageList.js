import React from "react"
import { arrayOf, shape, string } from "prop-types"

import Message from "./Message"
import DateUI from "./DateUI"

import "../assets/scss/MessageList.scss"

const MessageListUI = ({ messages }) => {
  return (
    <div className="list-container">
      {messages.map((item) => (
        <div key={item.createdAt} className="item-container">
          <DateUI createdAt={item.createdAt} />
          <Message messageText={item.messageText} />
        </div>
      ))}
    </div>
  )
}

MessageListUI.propTypes = {
  messages: arrayOf(
    shape({
      createdAt: string.isRequired,
      messageText: string.isRequired,
    })
  ).isRequired,
}

export default MessageListUI
