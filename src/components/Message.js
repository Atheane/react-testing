import React from "react"
import { string } from "prop-types"
import "../assets/scss/Message.scss"

const Message = ({ createdAt, message }) => (
  <div className="message-bubble">
    <div>{createdAt}</div>
    <div>{message}</div>
  </div>
)

Message.propTypes = {
  createdAt: string.isRequired,
  message: string.isRequired,
}

export default Message
