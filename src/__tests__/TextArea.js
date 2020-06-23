import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import TextAreaUI from "../components/TextArea"

describe("TextArea component", () => {
  describe("when rendered", () => {
    test("placeholder and message are displayed", () => {
      const { getByPlaceholderText } = render(
        <TextAreaUI
          handleOnChange={() => {}}
          handleOnSubmit={() => {}}
          messageText="Hello World"
        />
      )
      const textAreaNode = getByPlaceholderText("Enter a message")
      expect(textAreaNode).toBeInTheDocument()
      const messageTextArea = screen.getByDisplayValue("Hello World")
      expect(messageTextArea).toBeInTheDocument()
    })
  })
  describe("when user enter message", () => {
    test("callBack handleOnChange is called the right number of times", () => {
      const handleOnChange = jest.fn()
      render(
        <TextAreaUI
          handleOnChange={handleOnChange}
          handleOnSubmit={() => {}}
          messageText="Hello World" // for propTypes checks
        />
      )
      userEvent.type(screen.getByRole("textbox"), "message test")
      expect(handleOnChange).toHaveBeenCalledTimes("message test".length)
    })
  })
  describe("when user click on send", () => {
    test("callBack handleOnClick is called", () => {
      const handleOnSubmit = jest.fn()
      render(
        <TextAreaUI handleOnChange={() => {}} handleOnSubmit={handleOnSubmit} />
      )
      userEvent.click(screen.getByRole("button"))
      expect(handleOnSubmit).toHaveBeenCalledTimes(1)
    })
  })
  describe("when user enter a message and click on send", () => {
    test("messages list is updated with a message objet that have the right form", () => {
      const handleOnChange = jest.fn()
      const handleOnSubmit = jest.fn()

      render(
        <TextAreaUI
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
        />
      )
      userEvent.type(screen.getByRole("textbox"), "message test")
      userEvent.click(screen.getByRole("button"))

      const messageTextArea = screen.getByDisplayValue("message test")
      expect(messageTextArea).toBeInTheDocument()
    })
  })
})
