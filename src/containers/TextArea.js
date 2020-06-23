import React, { useState, useContext } from "react"
import TextAreaUI from "../components/TextArea"
import { StoreContext } from "../Store"

const TextArea = () => {
  const {
    data: { dispatchMessages },
  } = useContext(StoreContext)

  const [messageText, setMessageText] = useState("")

  const handleOnChange = ({ target: { value } }) => {
    console.log(value)
    setMessageText(value)
  }

  const handleOnSubmit = () => {
    if (messageText) {
      dispatchMessages({
        type: "ADD_MESSAGE",
        payload: {
          createdAt: new Date(),
          messageText,
        },
      })
      setMessageText("")
    }
  }

  return (
    <TextAreaUI
      handleOnChange={handleOnChange}
      handleOnSubmit={handleOnSubmit}
      messageText={messageText}
    />
  )
}

export default TextArea
