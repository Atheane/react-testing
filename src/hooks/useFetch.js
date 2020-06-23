import { useState, useEffect } from "react"
import axios from "../__mocks__/axios"

export default (dispatchMessages) => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const lazyLoad = async () => {
      setLoading(true)
      try {
        const result = await axios.get("/messages")
        dispatchMessages({ type: "LAZY_LOAD", payload: result.data })
        setLoading(false)
      } catch (err) {
        setError(err)
        setLoading(false)
      }
    }
    lazyLoad()

    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        const loadMore = async () => {
          setLoading(true)
          try {
            const result = await axios.get("/messages")
            dispatchMessages({ type: "LOAD_MORE", payload: result.data })
            setLoading(false)
          } catch (err) {
            setError(err)
            setLoading(false)
          }
        }
        loadMore()
      }
    })
  }, [dispatchMessages])

  return {
    loading,
    error,
  }
}
