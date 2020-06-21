import React from "react"
import { arrayOf, shape, string } from "prop-types"

import Message from "./Message"

const MessageListUI = ({ messages }) => {
  return messages.map((message) => (
    <Message key={message.createdAt} {...message} />
  ))
}

MessageListUI.propTypes = {
  arrayWithShape: arrayOf(
    shape({
      createdAt: string.isRequired,
      message: string.isRequired,
    })
  ),
}

export default MessageListUI
