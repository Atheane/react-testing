import React from "react"
import { PageHeader } from "antd"

import logo from "../assets/images/BattlestartGallactica.jpg"
import "../assets/scss/Header.scss"

const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="logo" />
      <PageHeader title="Battlestar Galactitchache" />
    </header>
  )
}

export default Header
