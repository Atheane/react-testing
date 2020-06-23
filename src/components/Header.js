import React from "react"

import logo from "../assets/images/BattlestartGallactica.jpg"
import "../assets/scss/Header.scss"

const Header = () => (
  <header className="header">
    <img src={logo} className="logo" alt="logo" />
    <div>Battlestar Galactitchache</div>
  </header>
)

export default Header
