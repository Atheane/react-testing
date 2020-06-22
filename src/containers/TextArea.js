import React, { useState } from "react"
import TextAreaUI from "../components/TextArea"

const TextArea = () => {
  const [message, setMessage] = useState("")
  const handleChange = ({ target: { value } }) => {
    console.log(value)
    setMessage({
      createdAt: new Date(),
      message: value,
    })
  }

  return <TextAreaUI handleChange={handleChange} message={message} />
}

export default TextArea
