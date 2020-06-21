import React from "react"
import { string } from "prop-types"
import "../assets/scss/Message.scss"

const Message = ({ message }) => (
  <div className="message-bubble">
    <div>{message}</div>
  </div>
)

Message.propTypes = {
  message: string.isRequired,
}

export default Message
