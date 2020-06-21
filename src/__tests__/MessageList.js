import React from "react"
// import { render } from '@testing-library/react'
import { shallow } from "enzyme"

import axios from "axios"

import MessageList from "../components/MessageList"

jest.mock("axios")

describe("MessageList component", () => {
  describe("when rendered", () => {
    it("should fetch a list of messages", () => {
      const getSpy = jest.spyOn(axios, "get")
      const messageListInstance = shallow(
        <MessageList
          messages={[
            { createdAt: "2020-06-21T10:18:22.045Z", message: "plop" },
          ]}
        />
      )
      console.log(messageListInstance)
      expect(getSpy).toBeCalled()
    })
  })
})
