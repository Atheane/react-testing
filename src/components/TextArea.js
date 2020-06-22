import React from "react"
import { func, shape, string } from "prop-types"
import { SendOutlined } from "@ant-design/icons"
import "../assets/scss/TextArea.scss"

const TextAreaComponent = ({ handleChange, message }) => {
  return (
    <div className="stuck">
      <div className="container">
        <textarea
          onChange={handleChange}
          value={message.messageText}
          placeholder="Enter a message"
        />
        <button type="submit">
          <SendOutlined />
        </button>
      </div>
    </div>
  )
}

TextAreaComponent.propTypes = {
  handleChange: func.isRequired,
  message: shape({
    createdAt: string.isRequired,
    messageText: string.isRequired,
  }).isRequired,
}

export default TextAreaComponent
