import axios from "../__mocks__/axios"

export default (state, action) => {
  console.log("Reducer Messsage")
  console.log("Action", action.type)
  // console.log("payload", action.payload)
  switch (action.type) {
    case "LAZY_LOAD":
      return [...state, ...action.payload]
    case "LOAD_MORE":
      return [...action.payload, ...state]
    case "ADD_MESSAGE":
      axios.post("/message", {
        ...action.payload,
      })
      return [...state, action.payload]
    default:
      return state
  }
}
