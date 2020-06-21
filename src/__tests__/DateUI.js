import React from "react"
import { render } from "@testing-library/react"
import DateUI from "../components/DateUI"

describe("DateUI component", () => {
  describe("when rendered", () => {
    test("date is displayed", () => {
      const { getByText } = render(
        <DateUI createdAt="2020-06-21T10:18:22.045Z" />
      )
      const dateText = getByText(
        /^([0-2][0-9]|(3)[0-1])-(((0)[0-9])|((1)[0-2]))-(\d{4})/i
      )
      expect(dateText).toBeInTheDocument()
    })
  })
})
