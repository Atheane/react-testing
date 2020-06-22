import { useContext } from "react"
import StoreContext from "../Store"

export default () => {
  const store = useContext(StoreContext)
  return store
}
