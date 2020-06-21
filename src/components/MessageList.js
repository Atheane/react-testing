import React from "react"
import { arrayOf, shape, string } from "prop-types"
import Message from "./Message"

const MessageList = ({ messages }) =>
  messages.map((message) => <Message key={message.createdAt} />)

MessageList.propTypes = {
  arrayWithShape: arrayOf(
    shape({
      createdAt: string.isRequired,
      message: string.isRequired,
    })
  ).isRequired,
}

export default MessageList
