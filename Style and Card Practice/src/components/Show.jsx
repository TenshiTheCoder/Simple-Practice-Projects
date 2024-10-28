import "../style/Show.css"
import { useState } from 'react'
function Show() {
  const [show, setShow] = useState(false)
  if (show) {
    return (
      <div className = "hide-container">
        <button className = "hide-button" onClick ={() => setShow(false)}>Hide Me!</button>
      </div>
    )
  }
  return (
    <div className = "show-container">
      <button className = "show-button" onClick ={() => setShow(true)}>Show Me!</button>
    </div>
  )
}

export default Show