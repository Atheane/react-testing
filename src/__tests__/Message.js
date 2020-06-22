import React from "react"
import { render } from "@testing-library/react"
import Message from "../components/Message"

describe("Message component", () => {
  describe("when rendered", () => {
    test("text is displayed", () => {
      const { getByText } = render(<Message messageText="message test" />)
      const messageText = getByText(/message test/i)
      expect(messageText).toBeInTheDocument()
    })
  })
})
