import React from "react"
import { arrayOf, shape, string } from "prop-types"

import Message from "./Message"
import DateUI from "./DateUI"

import "../assets/scss/MessageList.scss"

const MessageListUI = ({ messages, messagesEndRef, loading }) => {
  return (
    <div className="list-container" id="chat">
      {loading ? (
        <div> Loading ... </div>
      ) : (
        messages.map((item) => (
          <div key={item.createdAt} className="item-container">
            <DateUI createdAt={item.createdAt} />
            <Message messageText={item.messageText} />
          </div>
        ))
      )}
      <div ref={messagesEndRef} />
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
