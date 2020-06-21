import React from "react"
import { render, screen } from "@testing-library/react"

import axios from "axios"

import MessageList from "../components/MessageList"

jest.mock("axios")

describe("MessageList component", () => {
  describe("when rendered", () => {
    test("should fetch a list of messages", async () => {
      const getSpy = jest.spyOn(axios, "get")
      render(<MessageList />)
      expect(getSpy).toBeCalled()
      const items = await screen.findAllByText(/Created At :/)
      expect(items).toHaveLength(11)
    })
  })
})
