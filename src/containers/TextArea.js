import React, { useState, useEffect } from "react"
import TextAreaUI from "../components/TextArea"

const TextArea = () => {
  const [messageText, setMessageText] = useState("")
  const [message, setMessage] = useState(null)

  const handleOnChange = ({ target: { value } }) => {
    console.log(value)
    setMessageText(value)
  }

  const handleOnSubmit = () => {
    console.log("click")
    setMessage({
      createdAt: new Date(),
      messageText,
    })
  }

  useEffect(() => {
    // dispatch({ type: 'ADD_MESSAGE', payload: message })
    console.log(message)
  }, [message])

  return (
    <TextAreaUI
      handleOnChange={handleOnChange}
      handleOnSubmit={handleOnSubmit}
      messageText={messageText}
    />
  )
}

export default TextArea
