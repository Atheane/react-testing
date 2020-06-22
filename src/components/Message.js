import React from "react"
import { string } from "prop-types"
import "../assets/scss/Message.scss"

const Message = ({ messageText }) => (
  <div className="message-bubble">{messageText}</div>
)

Message.propTypes = {
  messageText: string.isRequired,
}

export default Message
