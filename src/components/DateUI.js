import React from "react"
import { string } from "prop-types"
import moment from "moment"
import "../assets/scss/DateUI.scss"

const DateUI = ({ createdAt }) => (
  <div className="date">{moment(createdAt).format("DD-MM-YYYY h:mm:ss")}</div>
)

DateUI.propTypes = {
  createdAt: string.isRequired,
}

export default DateUI
