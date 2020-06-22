import React from "react"
import { func, string } from "prop-types"
import { SendOutlined } from "@ant-design/icons"
import "../assets/scss/TextArea.scss"

const TextAreaComponent = ({ handleOnChange, handleOnSubmit, messageText }) => {
  return (
    <div className="stuck">
      <div className="container">
        <textarea
          onChange={handleOnChange}
          value={messageText}
          placeholder="Enter a message"
        />
        <button type="submit" onClick={handleOnSubmit}>
          <SendOutlined />
        </button>
      </div>
    </div>
  )
}

TextAreaComponent.propTypes = {
  handleOnChange: func.isRequired,
  handleOnSubmit: func.isRequired,
  messageText: string,
}

export default TextAreaComponent
