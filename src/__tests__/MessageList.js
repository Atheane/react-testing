import React from "react"
import { render } from "@testing-library/react"

import axios from "axios"

import MessageList from "../components/MessageList"

jest.mock("axios")

describe("MessageList component", () => {
  describe("when rendered", () => {
    it("should fetch a list of messages", () => {
      const getSpy = jest.spyOn(axios, "get")
      render(
        <MessageList
          messages={[
            { createdAt: "2020-06-21T10:18:22.045Z", message: "plop" },
          ]}
        />
      )
      expect(getSpy).toBeCalled()
    })
  })
})
