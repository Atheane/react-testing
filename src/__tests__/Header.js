import React from "react"
import { render } from "@testing-library/react"
import Header from "../components/Header"

describe("Header component", () => {
  describe("when rendered", () => {
    test("renders title and img elements", () => {
      const { getByText, getByAltText } = render(<Header />)
      const headerText = getByText(/Battlestar Galactitchache/i)
      expect(headerText).toBeInTheDocument()
      const img = getByAltText(/logo/i)
      expect(img).toBeInTheDocument()
    })
  })
})
