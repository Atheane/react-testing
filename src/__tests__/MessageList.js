import React from "react"
import { render, screen } from "@testing-library/react"

import axios from "axios"

import MessageList from "../components/MessageList"

jest.mock("axios")

describe("MessageList component", () => {
  describe("when rendered", () => {
    test("should fetch a list of messages and show them all", async () => {
      const getSpy = jest.spyOn(axios, "get")
      render(<MessageList />)
      expect(getSpy).toBeCalled()
      const items = await screen.findAllByText(/Created At :/)
      expect(items).toHaveLength(11)
    })
    test("fetches messages from an API and fails", async () => {
      axios.get.mockImplementationOnce(() => Promise.reject(new Error()))
      render(<MessageList />)
      const message = await screen.findByText(/Erreur 500/)
      expect(message).toBeInTheDocument()
    })
  })
})
