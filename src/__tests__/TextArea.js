import React from "react"
import { render, screen } from "@testing-library/react"
import TextArea from "../components/TextArea"

describe("TextArea component", () => {
  describe("when rendered", () => {
    test("placeholder and message are displayed", () => {
      const message = {
        createdAt: "2020-06-22T05:31:43.209Z",
        messageText: "Hello World",
      }
      const { getByPlaceholderText } = render(
        <TextArea handleChange={() => {}} message={message} />
      )
      const placeholderText = getByPlaceholderText("Enter a message")
      expect(placeholderText).toBeInTheDocument()
      const messageTextArea = screen.getByDisplayValue("Hello World")
      expect(messageTextArea).toBeInTheDocument()
    })
  })
})
