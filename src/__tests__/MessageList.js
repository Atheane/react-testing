import React from "react"
import { render, screen } from "@testing-library/react"
import axios from "axios"
import { StoreProvider } from "../Store"

import MessageList from "../containers/MessageList"

const Provider = (Comp) => <StoreProvider> {Comp} </StoreProvider>

jest.mock("axios")

describe("MessageList component", () => {
  describe("when rendered", () => {
    test("should fetch a list of messages and show them all", async () => {
      const getSpy = jest.spyOn(axios, "get")
      render(Provider(<MessageList />))
      expect(getSpy).toBeCalled()
      const items = await screen.findAllByText(/^21-06-2020/i)
      expect(items).toHaveLength(11)
    })
    test("fetches messages from an API and fails with 404 message error", async () => {
      axios.get.mockImplementationOnce(() =>
        Promise.reject(new Error("Erreur 404"))
      )
      render(Provider(<MessageList />))
      const message = await screen.findByText(/Erreur 404/)
      expect(message).toBeInTheDocument()
    })
    test("fetches messages from an API and fails with 500 message error", async () => {
      axios.get.mockImplementationOnce(() =>
        Promise.reject(new Error("Erreur 500"))
      )
      render(Provider(<MessageList />))
      const message = await screen.findByText(/Erreur 500/)
      expect(message).toBeInTheDocument()
    })
  })
})
