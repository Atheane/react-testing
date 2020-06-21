import React from "react"
import { string } from "prop-types"
import "../assets/scss/Message.scss"

const Message = ({ message }) => <div className="message-bubble">{message}</div>

Message.propTypes = {
  message: string.isRequired,
}

export default Message
